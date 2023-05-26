import { useState } from "react";
import {
  ButtonContainer,
  ChapterForm,
  ChapterInput,
  ChapterModalContainer,
  ChapterOutestContainer,
  ChapterTextArea,
  TitleContainer,
} from "./style";
import Button from "../Button";

function ChapterModal(props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContextChange = (e) => {
    setContent(e.target.value);
  };

  const handleCancelClick = () => {
    props.setShowModal(false);
    props.setIsEntered(true);
  };

  const handleSaveClick = () => {
    props.setShowModal(false);
    props.setIsEntered(true);
    /* POST 요청시 course/?*/
    try {
      const body = {
        course: props.courseid,
        title: title,
        content: content,
      };
    } catch (e) {}
  };

  return (
    <ChapterOutestContainer>
      <ChapterModalContainer>
        <TitleContainer>단원 추가</TitleContainer>
        <ChapterForm>
          <ChapterInput
            id="title"
            name="title"
            type="text"
            placeholder="단원명을 작성해주세요!"
            onChange={handleTitleChange}
          ></ChapterInput>
          <ChapterTextArea
            id="content"
            name="content"
            placeholder="단원 컨텐츠를 작성해주세요!"
            onChange={handleContextChange}
          ></ChapterTextArea>
          <ButtonContainer>
            <Button
              content="취소"
              onClick={handleCancelClick}
              backgroundColor="white"
              type="button"
            ></Button>
            <Button
              content="저장"
              onClick={handleSaveClick}
              backgroundColor="#DAE5FF"
            ></Button>
          </ButtonContainer>
        </ChapterForm>
      </ChapterModalContainer>
    </ChapterOutestContainer>
  );
}

export default ChapterModal;
