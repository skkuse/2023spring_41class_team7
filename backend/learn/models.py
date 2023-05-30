from django.db import models

from user.models import User
from course.models import Course, Chapter
from feedback.models import Quiz
# Create your models here.
class CourseRoom(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    learner = models.ForeignKey(User, on_delete=models.CASCADE, related_name='taken_courses')
    last_attempt = models.DateTimeField(auto_now=True)


class ChapterRoom(models.Model):
    course_room = models.ForeignKey(CourseRoom, on_delete=models.CASCADE, related_name='chapter_rooms')
    chapter = models.ForeignKey(Chapter, on_delete=models.CASCADE)
    learner = models.ForeignKey(User, on_delete=models.CASCADE, related_name='taken_chapters')
    last_attempt = models.DateTimeField(auto_now=True)


class QuizRoom(models.Model):
    quiz = models.ForeignKey(Quiz, on_delete=models.CASCADE)
    learner = models.ForeignKey(User, on_delete=models.CASCADE)
    last_attempt = models.DateTimeField(auto_now=True)


class ChapterChatData(models.Model):
    room = models.ForeignKey(ChapterRoom, on_delete=models.CASCADE, related_name='chat')
    data = models.TextField()
    bot = models.BooleanField()
    timestamp = models.DateTimeField(auto_now_add=True)

    class Meta:
        order_with_respect_to = 'room'


class QuizChatData(models.Model):
    room = models.ForeignKey(QuizRoom, on_delete=models.CASCADE, related_name='chat')
    data = models.TextField()
    bot = models.BooleanField()
    timestamp = models.DateTimeField(auto_now_add=True)

    class Meta:
        order_with_respect_to = 'room'