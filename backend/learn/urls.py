from django.urls import path

from . import views

app_name = 'learn'

urlpatterns = [
    path('course/<int:course_id>/', views.CourseTake.as_view(), name='course-take'),
    path('quiz/<int:quiz_id>/', views.QuizTake.as_view(), name='quiz-take'),
]