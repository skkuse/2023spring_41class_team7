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
import python_logo from "../../assets/images/python-logo.png";
import java_logo from "../../assets/images/java-logo.png";
import c_logo from "../../assets/images/c-logo.png";
import cpp_logo from "../../assets/images/cpp-logo.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { serverAxios } from "../../utils/commonAxios";

function InstructorCourseCard(props) {
  let thumbnail_url =
    "../../../../../../backend/media/" + props.course.thumbnail;
  const [courseid, setCourseid] = useState();
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [toggleFeedback, setToggleFeedback] = useState(false);
  const [thumbnail, setThumbnail] = useState();
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
    if (props.course.tag === "파이썬") {
      setThumbnail(python_logo);
    } else if (props.course.tag === "자바") {
      setThumbnail(java_logo);
    } else if (props.course.tag === "C") {
      setThumbnail(c_logo);
    } else if (props.course.tag === "C++") {
      setThumbnail(cpp_logo);
    }
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
          <CourseLogo src={thumbnail}></CourseLogo>
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
