from celery import shared_task
from django.db import transaction

from feedback.models import Feedback

from chatbot.chatbot_interface import generate_feedback

@shared_task
def create_feedback(history, course_id, chapter_id):
    content = generate_feedback(history)
    with transaction.atomic():
        Feedback.objects.create(
            course_id=course_id, 
            chapter_id=chapter_id, 
            content=content)
