from django.urls import path
from django.contrib.auth import views as auth_views

from . import views

app_name = 'course'

urlpatterns = [
    path('', views.test_view, name='test_view')
]