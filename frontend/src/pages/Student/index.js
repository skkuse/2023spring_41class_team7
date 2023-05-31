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

function QuizItem() {
  return (
    <QuizItemContainer>
      <span>
        <FontAwesomeIcon
          icon={faTerminal}
          style={{ color: "#e1e7f5", marginRight: "15px" }}
        />
        강의 제목 올 자리 입니다.
      </span>
      <QuizTag>퀴즈 #1</QuizTag>
    </QuizItemContainer>
  );
}

function StudentPage() {
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
              {/* scroll 문제 발생 ... 살려줘 */}
              <LectureProgress />
              <LectureProgress />
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
            <QuizItem />
            <QuizItem />
            <QuizItem />
            <QuizItem />
          </QuizListContainer>
        </PageContainer>
      </OuttestContainer>
    </MostOuterDiv>
  );
}

export default StudentPage;
