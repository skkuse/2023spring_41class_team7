import Button from "../Button";
import {
  StarImage,
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
  NonButtonContainer,
} from "./style";
import feedback from "../../assets/images/feedback.png";
import star from "../../assets/images/star.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { serverAxios } from "../../utils/commonAxios";

function InstructorCourseCard(props) {
  const [courseid, setCourseid] = useState();
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [toggleFeedback, setToggleFeedback] = useState(false);
  const navigate = useNavigate();

  const getFeedbackMessageFunction = async () => {
    let targeturl = "/feedback/analysis/" + props.course.id + "/";
    await serverAxios
      .get(targeturl, { withCredentials: true })
      .then((response) => {
        setFeedbackMessage(response.data[0].content);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    setCourseid(props.course.id);
    getFeedbackMessageFunction();
  }, []);

  const handleModifyClick = () => {
    let targeturl = "/modify/" + props.course.id;
    navigate(targeturl);
  };

  const handleCancelClick = async () => {
    let targeturl = "/course/course/" + courseid + "/";
    const body = {
      id: courseid,
    };
    await serverAxios
      .delete(targeturl, body, {
        withCredentials: true,
      })
      .then((response) => {
        alert("강의 삭제 완료");
        props.setClickFlag(!props.clickFlag);
      })
      .catch((e) => {
        console.log(e);
      });
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
        <NonButtonContainer>
          <CourseLogo></CourseLogo>
          <CourseInfoContainer>
            <CourseTitleContainer>{props.course.title}</CourseTitleContainer>
            <CourseIntroductionContainer>
              {props.course.intro}
            </CourseIntroductionContainer>
          </CourseInfoContainer>
        </NonButtonContainer>
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
        {/* <p>{String(toggleFeedback)}</p> */}
      </InstructorCourseCardContainer>
      {toggleFeedback && (
        <FeedbackContatiner>
          <StarImage src={star}></StarImage>
          <FeedbackMessageContainer>{feedbackMessage}</FeedbackMessageContainer>
        </FeedbackContatiner>
      )}
    </InstructorCourseCardOuterContainer>
  );
}

export default InstructorCourseCard;
