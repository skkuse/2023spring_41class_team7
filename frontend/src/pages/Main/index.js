import LectureItem from "../../components/LectureItem";
import {
  MainContainer,
  QuizContainer,
  Quiz,
  LectureContainer,
  TitleContainer,
  Title,
} from "./style";
import Navbar from "../../components/Navbar";
import { OuttestContainer } from "../../components/OuttestContainer/style";
import { faThumbtack, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { MostOuterDiv } from "../../components/MostOuterDiv/style";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import { serverAxios } from "../../utils/commonAxios";

function MainPage() {
  const [courseItem, setCourseItem] = useState(null);

  useEffect(() => {
    getCourseItems();
  }, []);

  const getCourseItems = async () => {
    await serverAxios
      .get("course/course/", { withCredentials: true })
      .then((res) => setCourseItem(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <MostOuterDiv>
      <Header></Header>
      <OuttestContainer>
        <Navbar />
        <MainContainer>
          <QuizContainer>
            <Link to="/" style={{ textDecoration: "none", color: "#48413D" }}>
              <Quiz>
                오늘의 퀴즈 풀어보기
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ color: "#48413D", marginLeft: "5px" }}
                />
              </Quiz>
            </Link>
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
