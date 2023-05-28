from rest_framework import serializers

from .models import ChapterChatData, QuizChatData

class ChapterChatSerializer(serializers.ModelSerializer):
    class Meta:
        model = ChapterChatData
        fields = ('data', 'bot', 'timestamp')


class QuizChatSerialiezer(serializers.ModelSerializer):
    class Meta:
        model = QuizChatData
        fields = ('data', 'bot', 'timestamp')