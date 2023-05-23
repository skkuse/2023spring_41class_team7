from django.shortcuts import get_object_or_404
from course.models import Course
from course.serializers import CourseSerializer
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

# Create your views here.
class CourseList(APIView):
    serializer_class = CourseSerializer

    def get(self, request, format=None):
        courses = Course.objects.all()
        serializer = CourseSerializer(courses, many=True)
        return Response(serializer.data)
    
    def post(self, request, format=None):
        serializer = CourseSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class CourseDetail(APIView):
    serializer_class = CourseSerializer
    
    def get(self, request, pk, format=None):
        course = get_object_or_404(Course, pk=pk)
        serializer = CourseSerializer(course)
        return Response(serializer.data)
    
    def put(self, request, pk, format=None):
        course = get_object_or_404(Course, pk=pk)
        """
        if request.user != course.author:
            return Response(status=status.HTTP_403_FORBIDDEN)
        """
        serializer = CourseSerializer(course, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, pk, format=None):
        course = get_object_or_404(Course, pk=pk)
        """
        if request.user != course.author:
            return Response(status=status.HTTP_403_FORBIDDEN)
        """
        course.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)