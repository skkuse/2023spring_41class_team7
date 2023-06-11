from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response

from .models import CourseRoom, ChapterRoom, ChapterChatData, QuizRoom, QuizChatData

from .serializers import ChapterChatSerializer, QuizChatSerialiezer
from course.serializers import CourseSerializer, ChapterSerializer
from feedback.serializers import QuizSerializer

from .task import create_feedback

from chatbot.chatbot_interface import answer_user_question, answer_quiz_question

# Create your views here.
class CourseTake(APIView):
    serializer_class = ChapterChatSerializer
    CONTEXT_LENGTH = 5

    def get(self, request, course_id):
        '''
        REST GET API for general course and specific chapter.

        IF query param 'chapter' is given, it only returns chat data belonging to that chapter and learner.
        
        ELSE, it returns overall course information required at learner's course taking page including
        the course, all chapters of the course, last_chapter taken by learner, chat data of the last chapter.

        :param course_id: pk of course interested
        '''
        course_room, created = CourseRoom.objects.get_or_create(course_id=course_id, learner=request.user)
        chapter_id = request.query_params.get('chapter')

        if chapter_id:
            if not chapter_id.isnumeric():
                return Response('wrong chapter id', status=status.HTTP_400_BAD_REQUEST)
            chapter_room, created = ChapterRoom.objects.get_or_create(
                course_room=course_room, 
                chapter_id=int(chapter_id),
                learner=request.user)

            if created:
                ChapterChatData.objects.create(
                    room=chapter_room, data=chapter_room.chapter.intro, bot=True)
            
            serializer = ChapterChatSerializer(chapter_room.chat.all(), many=True)
            return Response(serializer.data)
        else:
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
        REST POST API for chatting when taking the course.

        query param 'chapter' should be given, otherwise, it returns 400 BAD REQUEST.

        It generates and returns chatbot response using subset of chat history. Also, it updates
        last_attempt of course and chapter room.
        The size of subset is defined in class attribute 'CONTEXT_LENGTH'. This attribute is also
        used to generate feedback. The feedback is generated every 'CONTEXT_LENGTH' chats.

        :param course_id: pk of course
        '''
        serializer = ChapterChatSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        chapter_id = request.query_params.get('chapter')

        if chapter_id is None or not chapter_id.isnumeric():
            return Response('wrong chapter id', status=status.HTTP_400_BAD_REQUEST)
        
        course_room = get_object_or_404(CourseRoom, course_id=course_id, learner=request.user)
        chapter_room = get_object_or_404(ChapterRoom, course_room=course_room, chapter_id=int(chapter_id))
        course_room.save()
        chapter_room.save()
        serializer.save(room=chapter_room)
        
        query = make_query_string(chapter_room.chat.order_by('-timestamp')[:CourseTake.CONTEXT_LENGTH:-1])
        response = get_chatbot_answer(chapter_room.chapter.index, query)

        serializer = ChapterChatSerializer(data={'data': response, 'bot': True})
        serializer.is_valid(raise_exception=True)
        serializer.save(room=chapter_room)

        if chapter_room.chat.count() % CourseTake.CONTEXT_LENGTH < 2:
            history = make_query_string(chapter_room.chat.order_by('-timestamp')[:CourseTake.CONTEXT_LENGTH:-1])
            create_feedback.delay(history, course_room.course.id, chapter_id)

        return Response(serializer.data)


class QuizTake(APIView):
    serializer_class = QuizChatSerialiezer

    def get(self, request, quiz_id):
        quiz_room, created = QuizRoom.objects.get_or_create(quiz_id=quiz_id, learner=request.user)

        if created:
            QuizChatData.objects.create(room=quiz_room, data=quiz_room.quiz.question, bot=True)

        serializer = QuizChatSerialiezer(quiz_room.chat.all(), many=True)
        return Response({ 'quiz': QuizSerializer(quiz_room.quiz).data, 'chat': serializer.data })
    
    def post(self, request, quiz_id):
        serializer = QuizChatSerialiezer(data=request.data)
        serializer.is_valid(raise_exception=True)
        quiz_room = get_object_or_404(QuizRoom, quiz_id=quiz_id, learner=request.user)
        quiz_room.save()
        serializer.save(room=quiz_room)
        
        query = make_query_string(quiz_room.chat.all())
        query = f'\n참고로 문제의 답은 {quiz_room.quiz.answer}입니다.\n'
        response = get_chatbot_answer_for_quiz(quiz_room.quiz.chapter.index, query)

        serializer = QuizChatSerialiezer(data={'data': response, 'bot': True})
        serializer.is_valid(raise_exception=True)
        serializer.save(room=quiz_room)
        return Response(serializer.data)


def make_query_string(history):
    query_str = ''
    for chat in history:
        query_str += 'AI:\n' if chat.bot else 'Human:\n'
        query_str += chat.data
        query_str += '\n\n'
    return query_str

def get_chatbot_answer(index, history):
    response = answer_user_question(index, history)
    st = response.rfind('AI:')
    st = st + len('AI:') if st >= 0 else 0
    return response[st:].strip()


def get_chatbot_answer_for_quiz(index, history):
    response = answer_quiz_question(index, history)
    st = response.rfind('AI:')
    st = st + len('AI:') if st >= 0 else 0
    return response[st:].strip()