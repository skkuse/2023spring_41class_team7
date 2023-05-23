from django.shortcuts import render
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response 
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth import login, logout

from .models import User
from .serializers import UserSerializer, RegistrationSerializer, LoginSerializer
# Create your views here.

class UserRegistration(APIView):
    serializer_class = RegistrationSerializer

    def post(self, request, format=None):
        serializer = RegistrationSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response({ 'user': serializer.data })


class UserLogin(APIView):
    serializer_class = LoginSerializer

    def post(self, request, format=None):
        serializer = LoginSerializer(data=request.data, context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        login(request, user)
        return Response({ 'user': UserSerializer(user).data })
    
    def get(self, request, format=None):
        logout(request)
        return Response(None, status=status.HTTP_202_ACCEPTED)


class Example(APIView):
    authentication_classes = [SessionAuthentication, BasicAuthentication]
    permission_classes = [IsAuthenticated]
    
    def get(self, request, format=None):
        users = User.objects.all()
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data)