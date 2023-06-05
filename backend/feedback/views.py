from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics, status
from .models import Analysis
from .serializers import AnalysisSerializer
from .task import generate_quiz_set

# Create your views here.

class AnalysisDetail(generics.ListAPIView):
    """
    Controller for analysis

    get analaysis which is for course with given id
    There are many anlaysis for chapters in course, so 
    give the latest one
    """
    serializer_class = AnalysisSerializer

    def get_queryset(self):
        course_id = self.kwargs['course_id']
        analysis_set = Analysis.objects.filter(course = course_id)
        return [analysis_set.latest('created_at')]
    
class QuizGenerate(APIView):

    def get(self, request, format=None):
        generate_quiz_set()
        return Response(status=status.HTTP_201_CREATED)