from .models import Course, Tag, Chapter
from rest_framework import serializers
from django.conf import settings
import os

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ['id', 'category', 'title']

class CourseSerializer(serializers.ModelSerializer):
    mascot = serializers.ImageField(use_url=True, required=False)
    thumbnail = serializers.ImageField(use_url=True, required=False)
    tag_title = serializers.CharField(source='tag.title', read_only=True)

    class Meta:
        model = Course
        fields = ['id', 'title', 'mascot', 'thumbnail', 'tag_title', 'tag', 'learner_count', 'created_at', 'modified_at']

class ChapterSerializer(serializers.ModelSerializer):
    content = serializers.FileField(use_url=True, required=True)

    class Meta:
        model = Chapter
        fields = ['id', 'course', 'title', 'intro', 'content', 'created_at', 'modified_at']

    def create(self, validated_data):
        chapter = Chapter.objects.create(**validated_data)

        print(chapter.content) # path of content

        index_path = f"/media/index/course_{chapter.course.id}/index_{chapter.id}.json" 
        chapter.index = index_path
        chapter.save()

        # function(chapter.content, chapter.index)

        return chapter
    
    def update(self, instance, validated_data):
        instance.title = validated_data['title']
        instance.intro = validated_data['intro']
        instance.content = validated_data['content']
        instance.save()

        # function(instance.content, instance.index)

        return instance
