import styled from "@emotion/styled";

export const AddCourseForm = styled.form`
  -webkit-box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 35px;
  background: #ffffff;
  box-shadow: 0px 8px 40px rgba(0, 0, 0, 0.09);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
`;

export const ButtonsContainer = styled.div`
  -webkit-box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-self: flex-end;
  gap: 20px;
`;

export const CourseInfoSaveButton = styled.button`
  width: 135px;
  height: 60px;
  border-radius: 10px;
  font-weight: 600;
  font-size: 16px;
  align-self: flex-end;
  -webkit-box-sizing: border-box;
`;

export const ChapterAddButton = styled.button`
  width: 100px;
  height: 60px;
  border-radius: 10px;
  font-weight: 600;
  font-size: 16px;
  background-color: #dae5ff;
  align-self: flex-end;
  -webkit-box-sizing: border-box;
`;

export const ShowCourseContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-family: "Arial";
  gap: 35px;
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
