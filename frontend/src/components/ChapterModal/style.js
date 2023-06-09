import styled from "@emotion/styled";

export const ChapterOutestContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
`;
export const ChapterModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 35px 60px;
  gap: 35px;
  width: 960px;
  background-color: #eeeeee;
  border-radius: 10px;
  box-shadow: 0px 4px 30px 2px rgba(223, 228, 231, 0.7);
  border: 2px solid black;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 20px 0;
  background-color: #dae5ff;
  border-radius: 10px;
  font-weight: 600;
  font-size: 20px;
  width: 100%;
  text-indent: 20px;
`;

export const ChapterForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 35px;
  margin: 0;
  padding: 0;
`;

export const ChapterInput = styled.input`
  padding: 20px;
  border-radius: 10px;
  font-weight: 500;
  font-size: 16px;
  border: 1.5px solid black;
`;

export const ChapterTextArea = styled.textarea`
  padding: 20px;
  height: 320px;
  border-radius: 10px;
  font-weight: 500;
  font-size: 16px;
  border: 1.5px solid black;
  font-family: "Arial";
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  height: 100px;
  border-radius: 10px;
  gap: 20px;
`;
