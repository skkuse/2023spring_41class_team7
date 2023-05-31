from django.urls import path

from . import views

app_name = 'user'

urlpatterns = [
    path('create/', views.UserRegistration.as_view(), name='create-user'),
    path('auth/', views.UserLogin.as_view(), name='login-user'),
    path('course/', views.TakenCourse.as_view())
]