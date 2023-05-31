from .models import Course, Tag, Chapter
from feedback.serializers import AnalysisSerializer
from rest_framework import serializers
from config.settings import MEDIA_ROOT
from .task import content_to_index_intro
import os

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = '__all__'


def convert_str_to_html(content, content_path):
    """
    save content as html file into filepath

    Args:
        content (str): the content of lecture
        content_path (str): the filepath where content file should be saved
    """
    Func = open(content_path, "w+")
    Func.write(content)
    Func.close()

def convert_html_to_str(content_path):
    """
    Returns content which is saved into content file (.html)

    Args:
        content_path (str): file path where content file is saved
    """
    Func = open(content_path, "r", encoding="UTF-8")
    return Func.read()

class ChapterSerializer(serializers.ModelSerializer):
    """
    Serializer for monitoring and managing chapter by educators
    """
    content = serializers.SerializerMethodField()

    class Meta:
        model = Chapter
        fields = ['id', 'course', 'title', 'intro', 'content', 'created_at', 'modified_at']

    def get_content(self, obj: Chapter):
        return convert_html_to_str(obj.content)

class ChapterPostSerializer(serializers.ModelSerializer):
    """
    Serializer for registering chapter for educators
    """
    content = serializers.CharField()

    class Meta:
        model = Chapter
        fields = ['id', 'course', 'title', 'intro', 'content', 'created_at', 'modified_at']

    def create(self, validated_data: dict):
        """
        Create chapter object with index files

        It creates chapter object, generates index files then
        generates intro using index files
        """
        content = validated_data.pop('content')
        chapter = Chapter.objects.create(**validated_data)

        content_path = os.path.join(MEDIA_ROOT, 
                                    f"content/course_{chapter.course.id}/content_{chapter.id}.html")
        os.makedirs(os.path.dirname(content_path), exist_ok=True)
        convert_str_to_html(content, content_path)
        chapter.content = content_path

        index_path = os.path.join(MEDIA_ROOT, 
                                  f"index/course_{chapter.course.id}/index_{chapter.id}/" )
        os.makedirs(index_path)
        chapter.index = index_path
        chapter.save()

        content_to_index_intro.delay(content_path, index_path, chapter.id)

        return chapter
    
    def update(self, instance: Chapter, validated_data: dict):
        """
        Updates chapter object with index files (PUT method)
        """
        instance.title = validated_data['title']
        instance.save()

        content = validated_data.pop('content')
        convert_str_to_html(content, instance.content)

        content_to_index_intro.delay(instance.content, instance.index, instance.id)

        return instance


class CourseSerializer(serializers.ModelSerializer):
    """
    Serializer for showing course info
    """
    mascot = serializers.ImageField(use_url=True, required=False)
    thumbnail = serializers.ImageField(use_url=True, required=False)
    author = serializers.CharField(source='author.username', read_only=True)
    tag = serializers.CharField(source='tag.title', read_only=True)

    class Meta:
        model = Course
        fields = ['id', 'title', 'intro', 'mascot', 'thumbnail', 'author', 'tag', 'learner_count', 'created_at', 'modified_at']


class CoursePostSerializer(serializers.ModelSerializer):
    """
    Serializer for registering, modifying, and deleting course for educators
    """
    class Meta:
        model = Course
        fields = ['id', 'title', 'intro', 'mascot', 'thumbnail', 'tag']
    

class CourseMySerializer(serializers.ModelSerializer):
    """
    Serializer for monitoring and managing courses for educators
    """
    chapters = ChapterSerializer(source='chapter_set', many=True)

    class Meta:
        model = Course
        fields = ['id', 'title', 'intro', 'mascot', 'thumbnail', 'tag', 'chapters']
