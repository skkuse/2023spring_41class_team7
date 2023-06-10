from celery import shared_task
from django.db import transaction
from .models import Feedback, Analysis, Quiz
from chatbot.chatbot_interface import generate_quiz, generate_analysis

@shared_task
def generate_quiz_set():
    """
    Generate quizs with recent 3 feedbacks

    Load the latest 3 feedbacks from DB
    Generate quiz set from them and save into DB
    """
    with transaction.atomic():
        recent_feedbacks = Feedback.objects.all()[:1] # Feedback default ordered by -created_at

        for feedback in recent_feedbacks:
            question, answer = generate_quiz(feedback.content, feedback.chapter.index)
            validated_data = {'course': feedback.course, 'chapter': feedback.chapter,
                              'question': question, 'answer': answer}
            Quiz.objects.create(**validated_data)


@shared_task
def generate_analysis_set():
    """
    Generate quizs with recent 3 feedbacks

    Load the latest 3 feedbacks from DB
    Generate anlaysis set from them and save into DB
    """
    with transaction.atomic():
        recent_feedbacks = Feedback.objects.all()[:1]

        for feedback in recent_feedbacks:
            analysis = generate_analysis(feedback.content, feedback.chapter.index)
            validated_data = {'course': feedback.course, 'content': analysis,}
            Analysis.objects.create(**validated_data)
