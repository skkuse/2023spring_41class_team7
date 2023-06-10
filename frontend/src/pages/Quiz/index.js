import Header from "../../components/Header";
import { useState, useEffect } from "react";
import { CodeEditorQuiz } from "../../components/CodeEditorQuiz";

import ChattingInterfaceQuiz from "../../components/ChattingQuiz";
import { OuttestContainer } from "../../components/OuttestContainer/style";
import {
  ChatContainer,
  ContentContainer,
  IdxContainer,
  LecContainer,
  PageContainer,
  SideBar,
} from "../Learning/style";
import { MostOuterDiv } from "../../components/MostOuterDiv/style";
import {
  QuizPageContainer,
  QuizChatContainer,
  QuizInfoContainer,
  QuizOuterContainer,
  QuizTitleContainer,
  QuizEditorContainer,
} from "./style";
import React from "react";
import setShow from "../../components/CodeEditor/index.js";
import { useNavigate, useParams } from "react-router-dom";
import { serverAxios } from "../../utils/commonAxios";

function QuizPage(props) {
  let quiz_id = Number(useParams().quizid);
  const [quizInfoReady, setQuizInfoReady] = useState(false);
  const [quizInfo, setQuizInfo] = useState("");
  const [chattingData, setChatting] = useState([]);
  const [clickFlag, setClickFlag] = useState(false);


  const getQuizInfo = async () => {
    await serverAxios
      .get("/learn/quiz/" + quiz_id + "/", { withCredentials: true })
      .then((response) => {
        setQuizInfoReady(true);
        setQuizInfo(JSON.parse(JSON.stringify(response.data)));
        console.log(response.data);
        setChatting(response.data.chat);
      });
  }

  useEffect( () => {
    getQuizInfo();
  }, [clickFlag]);

  const [userLearningLectureListReady, setUserLearningLecturListReady] = useState(false);
  const [showUserLearningLectureList, setShowUserLearningLectureList] = useState("");
  
  const getUserLearningLectureList = async () => {
      await serverAxios
        .get("/user/course/", { withCredentials: true })
        .then((response) => {
          setUserLearningLecturListReady(true);
          setShowUserLearningLectureList(JSON.parse(JSON.stringify(response.data)));
        });
    }
  
  useEffect( () => {
    getUserLearningLectureList();
  }, []);

  return (
    <MostOuterDiv>
      <Header></Header>
      <OuttestContainer>
        <QuizPageContainer>
          <QuizChatContainer>
          <QuizTitleContainer>
              {quizInfoReady && userLearningLectureListReady &&
                (
                  showUserLearningLectureList.map( (lectureInfo, i) => {
                    if(lectureInfo.id === quizInfo.quiz.course){
                      return <div style={{textAlign: 'center', paddingTop: '1%'}}>{lectureInfo.title} - {quizInfo.quiz.id}</div>
                    }
                  } ) 
                )
              }
          </QuizTitleContainer>
            
            <ChattingInterfaceQuiz
                 chattingData={chattingData}
                 setChatting={setChatting}
                 clickFlag={clickFlag}
                 setClickFlag={setClickFlag}
                />
           
            
          </QuizChatContainer>
          <CodeEditorQuiz
          chattingData={chattingData}
          setChatting={setChatting}
          clickFlag={clickFlag}
          setClickFlag={setClickFlag}
          > </CodeEditorQuiz>
        </QuizPageContainer>
      </OuttestContainer>
    </MostOuterDiv>
  );
}

export default QuizPage;
