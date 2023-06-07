from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics, status
from .models import Analysis
from .serializers import AnalysisSerializer
from .task import generate_quiz_set, generate_analysis_set

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


class AnalysisGenerate(APIView):
    """
    Controller for generating analysis perioidically
    """
    def get(self, request, format=None):
        try:
            generate_analysis_set.delay()
            return Response(status=status.HTTP_201_CREATED)
        except:
            return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class QuizGenerate(APIView):
    """
    Controller for generating quiz peroidically
    """
    def get(self, request, format=None):
        try:
            generate_quiz_set.delay()
            return Response(status=status.HTTP_201_CREATED)
        except:
            return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)
