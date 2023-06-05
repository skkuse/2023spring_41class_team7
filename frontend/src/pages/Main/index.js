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
import SearchHeader from "../../components/SearchHeader";
import Header from "../../components/Header";


function MainPage() {
  return (
    <MostOuterDiv>
      <SearchHeader></SearchHeader>
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
            <LectureItem />
            <LectureItem />
            <LectureItem />
            <LectureItem />
            <LectureItem />
            <LectureItem />
            <LectureItem />
            <LectureItem />
          </LectureContainer>
        </MainContainer>
      </OuttestContainer>
    </MostOuterDiv>
  );
}

export default MainPage;
