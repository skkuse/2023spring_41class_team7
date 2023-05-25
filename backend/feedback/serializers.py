from .models import Feedback, Quiz, Analysis
from rest_framework import serializers

class FeedbackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Feedback
        fields = ['id', 'course', 'content', 'created_at']

class QuizSerializer(serializers.ModelSerializer):
    class Meta:
        model = Quiz
        fields = ['id', 'course', 'question', 'content', 'created_at']

class Analysis(serializers.ModelSerializer):
    class Meta:
        model = Analysis
        fields = ['id', 'course', 'content', 'created_at']
