import styled from "@emotion/styled";

export const InstructorCourseCardOuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
`;

export const InstructorCourseCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 35px;
  gap: 35px;
  border-radius: 10px;
  box-shadow: 0px 4px 30px 2px rgba(223, 228, 231, 0.7);
`;

export const CourseLogo = styled.img`
  width: 238px;
  height: 145px;
`;

export const CourseInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
  gap: 10px;
`;

export const CourseTitleContainer = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
`;

export const CourseIntroductionContainer = styled.div`
  font-weight: 500;
  font-size: 16px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
`;

export const RowButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
`;

export const FeedbackImage = styled.img`
  width: 36px;
  height: 36px;
`;

export const FeedbackContatiner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 10px;
  gap: 10px;
`;

export const AIImage = styled.img`
  width: 64px;
  height: 64px;
`;

export const FeedbackMessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 35px;
  background-color: #e1e7f5;
  border-radius: 10px;
  width: 100%;
  box-shadow: 0px 4px 30px 2px rgba(223, 228, 231, 0.7);
`;
