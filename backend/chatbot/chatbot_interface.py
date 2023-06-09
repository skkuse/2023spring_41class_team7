# llama-index 0.6.2
# openai 0.27.7
# langchain 0.0.179

import os
from llama_index import LLMPredictor, GPTVectorStoreIndex, PromptHelper, ServiceContext
from llama_index import QuestionAnswerPrompt
from langchain.chat_models import ChatOpenAI
from llama_index import StorageContext, load_index_from_storage
from llama_index import SimpleDirectoryReader
import openai
from langchain.chains import ConversationChain
from langchain.memory import ConversationBufferMemory
from dotenv import load_dotenv
from langchain.prompts.prompt import PromptTemplate


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

    query_engine = index.as_query_engine(response_mode="tree_summarize")

    intro_prompt = """
        당신은 한국의 중학생 및 고등학생에게 마치 친한 친구처럼 코딩을 알려주는 친절한 챗봇입니다.
        이번 장에서 배우게 될 프로그래밍 언어 문법 및 기능들에 대하여 내용을 요약하여
        한국말로 학생들이 쉽게 이해할 수 있게, 살갑게 마치 친한 친구가 알려주는 것처럼 말해주세요.
        '니다'로 끝나는 말보다는 '요'나 '요!'로 끝나는 말을 사용하여 답해주세요.
        예를 들어 '배웁니다' 보다는 '배울거에요!'로 말을 해주세요.
    """ 

    summary = query_engine.query(intro_prompt).response 

    return summary


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
        "위의 내용을 바탕으로 학생의 다음 질문에 대하여 한국말로, 마치 친한 친구가 알려주는 것처럼 말해주세요.\n"
        "'니다'로 끝나는 말보다는 '요'나 '요!'로 끝나는 말을 사용하여 답해주세요.\n"
        "예를 들어 '입니다' 보다는 '인거에요!'로 말을 해주세요.\n"
        "{query_str}"
    )

    QA_PROMPT = QuestionAnswerPrompt(QA_PROMPT_TMPL)

    query_engine = index.as_query_engine(text_qa_template=QA_PROMPT)
    answer = query_engine.query(query_str)

    return answer.response


def answer_quiz_question(index_filepath, query_str):
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
        "당신은 퀴즈를 출제하고 코딩과 관련한 질문들에 답해주는 친절한 AI입니다.\n"
        "다음은 퀴즈가 제출된 챕터에서 학생들이 배우는 프로그래밍 관련 내용들입니다.\n"
        "{context_str}"
        "\n위 내용을 바탕으로 퀴즈가 출제되었고, 이를 Human이 맞추는 상황입니다. 당신은 AI로써 질문에 답하거나, 답이 틀렸다면 힌트를 제공하고,"
        "답이 맞았다면 격려의 말을 전해주세요.\n"
        "위의 내용을 바탕으로 Human과의 대화 내용을 완성해주세요. 한국말로, 마치 친한 친구가 알려주는 것처럼 말해주세요.\n"
        "'니다'로 끝나는 말보다는 '요'나 '요!'로 끝나는 말을 사용하여 답해주세요.\n"
        "예를 들어 '입니다' 보다는 '인거에요!'로 말을 해주세요.\n"
        "{query_str}"
    )

    QA_PROMPT = QuestionAnswerPrompt(QA_PROMPT_TMPL)

    query_engine = index.as_query_engine(text_qa_template=QA_PROMPT)
    answer = query_engine.query(query_str)

    return answer.response



def generate_feedback(chat_history):
    '''
    Generates and returns feedback to report to lecturer;

    args:
        -chat_history (str): chat history between user and chatbot for current chapter
    returns:
        -feedback (str): feedback generated by chatbot
    '''

    template = "다음은 코딩을 배우는 학생이 학습을 도와주는 AI와 학습을 진행하며 나눈 대화입니다. {history}" + chat_history + "\nHuman: {input}\nAI:"

    PROMPT = PromptTemplate(
        input_variables=["history", "input"], template=template
    )

    conversation = ConversationChain(
        prompt=PROMPT, llm=ChatOpenAI(temperature=0, model_name="gpt-3.5-turbo"),
        memory=ConversationBufferMemory(human_prefix="Human")
    )

    feedback = conversation.predict(input="지금까지의 대화내용을 바탕으로 학생이 이번 장을 학습하는데 어려워하는 부분에 대한 피드백을 작성하여 주세요.")

    return feedback


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
        위의 내용을 기반으로 학생이 헷갈리거나 어려워하는 내용을 학습할 수 있게끔 이번 장과 관련된 퀴즈 문제 1개와 그에 대한 답을 같이 만들어주세요.
        퀴즈 문제는 '[퀴즈]'로 시작하여 내용을 출력하고 답은 '[답]'으로 시작하여 내용을 출력하여 주세요. 
        만약 객관식 퀴즈를 만들게 된다면, 답을 선택할 수 있는 보기를 빼먹지 말고 모두 출력하여 주세요.
    """

    QA_PROMPT = QuestionAnswerPrompt(QA_PROMPT_TMPL)

    query_engine = index.as_query_engine(text_qa_template=QA_PROMPT)
    generated = query_engine.query(query_str).response

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
    prompt_suffix = """
        위의 코드에 대한 평가를 한국말로 256자 이내에서 문장이 끊기지 않게 학생의 친한 친구가 말해주듯이 답변하여주세요.
        '니다'보다는 '요'나 '요!'로 끝나는 문장을 써주세요.
        '안녕하세요'는 말하지 말고 답을 하는 중 문장이 끊기지 않게 유의하여 주세요.\n
    """

    response = openai.Completion.create(
        model="text-davinci-003",
        prompt=prompt_prefix + code + "\n\"\"\"\n" + prompt_suffix,
        temperature=0,
        max_tokens=256,
        top_p=1.0,
        frequency_penalty=0.0,
        presence_penalty=0.0,
        stop=["\"\"\""]
    )
    evaluation = response['choices'][0]['text']

    return evaluation


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