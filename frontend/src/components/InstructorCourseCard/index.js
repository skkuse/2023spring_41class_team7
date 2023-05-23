import Button from "../Button";
import { ButtonsContainer, CourseInfoContainer, CourseIntroductionContainer, CourseLogo, CourseTitleContainer, FeedbackImage, InstructorCourseCardContainer, RowButtonsContainer } from "./style";
import feedback from "../../assets/images/feedback.png"

function InstructorCourseCard(props) {

    const handleModifyClick = () => {
        alert("수정하기");
    }

    const handleCancelClick = () => {
        alert("삭제하기")
    }

    const handleFeedbackClick = () => {
        alert("피드백");
    }

    return(
        <InstructorCourseCardContainer>
            <CourseLogo></CourseLogo>
            <CourseInfoContainer>
                <CourseTitleContainer>입문자를 위한 파이썬 기초</CourseTitleContainer>
                <CourseIntroductionContainer>파이썬 기초부터 탄탄하게 공부해요 ^*^</CourseIntroductionContainer>
            </CourseInfoContainer>
            <ButtonsContainer>
                <RowButtonsContainer>
                    <Button content="수정" onClick={handleModifyClick} backgroundColor="#DAE5FF"></Button>
                    <Button content="삭제" onClick={handleCancelClick} backgroundColor="white"></Button>
                </RowButtonsContainer>
                <button onClick={handleFeedbackClick} style={{backgroundColor: "white", borderRadius: 10, paddingTop: 5, paddingRight: 15, paddingBottom: 5, paddingLeft: 15}}> <FeedbackImage src={feedback}></FeedbackImage></button>
            </ButtonsContainer>
            
        </InstructorCourseCardContainer>
    );
}

export default InstructorCourseCard;