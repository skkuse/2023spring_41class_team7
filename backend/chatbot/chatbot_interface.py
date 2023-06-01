# llama-index 0.6.2
# openai 0.27.7
# langchain 0.0.179

import os
from llama_index import LLMPredictor, GPTVectorStoreIndex, PromptHelper, ServiceContext
from llama_index import QuestionAnswerPrompt
from langchain.chat_models import ChatOpenAI
from llama_index import StorageContext, load_index_from_storage
from llama_index import SimpleDirectoryReader
from pathlib import Path
import openai
from langchain.chains import ConversationChain
from langchain.memory import ConversationBufferMemory
from dotenv import load_dotenv


def get_service_ctx():
    llm_predictor = LLMPredictor(llm=ChatOpenAI(temperature=0, model_name="gpt-3.5-turbo"))
    max_input_size = 4096
    num_output = 512
    max_chunk_overlap = 20
    prompt_helper = PromptHelper(max_input_size, num_output, max_chunk_overlap)
    service_context = ServiceContext.from_defaults(llm_predictor=llm_predictor, prompt_helper=prompt_helper, chunk_size_limit=1024)

    return service_context


def content_to_index(content_filepath, index_dirpath):
    ''' 
    Makes indexes for given content file and saves them to storage;
    
    args:
        -content_filepath (str): file path to content file to make index of (per chapter; directory with all chapter content files)
        -index_filepath (str): file path (directory) to store the chapter index
    '''
    
    documents = SimpleDirectoryReader(input_files=[content_filepath]).load_data()

    service_context = get_service_ctx()

    index = GPTVectorStoreIndex([], service_context=service_context)
    for document in documents:
        index.insert(document)

    index.storage_context.persist(persist_dir=index_dirpath)


def make_chapter_intro(chapter_index_path):
    ''' 
    Returns chatbot-generated chapter intro describing chapter learning summary;

    args:
        -chapter_index_path (str): file path to the index of the chapter (directory of the stored indices)
    returns:
        -summary (str): chatbot-generated chapter summary
    '''
    service_context = get_service_ctx()

    storage_context = StorageContext.from_defaults(persist_dir=chapter_index_path)
    index = load_index_from_storage(storage_context=storage_context, service_context=service_context)

    # SUMMARY_PROMPT_TMPL = (
    #     "Summarize what a student reading the following content will learn\n"
    #     "and format the response in a way that describes to the student an overview of the content."
    #     "{context_str}"
    # )

    # SUMMARY_PROMPT = SummaryPrompt(SUMMARY_PROMPT_TMPL)
    # query_engine = index.as_query_engine(text_qa_template=SUMMARY_PROMPT)

    query_engine = index.as_query_engine(response_mode="tree_summarize")

    intro_prompt = """
        당신은 한국의 중학생 및 고등학생에게 코딩을 알려주는 친절한 챗봇입니다.
        이번 장에서 배우게 될 프로그래밍 언어 문법 및 기능들에 대하여 내용을 요약하여
        한국말로 학생들이 쉽게 이해할 수 있게, 선생님이 학생들을 가르칠 때 사용하는
        어감으로 설명하여 주세요.
    """ 

    summary = query_engine.query(intro_prompt) #<summarization_str>

    return summary.response


def answer_user_question(index_filepath, query_str):
    '''
    Queries over the index given with filepath to generate chatbot ai
    response regarding query_str from user;

    args:
        -index_filepath (str): the file path to the pre-stored index regarding current lecture chapter content
        -query_str (str): string containing user question
    returns:
        -response (str): response from chatbot ai
    '''
    service_context = get_service_ctx()

    storage_context = StorageContext.from_defaults(persist_dir=index_filepath)
    index = load_index_from_storage(storage_context=storage_context, service_context=service_context)

    QA_PROMPT_TMPL = (
        "당신은 한국의 중학생 및 고등학생에게 코딩과 관련한 질문들에 답해주는 친절한 챗봇입니다.\n"
        "다음은 이번 장에서 학생들이 배우는 프로그래밍 관련 내용들입니다.\n"
        "{context_str}"
        "위의 내용을 바탕으로 학생의 다음 질문에 대하여 한국말로, 선생님이 학생에게 가르칠 때 사용하는 친절한 어감을 통해 답해주세요.\n"
        "{query_str}"
    )

    QA_PROMPT = QuestionAnswerPrompt(QA_PROMPT_TMPL)

    query_engine = index.as_query_engine(text_qa_template=QA_PROMPT)
    answer = query_engine.query(query_str)

    return answer.response


