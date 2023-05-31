from celery import shared_task
from django.db import transaction
from .models import Feedback, Analysis, Quiz
from chatbot.chatbot_interface import generate_quiz

@shared_task
def generate_quiz_set():
    with transaction.atomic():
        recent_feedbacks = Feedback.objects.all()[:1]

        for feedback in recent_feedbacks:
            question, answer = generate_quiz(feedback.content, feedback.chapter.index)
            validated_data = {'course': feedback.course, 'chapter': feedback.chapter,
                              'question': question, 'answer': answer}
            Quiz.objects.create(**validated_data)