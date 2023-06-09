from django.shortcuts import get_object_or_404
from course.models import Course, Tag, Chapter
from course.serializers import CourseSerializer, CoursePostSerializer, CourseMySerializer, ChapterSerializer, ChapterPostSerializer
from django.db.models import QuerySet
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, generics, filters
from django_filters.rest_framework import DjangoFilterBackend

def serialize_tags(tags: QuerySet[Tag]):
        
    response_dict = dict()
    for tag in tags:
        if tag.category in response_dict:
            response_dict[tag.category].append(
                {'title': tag.title, 'id': tag.pk})
        else:
            response_dict[tag.category] = [
                {'title': tag.title, 'id': tag.pk}]
    
    response = []
    for category in response_dict:
        response.append(
            {'category': category, 'titles': response_dict[category]})

    return response

class TagList(APIView):
    """
    Controller for tags
    """
    def get(self, request, format=None):
        tags = Tag.objects.all()
        return Response(serialize_tags(tags))
    

class CourseList(generics.ListCreateAPIView):
    """
    Controller for courses

    Provides GET, POST requests for courses.
    Also supports filetring by tag and searching for title or author for course.
    """
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    filterset_fields = ['tag']
    search_fields = ['title', 'author__nickname'] 

    def get_queryset(self):
        queryset = Course.objects.all()

        my = self.request.query_params.get('my')
        if my is not None:
            queryset = queryset.filter(author=self.request.user)
        return queryset

    def get_serializer_class(self):
        if self.request.method == 'GET':
            return CourseSerializer
        return CoursePostSerializer
    
    def perform_create(self, serializer):
        return serializer.save(author=self.request.user)

class CourseDetail(APIView):
    """
    Controller for course with id (primary key)

    Provides GET, PUT, DELETE requests for course
    Also supports validating the user requested
    """
    serializer_class = CoursePostSerializer
    
    def get(self, request, pk, format=None):
        course = get_object_or_404(Course, pk=pk)
        serializer = CourseMySerializer(course)
        return Response(serializer.data)
    
    def put(self, request, pk, format=None):
        course = get_object_or_404(Course, pk=pk)
        
        if request.user != course.author or request.user.educator == False:
            return Response(status=status.HTTP_403_FORBIDDEN)
        
        serializer = CoursePostSerializer(course, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, pk, format=None):
        course = get_object_or_404(Course, pk=pk)
        
        if request.user != course.author or request.user.educator == False:
            return Response(status=status.HTTP_403_FORBIDDEN)
        
        course.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    
class ChapterList(generics.ListCreateAPIView):
    """
    Contorller for chapters

    Provides GET, POST requests for chapters
    Also supports filetring by course
    """
    queryset = Chapter.objects.all()
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['course']

    def get_serializer_class(self):
        if self.request.method == 'GET':
            return ChapterSerializer
        return ChapterPostSerializer
    
class ChapterDetail(APIView):
    """
    Controller for Chapter with id (primary key)

    Provides GET, PUT, DELETE requests for chapter
    Also supports validating the user requested 
    """
    serializer_class = ChapterPostSerializer

    def get(self, request, pk, format=None):
        chapter = get_object_or_404(Chapter, pk=pk)
        serializer = ChapterSerializer(chapter)
        return Response(serializer.data)
    
    def put(slef, request, pk, formant=None):
        chapter = get_object_or_404(Chapter, pk=pk)
        
        if request.user != chapter.course.author or request.user.educator == False:
            return Response(status=status.HTTP_403_FORBIDDEN)
        
        serializer = ChapterPostSerializer(chapter, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        chapter = get_object_or_404(Chapter, pk=pk)
        chapter.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)