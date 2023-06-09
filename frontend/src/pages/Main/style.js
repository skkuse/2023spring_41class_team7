import styled from "@emotion/styled";

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 35px;
  background: #ffffff;
  box-shadow: 0px 8px 40px rgba(0, 0, 0, 0.09);
  border-radius: 20px;
  -webkit-box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`;

export const QuizContainer = styled.div`
  -webkit-box-sizing: border-box;
  width: 100%;
  display: table;
  justify-self: flex-end;
  margin: 0 auto;
  text-align: center;
  background: #e1e7f5;
  padding: 35px 70px;
  border-radius: 10px;

  font-weight: 600;
  font-size: 24px;
`;

// export const QuizContainer = styled.div`
//   align-self: flex-end;
//   background: #e1e7f5;
//   padding: 10px 30px;
//   border-radius: 10px;
// `;

export const Quiz = styled.span`
  font-weight: 700;
  font-size: 15px;
`;

export const QuizImage = styled.img`
  vertical-align: middle;
  width: 48px;
  height: 48px;
  margin: 0 10px;
`;

export const LectureContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 25px;
  row-gap: 25px;
  -webkit-box-sizing: border-box;
  padding: 20px;

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

export const TotalCourseNumDiv = styled.div`
  margin: 0 35px;
  align-self: flex-end;
  font-size: 20px;
`;

export const TotalCourseNum = styled.span`
  font-weight: 600;
  align-self: flex-end;
`;
