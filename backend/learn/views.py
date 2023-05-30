from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response

from .models import CourseRoom, ChapterRoom, ChapterChatData, QuizRoom, QuizChatData

from .serializers import ChapterChatSerializer, QuizChatSerialiezer
from course.serializers import CourseSerializer, ChapterSerializer

from .task import create_feedback

from chatbot.chatbot_interface import answer_user_question

# Create your views here.
class CourseTake(APIView):
    serializer_class = ChapterChatSerializer
    CONTEXT_LENGTH = 10

    def get(self, request, course_id):
        '''
        강의 수강을 위해 강의 배너 등을 클릭했을 때 받는 요청
        강의 메타 정보와 수강 이력이 있는 챕터 중 가장 마지막 챕터 챗 데이터 반환
        and
        특정 챕터 정보를 요청
        해당 챕터 챗 데이터 반환, 만약 처음이면 이력을 생성하고 반환
        '''
        course_room, created = CourseRoom.objects.get_or_create(course_id=course_id, learner=request.user)
        course_room.save()

        chapter_id = request.query_params.get('chapter')

        if chapter_id:
            '해당 챕터 정보만 반환'
            if not chapter_id.isnumeric():
                return Response('wrong chapter id', status=status.HTTP_400_BAD_REQUEST)
            chapter_room, created = ChapterRoom.objects.get_or_create(
                course_room=course_room, 
                chapter_id=int(chapter_id),
                learner=request.user)
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
                chapter_room = ChapterRoom.objects.create(
                    course_room=course_room, 
                    chapter=chapter,
                    learner=request.user)
                ChapterChatData.objects.create(room=chapter_room, data=chapter.intro, bot=True)
                last_chapter = chapter_room
            else:
                last_chapter = course_room.chapter_rooms.latest('last_attempt')

            serializer = ChapterChatSerializer(last_chapter.chat.all(), many=True)
            return Response({
                'course': CourseSerializer(course_room.course).data, 
                'chapter': ChapterSerializer(course_room.course.chapter_set.all(), many=True).data, 
                'last_chapter': last_chapter.chapter.id, 'chat': serializer.data})
    
    def post(self, request, course_id):
        '''
        채팅 보내오면 저장하고 응답생성해서 반환
        '''
        serializer = ChapterChatSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        chapter_id = request.query_params.get('chapter')

        if chapter_id is None or not chapter_id.isnumeric():
            return Response('wrong chapter id', status=status.HTTP_400_BAD_REQUEST)
        
        course_room = get_object_or_404(CourseRoom, course_id=course_id, learner=request.user)
        chapter_room = get_object_or_404(ChapterRoom, course_room=course_room, chapter_id=int(chapter_id))
        serializer.save(room=chapter_room)
        
        query = make_query_string(chapter_room.chat.all())
        response = answer_user_question(chapter_room.chapter.index, query)

        serializer = ChapterChatSerializer(data={'data': response, 'bot': True})
        serializer.is_valid(raise_exception=True)
        serializer.save(room=chapter_room)

        if len(chapter_room.chat) % CourseTake.CONTEXT_LENGTH == 0:
            history = make_query_string(chapter_room.chat[-CourseTake.CONTEXT_LENGTH:])
            create_feedback(history, course_room.course.id, chapter_id)

        return Response(serializer.data)


class QuizTake(APIView):
    serializer_class = QuizChatSerialiezer

    def get(self, request, quiz_id):
        '''
        퀴즈 배너 등을 눌렀을 때 받는 요청
        퀴즈 메타 정보와 수강이력을 반환. 만약 처음이면 이력 생성
        '''
        quiz_room, created = QuizRoom.objects.get_or_create(quiz_id=quiz_id, learner=request.user)
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
        quiz_room = get_object_or_404(QuizRoom, quiz_id=quiz_id, learner=request.user)
        serializer.save(room=quiz_room)
        
        query = make_query_string(quiz_room.chat.all())
        response = answer_user_question(quiz_room.chapter.index, query)

        serializer = QuizChatSerialiezer(data={'data': response, 'bot': True})
        serializer.is_valid(raise_exception=True)
        serializer.save(room=quiz_room)
        return Response(serializer.data)


def make_query_string(history):
    query_str = ''
    for chat in history:
        query_str += 'AI: ' if chat.bot else 'Human: '
        query_str += chat.data
        query_str += '\n\n'
    return query_str