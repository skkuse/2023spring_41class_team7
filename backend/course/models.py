from typing import Optional
from django.db import models
from django.conf import settings
from django.core.files.storage import FileSystemStorage
import os

from user.models import User
# Create your models here.

class OverwriteStorage(FileSystemStorage):
    
    def get_available_name(self, name, max_length=None):
        if self.exists(name):
            os.remove(os.path.join(settings.MEDIA_ROOT, name))
        return name

class Tag(models.Model):
    category = models.CharField(max_length=30)
    title = models.CharField(max_length=30)

    def __str__(self):
        return self.category + ' - ' + self.title


class Course(models.Model):
    title = models.CharField(max_length=100)
    intro = models.CharField(max_length=100)
    mascot = models.ImageField(upload_to='mascot', default='mascot/default_image.jpeg', storage=OverwriteStorage)
    thumbnail = models.ImageField(upload_to='thumbnail', default='thumbnail/default_thumbnail.jpeg', storage=OverwriteStorage)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    tag = models.ForeignKey(Tag, on_delete=models.CASCADE)
    learner_count = models.PositiveIntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title


def content_path():
    return os.path.join(settings.MEDIA_ROOT, 'content')

def index_path():
    return os.path.join(settings.MEDIA_ROOT, 'index')

class Chapter(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    intro = models.TextField(blank=True, default='')
    content = models.FilePathField(path=content_path)
    index = models.FilePathField(path=index_path)
    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True) 

    class Meta:
        order_with_respect_to = "course"

    def __str__(self) -> str:
        return str(self.course.title) + ' - ' + self.title
