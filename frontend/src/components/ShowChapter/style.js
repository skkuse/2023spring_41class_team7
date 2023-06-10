import styled from "@emotion/styled";

export const ShowOuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
`;

export const ShowChapterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 35px;
`;

export const ChapterNumberContainer = styled.div`
  font-size: 18px;
`;

export const ChapterNumberSpan = styled.span`
  font-weight: 700;
`;
export const ChapterTitle = styled.input`
  padding: 20px;
  border-radius: 10px;
  font-weight: 500;
  font-size: 16px;
  border: 1.5px solid black;
  width: 50%;
`;

export const ChapterContent = styled.textarea`
  padding: 20px;
  height: 240px;
  border-radius: 10px;
  font-weight: 500;
  font-size: 16px;
  border: 1.5px solid black;
  font-family: "Arial";
`;
