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

  return (
    <ShowOuterContainer>
      <ShowChapterContainer>
        <ChapterNumberContainer>{props.chapterNo}주차</ChapterNumberContainer>
        <ChapterTitle defaultValue={props.chapterTitle}></ChapterTitle>
        <Button
          content="보기"
          onClick={handleContentClick}
          backgroundColor="white"
          type="button"
        ></Button>
      </ShowChapterContainer>
      {showContent && (
        <ChapterContent defaultValue={props.chapterContent}></ChapterContent>
      )}
    </ShowOuterContainer>
  );
}

export default ShowChapter;
