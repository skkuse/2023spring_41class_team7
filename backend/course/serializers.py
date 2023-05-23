from course.models import Course
from rest_framework import serializers

class CourseSerializer(serializers.HyperlinkedModelSerializer):
    mascot = serializers.ImageField(use_url=True, required=False)
    thumbnail = serializers.ImageField(use_url=True, required=False)

    class Meta:
        model = Course
        fields = ['title', 'mascot', 'thumbnail', 'learner_count', 'created_at', 'modified_at']