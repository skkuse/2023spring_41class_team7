from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response

from .models import CourseRoom, ChapterRoom, ChapterChatData, QuizRoom, QuizChatData
from user.models import User
from .serializers import ChapterChatSerializer, QuizChatSerialiezer
# from course.models import Course, Chapter
# from course.serializers import 
# Create your views here.
class CourseTake(APIView):
    serializer_class = ChapterChatSerializer

    def get(self, request, course_id):
        '''
        강의 수강을 위해 강의 배너 등을 클릭했을 때 받는 요청
        강의 메타 정보와 수강 이력이 있는 챕터 중 가장 마지막 챕터 챗 데이터 반환
        and
        특정 챕터 정보를 요청
        해당 챕터 챗 데이터 반환, 만약 처음이면 이력을 생성하고 반환
        '''
        chapter_id = request.query_params.get('chapter')
        # return Response(chapter_id)
        course_room, created = CourseRoom.objects.get_or_create(course=course_id, learner=request.user)
        course_room.save()


        if chapter_id:
            '해당 챕터 정보만 반환'
            chapter_id = int(chapter_id)
            chapter_room, created = ChapterRoom.objects.get_or_create(course_room=course_room, chapter=chapter_id)
            chapter_room.save()

            if created:
                ChapterChatData.objects.create(
                    room=chapter_room, data=chapter_room.chapter.intro, bot=True)
            
            serializer = ChapterChatSerializer(chapter_room.chat.all(), many=True)
            return Response(serializer.data)
        else:
            '강의 전체 정보랑 마지막 챕터 정보 반환'
            if created:
                chapter = course_room.course.chapter_set.first()
                chapter_room = ChapterRoom.objects.create(course_room=course_room, chapter=chapter)
                ChapterChatData.objects.create(room=chapter_room, data=chapter.intro, bot=True)
                last_chapter = chapter_room
            else:
                last_chapter = course_room.chapter_rooms.latest('timestamp')

            serializer = ChapterChatSerializer(last_chapter.chat.all(), many=True)
            return Response({
                'course': course_room.course, 'chapter': course_room.chapter_set.all(), 
                'last_chapter': last_chapter.chapter.id, 'chat': serializer.data})
    
    def post(self, request, course_id):
        '''
        채팅 보내오면 저장하고 응답생성해서 반환
        '''
        chapter = int(request.query_params.get('chapter'))
        serializer = ChapterChatSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        # chapter_room = get_object_or_404(ChapterRoom, chapter=chapter, learner=request.user)
        # serializer.save(room=chapter_room)

        '''
        TODO: OPENAI 사용해서 응답 받아오기
        history = chapter_room.chat.all()
        '''
        response = 'response'
        serializer = ChapterChatSerializer(data={'data': response, 'bot': True})
        serializer.is_valid(raise_exception=True)
        # serializer.save(room=chapter_room)
        return Response(serializer.data)



class QuizTake(APIView):
    serializer_class = QuizChatSerialiezer

    def get(self, request, quiz_id):
        '''
        퀴즈 배너 등을 눌렀을 때 받는 요청
        퀴즈 메타 정보와 수강이력을 반환. 만약 처음이면 이력 생성
        '''
        quiz_room, created = QuizRoom.objects.get_or_create(quiz=quiz_id, learner=request.user)
        quiz_room.save()

        if created:
            QuizChatData.objects.create(room=quiz_room, data=quiz_room.quiz.problem, bot=True)

        serializer = QuizChatSerialiezer(quiz_room.chat.all(), many=True)
        return Response({ 'quiz': 'a', 'chat': serializer.data })
    
    def post(self, request, quiz_id):
        '''
        채팅 보내오면 저장하고 응답생성해서 반환
        '''
        serializer = QuizChatSerialiezer(data=request.data)
        serializer.is_valid(raise_exception=True)
        # quiz_room = get_object_or_404(QuizRoom, quiz=quiz_id, learner=request.user)
        # serializer.save(room=quiz_room)

        '''
        TODO: OPENAI 사용해서 응답 받아오기
        history = chapter_room.chat.all()
        '''
        response = 'response'
        serializer = QuizChatSerialiezer(data={'data': response, 'bot': True})
        # serializer.is_valid(raise_exception=True)
        # serializer.save(room=quiz_room)
        return Response(serializer.data)