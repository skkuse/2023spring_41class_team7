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
import { serverAxios } from "../../utils/commonAxios";

function ChapterModal(props) {
  const [chapterTitle, setChapterTitle] = useState("");
  const [chapterContent, setChapterContent] = useState("");

  const handleTitleChange = (e) => {
    setChapterTitle(e.target.value);
  };

  const handleContextChange = (e) => {
    setChapterContent(e.target.value);
  };

  const handleCancelClick = () => {
    props.setShowModal(false);
    props.setIsEntered(true);
  };

  const handleSaveClick = async (e) => {
    e.preventDefault();
    if (chapterTitle && chapterContent) {
      /* POST 요청시 course/?*/
      try {
        const body = {
          course: props.courseid,
          title: chapterTitle,
          content: chapterContent,
        };

        await serverAxios
          .post("course/chapter/", body, {
            withCredentials: true,
          })
          .then((response) => {
            props.setShowModal(false);
            props.setIsEntered(true);
            alert("단원 추가 성공");
          })
          .catch((e) => {
            console.log(e);
          });
      } catch (e) {}
      // props.setShowModal(false);
      // props.setIsEntered(true);
      // alert("단원 추가 성공");
    }
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
          {/* {chapterTitle}
          <br />
          {chapterContent} */}
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
