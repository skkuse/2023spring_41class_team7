import {
  PageContainer,
  ProgressContainer,
  QuizContainer,
  TitleContainer,
  Title,
  ListContainer,
  QuizListContainer,
  QuizItemContainer,
  QuizTag,
} from "./style";
import { faThumbtack, faTerminal } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { OuttestContainer } from "../../components/OuttestContainer/style";
import Navbar from "../../components/Navbar";
import LectureProgress from "../../components/LectureProgress";
import { MostOuterDiv } from "../../components/MostOuterDiv/style";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import { serverAxios } from "../../utils/commonAxios";
import { useNavigate } from "react-router-dom";

function QuizItem(props) {
  const navigate = useNavigate();
  const quizClick = (quiz_id, e) => {
    navigate("/learn/quiz/" + quiz_id);
  }
  let quiz_id = props.quizdata.id;
  let course_id = props.quizdata.course;
  let course_title = "";
  for(let idx = 0; idx < props.lecturedata.length; idx++){
    if(course_id == props.lecturedata[idx].id){
      course_title = props.lecturedata[idx].title;
    }
  }
  
  return (
    <QuizItemContainer onClick = {(e)=>{quizClick(quiz_id, e)}}>
      <span>
        <FontAwesomeIcon
          icon={faTerminal}
          style={{ color: "#e1e7f5", marginRight: "15px" }}
        />
        {course_title}
      </span>
      <QuizTag>#{quiz_id}</QuizTag>
    </QuizItemContainer>
  );
}

function StudentPage() {

  const [userLearningLecturListReady, setUserLearningLecturListReady] = useState(false);
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


  const [userQuizListReady, setUserQuizListReady] = useState(false);
  const [showUserQuizList, setShowUserQuizList] = useState("");
  
  const getUserQuizList = async () => {
      await serverAxios
        .get("/user/quiz/", { withCredentials: true })
        .then((response) => {
          setUserQuizListReady(true);
          setShowUserQuizList(JSON.parse(JSON.stringify(response.data)));
          console.log(response.data);
        });
    }
  
  useEffect( () => {
    getUserQuizList();
  }, []);


  return (
    <MostOuterDiv>
      <Header />
      <OuttestContainer>
        <Navbar />
        <PageContainer>
          {/* 수강중인 강의 */}
          <ProgressContainer>
            <TitleContainer>
              <Title>
                <FontAwesomeIcon
                  icon={faThumbtack}
                  style={{ marginRight: "15px" }}
                />
                수강중인 강의
              </Title>
            </TitleContainer>
              <ListContainer>
                {userLearningLecturListReady && 
                      (
                      showUserLearningLectureList.map( (a, i) => {
                          return <LectureProgress data={a} num={i} key={i}></LectureProgress>
                        } ) 
                      )
                  }
              </ListContainer>
          </ProgressContainer>
          {/* 나만의 퀴즈 */}
          <TitleContainer>
            <Title>
              <FontAwesomeIcon
                icon={faThumbtack}
                style={{ marginRight: "15px" }}
              />
              나만의 퀴즈
            </Title>
          </TitleContainer>
          <QuizListContainer>
            {userQuizListReady && 
              (
                showUserQuizList.map( (a, i) => {
                  return <QuizItem quizdata={a} lecturedata={showUserLearningLectureList} num={i} key={i} ></QuizItem>
                } ) 
              )
            }
          </QuizListContainer>
        </PageContainer>
      </OuttestContainer>
    </MostOuterDiv>
  );
}

export default StudentPage;