def generate_feedback(chat_history, index_filepath):
    '''
    Generates and returns feedback to report to lecturer;

    args:
        -chat_history (str): chat history between user and chatbot for current chapter
        -index_filepath (str): directory path where chapter related indices are stored
    returns:
        -feedback (str): feedback generated by chatbot
    '''

    service_context = get_service_ctx()

    storage_context = StorageContext.from_defaults(persist_dir=index_filepath)
    index = load_index_from_storage(storage_context=storage_context, service_context=service_context)

    QA_PROMPT_TMPL = (
        "당신은 한국의 중학생 및 고등학생에게 코딩과 관련한 질문들에 답해주는 친절한 챗봇입니다.\n"
        "다음은 이번 장에서 학생들이 배우는 프로그래밍 관련 내용들입니다.\n"
        "{context_str}"
        "다음은 학생이 학습을 도와주는 챗봇과 이번 장을 학습을 진행하며 나눈 대화이며, 학생의 말은 'Human:'으로, 챗봇의 말은 'AI:'로 시작합니다: " + chat_history + "\n"
        "{query_str}"
    )

    query_str = "이를 바탕으로 학생이 이번 장을 학습하며 어려워하거나 헷갈려하고 있는 부분들을 요약하여 주세요."

    QA_PROMPT = QuestionAnswerPrompt(QA_PROMPT_TMPL)

    query_engine = index.as_query_engine(text_qa_template=QA_PROMPT)
    feedback = query_engine.query(query_str)

    # conversation = ConversationChain(
    #     llm=ChatOpenAI(temperature=0, model_name="gpt-3.5-turbo"),
    #     memory=ConversationBufferMemory()
    # )

    # chat_history_list = chat_history.split('\n')
    # for chat in chat_history_list:
    #     if chat[0] == "H":
    #         conversation.memory.chat_memory.add_user_message(chat[7:])
    #     else:
    #         conversation.memory.chat_memory.add_ai_message(chat[4:])
    # feedback = conversation.predict(input="지금까지의 대화내용을 바탕으로 사용자가 이번 장을 학습하는데 어려워하는 부분에 대한 피드백을 작성하시오.")

    return feedback.response


def generate_quiz(feedback, index_filepath):
    '''
    Generates and returns quiz and answer based on feedback and lecture chapter contents;

    args:
        -feedback (str): the string containing feedback from chatbot about current chapter
        -index_filepath (str): directory path where chapter related indices are stored
    returns:
        -quiz (str): the quiz for the current chapter and feedback generated by chatbot
        -answer (str): the answer to the quiz
    '''
    
    service_context = get_service_ctx()
    storage_context = StorageContext.from_defaults(persist_dir=index_filepath)
    index = load_index_from_storage(storage_context=storage_context, service_context=service_context)

    QA_PROMPT_TMPL = (
        "당신은 한국의 중학생 및 고등학생의 코딩 학습을 도와주는 친절한 챗봇입니다.\n"
        "다음은 이번 장에서 학생이 학습하는 내용 입니다.\n"
        "{context_str}"
        "다음은 학생이 학습에 있어 헷갈려하거나 어려움을 겪고 있는 부분을 요약한 내용입니다: " + feedback + "\n"
        "{query_str}"
    )

    query_str = """
        학생이 헷갈리거나 어려워하는 내용을 학습할 수 있게끔 이번 장과 관련된 퀴즈 문제 1개와 그에 대한 답을 같이 만들어주세요.
        퀴즈 문제는 '[퀴즈]'로 시작하여 내용을 출력하고 답은 '[답]'으로 시작하여 내용을 출력하여 주세요. 
        만약 객관식 퀴즈를 만들게 된다면, 답을 선택할 수 있는 보기를 빼먹지 말고 모두 출력하여 주세요.
    """

    QA_PROMPT = QuestionAnswerPrompt(QA_PROMPT_TMPL)

    query_engine = index.as_query_engine(text_qa_template=QA_PROMPT)
    generated = query_engine.query(query_str).response
    #print(generated.response)

    start_idx = generated.find('[퀴즈]')
    end_idx = generated.find('[답]')

    quiz = generated[start_idx + len('[퀴즈]'):end_idx]
    answer = generated[end_idx + len('[답]'):]

    return quiz, answer


