import LectureItem from "../../components/LectureItem";
import {
  MainContainer,
  QuizContainer,
  Quiz,
  LectureContainer,
  TitleContainer,
  Title,
  TotalCourseNum,
  TotalCourseNumDiv,
  QuizImage,
} from "./style";
import Navbar from "../../components/Navbar";
import { OuttestContainer } from "../../components/OuttestContainer/style";
import { faThumbtack, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, Route, Routes, useNavigate, useParams } from "react-router-dom";
import { MostOuterDiv } from "../../components/MostOuterDiv/style";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import { serverAxios } from "../../utils/commonAxios";

import quiz from "../../assets/images/quiz.png";

function MainPage() {
  const { tag } = useParams();
  const navigate = useNavigate();

  const [courseItem, setCourseItem] = useState(null);

  const handleQuizClick = () => {
    navigate("/quiz");
  };

  useEffect(() => {
    if (tag) {
      console.log(tag);
      getCourseItems(tag);
    } else {
      console.log("here");
      getALLCourseItems();
    }
  }, [tag]);

  const getALLCourseItems = async () => {
    await serverAxios
      .get("course/course/", { withCredentials: true })
      .then((res) => setCourseItem(res.data))
      .catch((err) => console.log(err));
  };

  const getCourseItems = async (tag) => {
    await serverAxios
      .get("course/course/?tag=" + tag, { withCredentials: true })
      .then((res) => setCourseItem(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <MostOuterDiv>
      <Header></Header>
      <OuttestContainer>
        <Navbar />
        <MainContainer>
          <QuizContainer onClick={handleQuizClick}>
            {/* <Link
              to="/quiz"
              style={{ textDecoration: "none", color: "#48413D" }}
            > */}
            {/* <Quiz>
                오늘의 퀴즈 풀어보기
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ color: "#48413D", marginLeft: "5px" }}
                />
              </Quiz> */}

            <span>오늘의</span>
            <QuizImage src={quiz}></QuizImage>
            <FontAwesomeIcon
              icon={faStar}
              style={{ color: "#48413D", marginLeft: "5px" }}
            />
            {/* </Link> */}
          </QuizContainer>
          <TitleContainer>
            <Title>
              <FontAwesomeIcon
                icon={faThumbtack}
                style={{ marginRight: "10px" }}
              />
              강의 목록
            </Title>
          </TitleContainer>
          {courseItem && (
            <TotalCourseNumDiv>
              총:
              <TotalCourseNum> {courseItem.length}</TotalCourseNum>개
            </TotalCourseNumDiv>
          )}
          <LectureContainer>
            {/*강의 목록 리스트 ( 강의 아이템 )*/}
            {courseItem ? (
              courseItem.map((item) => (
                <LectureItem key={item.id} info={item} />
              ))
            ) : (
              <></>
            )}
          </LectureContainer>
        </MainContainer>
      </OuttestContainer>
    </MostOuterDiv>
  );
}

export default MainPage;
