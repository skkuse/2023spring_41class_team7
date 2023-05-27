from .models import Course, Tag, Chapter
from feedback.serializers import AnalysisSerializer
from rest_framework import serializers
from config.settings import MEDIA_ROOT
from .task import create_intro
import os

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = '__all__'

# 컨텐츠로 들어온 텍스트를 html 파일로 저장
def convert_str_to_html(content: str, content_path):
    Func = open(content_path, "w+")
    Func.write(content)
    Func.close()

def convert_html_to_str(content_path):
    Func = open(content_path, "r", encoding="UTF-8")
    return Func.read()

class ChapterSerializer(serializers.ModelSerializer):
    content = serializers.SerializerMethodField()

    class Meta:
        model = Chapter
        fields = ['id', 'course', 'title', 'intro', 'content', 'created_at', 'modified_at']

    def get_content(self, obj: Chapter):
        return convert_html_to_str(obj.content)

class ChapterPostSerializer(serializers.ModelSerializer):
    content = serializers.CharField()

    class Meta:
        model = Chapter
        fields = ['id', 'course', 'title', 'intro', 'content', 'created_at', 'modified_at']

    def create(self, validated_data: dict):
        content = validated_data.pop('content')
        chapter = Chapter.objects.create(**validated_data)

        content_path = os.path.join(MEDIA_ROOT, 
                                    f"content/course_{chapter.course.id}/content_{chapter.id}.html")
        os.makedirs(os.path.dirname(content_path), exist_ok=True)
        convert_str_to_html(content, content_path)
        chapter.content = content_path

        index_path = os.path.join(MEDIA_ROOT, 
                                  f"index/course_{chapter.course.id}/index_{chapter.id}.json" )
        os.makedirs(os.path.dirname(index_path), exist_ok=True)
        chapter.index = index_path
        chapter.save()

        # 컨텐츠 파일 경로의 html을 보고 인덱스 파일 경로에 해당하는 인덱스 파일을 저장
        # function(chapter)
        # 컨텐츠 파일 경로의 html을 보고 인스턴스의 intro를 생성해서 save()
        create_intro.delay(chapter.id)

        return chapter
    
    def update(self, instance: Chapter, validated_data: dict):
        instance.title = validated_data['title']
        instance.intro = validated_data['intro']
        instance.save()

        content = validated_data.pop('content')
        convert_str_to_html(content, instance.content)

        # 컨텐츠 파일 경로의 html을 보고 인덱스 파일 경로에 해당하는 인덱스 파일을 저장
        # function(instance)
        # 컨텐츠 파일 경로의 html을 보고 인스턴스의 intro를 생성해서 save()
        # function(instance) 

        return instance

# 강의들을 보이기 위한 용도의 Serializer
class CourseSerializer(serializers.ModelSerializer):
    mascot = serializers.ImageField(use_url=True, required=False)
    thumbnail = serializers.ImageField(use_url=True, required=False)
    author = serializers.CharField(source='author.username', read_only=True)
    tag = serializers.CharField(source='tag.title', read_only=True)

    class Meta:
        model = Course
        fields = ['id', 'title', 'intro', 'mascot', 'thumbnail', 'author', 'tag', 'learner_count', 'created_at', 'modified_at']

# 강의 등록, 수정, 및 삭제를 위한 Serializer
class CoursePostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = ['id', 'title', 'intro', 'mascot', 'thumbnail', 'tag']
    
# 자신의 강의를 관리하기 위한 용도의 Serializer
class CourseMySerializer(serializers.ModelSerializer):
    chapters = ChapterSerializer(source='chapter_set', many=True)

    class Meta:
        model = Course
        fields = ['id', 'title', 'intro', 'mascot', 'thumbnail', 'tag', 'chapters']