def evaluate_code(code):
    '''
    Evaluates given user code.

    args:
        -code (str): the code provided by user in string format
    returns:
        -evaluation (str): evaluation of the code generated by chatbot
    '''
    prompt_prefix = """
        당신은 한국의 중학생 및 고등학생의 코드 실습을 도와주는 친절한 챗봇입니다.
        다음은 학생이 실습을 하며 작성한 코드입니다. \n
    """

    response = openai.Completion.create(
        model="text-davinci-003",
        prompt=prompt_prefix + code + "\n\"\"\"\n위의 코드에 대한 평가를 한국말로 256자 이내에서 답변하여주세요:\n1",
        temperature=0,
        max_tokens=256,
        top_p=1.0,
        frequency_penalty=0.0,
        presence_penalty=0.0,
        stop=["\"\"\""]
    )
    evaluation = response['choices'][0]['text'][2:]
    #print(response)

    return evaluation#.encode("cp949").decode()


def generate_analysis(feedbacks, index_filepath):
    '''
    Generates analysis of user feedbacks regarding a lecture.

    args:
        -index_filepath (str): the file path to the pre-stored index regarding current lecture chapter content
        -feedbacks (str): concatenated string of feedbacks of users attending current lecture
    returns:
        -analysis (str): ai-generated analysis of current users to report to lecturer
    '''
    service_context = get_service_ctx()
    storage_context = StorageContext.from_defaults(persist_dir=index_filepath)
    index = load_index_from_storage(storage_context=storage_context, service_context=service_context)

    QA_PROMPT_TMPL = (
        "다음은 이번 장에서 학생들이 학습하는 내용 입니다.\n"
        "{context_str}"
        "다음은 이번 장을 수강하는 학생들이 학습에 있어 헷갈려하거나 어려움을 겪고 있는 부분을 요약한 내용입니다: " + feedbacks + "\n"
        "{query_str}"
    )

    query_str = """
        위의 내용들을 바탕으로 이번 장을 수강하는 학생들의 학습 현황을 강의자에게 보고하는 형식으로 작성하여 주세요.
    """

    QA_PROMPT = QuestionAnswerPrompt(QA_PROMPT_TMPL)

    query_engine = index.as_query_engine(text_qa_template=QA_PROMPT)
    generated = query_engine.query(query_str)

    analysis = generated.response

    return analysis


load_dotenv()
openai_api_key = os.environ.get('OPENAI_API_KEY')
openai.api_key = os.getenv("OPENAI_API_KEY")


# if __name__ == "__main__":
#     load_dotenv()
#     openai_api_key = os.environ.get('OPENAI_API_KEY')
#     openai.api_key = os.getenv("OPENAI_API_KEY")
    
#     #content_to_index('./lecture_contents', './storage/chapter3')
#     #make_chapter_intros('./storage/chapter3', './lecture_contents/intros')

#     sample_function2 = """

#     def bubble_sort(arr):
#         for i in range(len(arr) - 1, 0, -1):
#             for j in range(i):
#                 if arr[j] > arr[j + 1]:
#                     arr[j], arr[j + 1] = arr[j + 1], arr[j]
                    
#     """

#     #print(evaluate_code(sample_function2))

#     print(generate_quiz('사용자는 while문에서 break와 continue를 잘못 사용함.', './storage/chapter3'))

#     #chat_history = "Human: while문에서 break와 continue의 차이를 모르겠어. 설명해줘\nAI: break는 반복문을 종료하고 continue는 반복문의 다음으로 넘어가는 것입니다."

#     #print(generate_feedback(chat_history))
