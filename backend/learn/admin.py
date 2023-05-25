from django.contrib import admin

from .models import CourseRoom, ChapterRoom, QuizRoom, ChapterChatData, QuizChatData
# Register your models here.
admin.site.register(CourseRoom)
admin.site.register(ChapterRoom)
admin.site.register(QuizRoom)
admin.site.register(ChapterChatData)
admin.site.register(QuizChatData)