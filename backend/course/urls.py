from django.urls import include, path
from . import views

urlpatterns = [
    path('course/', views.CourseList.as_view()),
    path('course/<int:pk>/', views.CourseDetail.as_view()),
    path('tag/', views.TagList.as_view()),
    path('chapter/', views.ChapterList.as_view()),
    path('chapter/<int:pk>/', views.ChapterDetail.as_view())
] 