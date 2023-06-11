from celery import shared_task
from django.db import transaction

from feedback.models import Feedback, Quiz, Analysis

from chatbot.chatbot_interface import generate_feedback, generate_quiz, generate_analysis

@shared_task
def create_feedback(history, course_id, chapter_id):
    content = generate_feedback(history)
    
    with transaction.atomic():
        feedback = Feedback.objects.create(
            course_id=course_id, 
            chapter_id=chapter_id, 
            content=content)
        
        question, answer = generate_quiz(content, feedback.chapter.index)
        Quiz.objects.create(
            course_id=course_id,
            chapter_id=chapter_id,
            question=question,
            answer=answer
        )

        analysis = generate_analysis(content, feedback.chapter.index)
        Analysis.objects.create(
            course_id=course_id,
            content=analysis
        )