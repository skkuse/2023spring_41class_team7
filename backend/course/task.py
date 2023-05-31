from celery import shared_task
from django.db import transaction
from .models import Chapter
from chatbot.chatbot_interface import content_to_index, make_chapter_intro

@shared_task
def content_to_index_intro(content_path, index_path, chapter_id):
    content_to_index(content_path, index_path)

    with transaction.atomic():
        chapter = Chapter.objects.get(pk=chapter_id)
        chapter.intro = make_chapter_intro(chapter.index)
        chapter.save()

