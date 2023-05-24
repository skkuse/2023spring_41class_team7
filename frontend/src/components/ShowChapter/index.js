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
        <ChapterNumberContainer>1주차</ChapterNumberContainer>
        <ChapterTitle value=""></ChapterTitle>
        <Button
          content="보기"
          onClick={handleContentClick}
          backgroundColor="white"
        ></Button>
      </ShowChapterContainer>
      {showContent && <ChapterContent value=""></ChapterContent>}
    </ShowOuterContainer>
  );
}

export default ShowChapter;
