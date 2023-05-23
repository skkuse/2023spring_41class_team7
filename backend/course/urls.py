from django.urls import include, path
from course import views

from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', views.CourseList.as_view()),
    path('<int:pk>/', views.CourseDetail.as_view())
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)