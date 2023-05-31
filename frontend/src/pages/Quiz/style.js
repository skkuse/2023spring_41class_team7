import styled from "@emotion/styled";

export const QuizPageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;
`;

export const QuizChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 50%;
  box-shadow: 0px 4px 30px 2px rgba(223, 228, 231, 0.7);
`;

export const QuizTitleContainer = styled.div`
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 7%;
  /* Inside auto layout */
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
  background-color: #e1e7f5;
  margin-bottom: 2%;
  border-radius: 10px;
`;

export const QuizInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 14%;
  background-color: #ffffff;
  border-radius: 10px;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
  margin-bottom: 2%;
`;

export const QuizEditorContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 50%;
  height: 100%;
  border-radius: 20px;
  border: 3px solid red;
  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 1;
`;
