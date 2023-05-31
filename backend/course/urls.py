from django.urls import include, path
from course import views

from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('course/', views.CourseList.as_view()),
    path('course/<int:pk>/', views.CourseDetail.as_view()),
    path('tag/', views.TagList.as_view()),
    path('chapter/', views.ChapterList.as_view()),
    path('chapter/<int:pk>/', views.ChapterDetail.as_view())
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)