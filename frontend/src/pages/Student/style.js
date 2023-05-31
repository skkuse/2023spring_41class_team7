import styled from "@emotion/styled";

export const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 35px;
  background: #ffffff;
  box-shadow: 0px 8px 40px rgba(0, 0, 0, 0.09);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  -webkit-box-sizing: border-box;
`;

export const ProgressContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const QuizContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-grow: 1;
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

export const ListContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 25px;
  padding: 20px;
  box-sizing: border-box;
  overflow-x: scroll;
`;

export const QuizListContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 15px;
  padding: 15px;
  flex-grow: 1;
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

export const QuizItemContainer = styled.div`
  width: 100%;
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  align-item: center;
  padding: 15px 20px;
  background: #ffffff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  font-weight: 700;
  font-size: 20px;
`;

export const QuizTag = styled.span`
  background: #e1e7f5;
  padding: 3px 10px;
`;
