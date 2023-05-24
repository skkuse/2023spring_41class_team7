import styled from "@emotion/styled";

export const AddCourseContainer = styled.div`
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

export const ChapterAddButton = styled.button`
  width: 100px;
  height: 60px;
  border-radius: 10px;
  font-weight: 600;
  font-size: 16px;
  background-color: #dae5ff;
  align-self: flex-end;
`;
