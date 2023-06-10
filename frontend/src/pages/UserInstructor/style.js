import styled from "@emotion/styled";

export const UserInstructorContainer = styled.div`
  -webkit-box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 35px;
  background: #ffffff;
  box-shadow: 0px 8px 40px rgba(0.8, 0, 0, 0.09);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
`;

export const TitleContainer = styled.div`
  width: 100%;
  border-bottom: 3px solid #e1e7f5;
  line-height: 0.4em;
  margin: 10px 0 20px;
`;

export const Title = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  background: #ffffff;
  padding: 10px 20px;
`;

export const CourseContainer = styled.div`
  -webkit-box-sizing: border-box;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
  padding: 10px;
  overflow: scroll;
  &::-webkit-scrollbar {
    width: 6px;
    height: 8px;
    background: #ffffff;
  }
  &::-webkit-scrollbar-thumb {
    background: #eeeeee;
    border-radius: 6px;
  }
`;

export const TotalCourseNumDiv = styled.div`
  margin: 0 35px;
  align-self: flex-end;
  font-size: 20px;
`;

export const TotalCourseNum = styled.span`
  font-weight: 600;
  align-self: flex-end;
`;

export const CourseAddButton = styled.button`
  width: 120px;
  padding: 15px 5px;
  border-radius: 10px;
  font-weight: 600;
  font-size: 16px;
  background-color: #dae5ff;
  align-self: flex-end;
`;
