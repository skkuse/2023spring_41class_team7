from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Analysis
from .serializers import AnalysisSerializer

# Create your views here.

class AnalysisDetail(APIView):
    
    def get(self, request, course_id, format=None):
        analysis_set = Analysis.objects.filter(course_id=course_id)
        analysis = analysis_set.latest('created_at')
        serializer = AnalysisSerializer(analysis)
        return Response(serializer.data)