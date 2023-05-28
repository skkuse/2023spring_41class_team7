from celery import shared_task
from django.db import transaction
from .models import Chapter

@shared_task
def create_intro(chapter_id):
    with transaction.atomic():
        chapter = Chapter.objects.get(pk=chapter_id)
        chapter.intro = '잘 찾아오셨습니다!'
        chapter.save()
