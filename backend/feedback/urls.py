from django.urls import include, path
from feedback import views

from django.conf import settings

urlpatterns = [
   path('analysis/<int:course_id>/', views.AnalysisDetail.as_view()),
   path('quiz/', views.QuizGenerate.as_view()),
   path('analysis/', views.AnalysisGenerate.as_view())
]