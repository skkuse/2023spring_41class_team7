import { useState } from "react";
import { ButtonContainer, ChapterForm, ChapterInput, ChapterModalContainer, ChapterTextArea, TitleContainer } from "./style";
import Button from "../Button";

function ChapterModal(props) {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    }

    const handleContextChange = (e) => {
        setContent(e.target.value);
    }

    const handleCancelClick =() => {
        // 단원 추가 모달창 닫기
        alert("단원 추가 모달창 닫기");
        //props.setSubChapterModalOpen(false);
    }
    
    const handleSaveClick = () => {
        alert("저장하기");
    }


    return(
        <ChapterModalContainer>
            <TitleContainer>
                단원 추가
            </TitleContainer>
            <ChapterForm>
            <ChapterInput
                id="title"
                name="title"
                type="text"
                placeholder="단원명을 작성해주세요!"
                onChange={handleTitleChange}>
            </ChapterInput>
            <ChapterTextArea
                id="content"
                name="content"
                placeholder="단원 컨텐츠를 작성해주세요!"
                onChange={handleContextChange}>
            </ChapterTextArea>
            <ButtonContainer>
                <Button content="취소" onClick={handleCancelClick} backgroundColor="white"></Button>
                <Button content="저장" onClick={handleSaveClick} backgroundColor="#DAE5FF"></Button>
            </ButtonContainer>
            </ChapterForm>
        </ChapterModalContainer>
    );
}

export default ChapterModal;