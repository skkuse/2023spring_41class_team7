from rest_framework import status
from rest_framework.generics import ListAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from django.contrib.auth import login, logout

from .serializers import UserSerializer, RegistrationSerializer, LoginSerializer, TakenCourseSerializer
# Create your views here.

class UserRegistration(APIView):
    permission_classes = [AllowAny]
    serializer_class = RegistrationSerializer

    def post(self, request):
        serializer = RegistrationSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)


class UserLogin(APIView):
    permission_classes = [AllowAny]
    serializer_class = LoginSerializer

    def post(self, request):
        serializer = LoginSerializer(data=request.data, context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        login(request, user)
        return Response(UserSerializer(user).data, status=status.HTTP_201_CREATED)
    
    def get(self, request):
        logout(request)
        return Response(None, status=status.HTTP_202_ACCEPTED)


class TakenCourse(ListAPIView):
    serializer_class = TakenCourseSerializer

    def get_queryset(self):
        return self.request.user.taken_courses.order_by('-last_attempt')