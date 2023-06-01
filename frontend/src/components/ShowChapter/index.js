import { useState } from "react";
import {
  ChapterContent,
  ChapterNumberContainer,
  ChapterTitle,
  ShowChapterContainer,
  ShowOuterContainer,
} from "./style";
import Button from "../Button";

function ShowChapter(props) {
  const [showContent, setShowContent] = useState(false);

  const handleContentClick = () => {
    setShowContent(!showContent);
  };

  const handleCancelClick = () => {
    alert("삭제 완료");
  };

  return (
    <ShowOuterContainer>
      <ShowChapterContainer>
        <ChapterNumberContainer>{props.chapterNo}주차</ChapterNumberContainer>
        <ChapterTitle value={props.chapterTitle}></ChapterTitle>
        <Button
          content="보기"
          onClick={handleContentClick}
          backgroundColor="white"
          type="button"
        ></Button>
        <Button
          content="삭제"
          onClick={handleCancelClick}
          backgroundColor="white"
          type="button"
        ></Button>
      </ShowChapterContainer>
      {showContent && (
        <ChapterContent value={props.chapterContent}></ChapterContent>
      )}
    </ShowOuterContainer>
  );
}

export default ShowChapter;
