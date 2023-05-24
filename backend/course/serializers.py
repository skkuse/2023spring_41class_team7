from course.models import Course, Tag
from rest_framework import serializers

class CourseSerializer(serializers.ModelSerializer):
    mascot = serializers.ImageField(use_url=True, required=False)
    thumbnail = serializers.ImageField(use_url=True, required=False)
    tag_title = serializers.CharField(source='tag.title', read_only=True)

    class Meta:
        model = Course
        fields = ['title', 'mascot', 'thumbnail', 'tag_title', 'tag', 'learner_count', 'created_at', 'modified_at']

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ['category', 'title']