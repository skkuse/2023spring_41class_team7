from celery import shared_task
from django.db import transaction
from .models import Feedback, Analysis, Quiz
from chatbot.chatbot_interface import generate_quiz, generate_analysis

@shared_task
def generate_quiz_set():
    """
    Generate quizs with recent feedback

    Load the latest feedback from DB
    Generate quiz set from them and save into DB
    """
    with transaction.atomic():
        feedback = Feedback.objects.latest('created_at')
        
        question, answer = generate_quiz(feedback.content, feedback.chapter.index)
        validated_data = {'course': feedback.course, 'chapter': feedback.chapter,
                              'question': question, 'answer': answer}
        Quiz.objects.create(**validated_data)


@shared_task
def generate_analysis_set():
    """
    Generate quizs with recent feedback

    Load the latest feedback from DB
    Generate anlaysis set from them and save into DB
    """
    with transaction.atomic():
        feedback = Feedback.objects.latest('created_at')

        analysis = generate_analysis(feedback.content, feedback.chapter.index)
        validated_data = {'course': feedback.course, 'content': analysis,}
        Analysis.objects.create(**validated_data)
