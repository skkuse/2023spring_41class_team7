from celery import shared_task
from django.db import transaction
from .models import Chapter
from chatbot.chatbot_interface import content_to_index, make_chapter_intro

@shared_task
def content_to_index_intro(content_path, index_path, chapter_id):
    """
    Generate index (.json) files and inro using those index files about content

    Args:
        content_path (string): filepath which contains content (.html)
        index_path (stirng): filepath which points to directory which containes index (.json) files
        chapter_id : id of chapter instance
    
    Example:
        content_to_index_intro('media/content/course_1/content_1.html', 'media/index/course_1/index_1/', 1)
    """
    content_to_index(content_path, index_path)

    with transaction.atomic():
        chapter = Chapter.objects.get(pk=chapter_id)
        chapter.intro = make_chapter_intro(chapter.index)
        chapter.save()

