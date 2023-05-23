import Button from "../Button";
import {
  AIImage,
  ButtonsContainer,
  CourseInfoContainer,
  CourseIntroductionContainer,
  CourseLogo,
  CourseTitleContainer,
  FeedbackContatiner,
  FeedbackImage,
  FeedbackMessageContainer,
  InstructorCourseCardContainer,
  InstructorCourseCardOuterContainer,
  RowButtonsContainer,
} from "./style";
import feedback from "../../assets/images/feedback.png";
import { useState } from "react";

function InstructorCourseCard(props) {
  const [courseTitle, setCourseTitle] = useState("입문자를 위한 파이썬 기초");
  const [courseIntroduction, setCourseIntroduction] = useState(
    "파이썬 기초부터 탄탄하게 공부해요 ^*^"
  );

  const [feedbackMessage, setFeedbackMessage] = useState("");

  const [toggleFeedback, setToggleFeedback] = useState(false);

  const handleModifyClick = () => {
    alert("수정하기");
  };

  const handleCancelClick = () => {
    alert("삭제하기");
  };

  const handleFeedbackClick = () => {
    setToggleFeedback(!toggleFeedback);
    if (toggleFeedback) {
    } else {
    }
  };

  return (
    <InstructorCourseCardOuterContainer>
      <InstructorCourseCardContainer>
        <CourseLogo></CourseLogo>
        <CourseInfoContainer>
          <CourseTitleContainer>{courseTitle}</CourseTitleContainer>
          <CourseIntroductionContainer>
            {courseIntroduction}
          </CourseIntroductionContainer>
        </CourseInfoContainer>
        <ButtonsContainer>
          <RowButtonsContainer>
            <Button
              content="수정"
              onClick={handleModifyClick}
              backgroundColor="#DAE5FF"
            ></Button>
            <Button
              content="삭제"
              onClick={handleCancelClick}
              backgroundColor="white"
            ></Button>
          </RowButtonsContainer>
          <button
            onClick={handleFeedbackClick}
            style={{
              backgroundColor: "white",
              borderRadius: 10,
              paddingTop: 5,
              paddingRight: 15,
              paddingBottom: 5,
              paddingLeft: 15,
            }}
          >
            <FeedbackImage src={feedback}></FeedbackImage>
          </button>
        </ButtonsContainer>
        <p>{String(toggleFeedback)}</p>
      </InstructorCourseCardContainer>
      {toggleFeedback && (
        <FeedbackContatiner>
          <AIImage></AIImage>
          <FeedbackMessageContainer>{feedbackMessage}</FeedbackMessageContainer>
        </FeedbackContatiner>
      )}
    </InstructorCourseCardOuterContainer>
  );
}

export default InstructorCourseCard;
