from django.urls import path

from . import views

app_name = 'user'

urlpatterns = [
    path('example/', views.Example.as_view(), name='example'),
    path('create/', views.UserRegistration.as_view(), name='create-user'),
    path('auth/', views.UserLogin.as_view(), name='login-user'),
]