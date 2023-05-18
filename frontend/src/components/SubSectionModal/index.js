import { useState } from "react";
import { ButtonContainer, CancelButton, SaveInput, SubSectionForm, SubSectionInput, SubSectionModalContainer, SubSectionTextArea, TitleContainer } from "./style";

function SubSectionModal(props) {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    }

    const handleContextChange = (e) => {
        setContent(e.target.value);
    }

    const handleCancelClick =() => {
        // 소단원 추가 모달창 닫기
        alert("중단원 추가 모달창 닫기");
        props.setSubChapterModalOpen(false);
    }
    
    const handleSaveClick = () => {
        alert("저장하기");
    }


    return(
        <SubSectionModalContainer>
            <TitleContainer>
                소단원 추가
            </TitleContainer>
            <SubSectionForm>
            <SubSectionInput
                id="title"
                name="title"
                type="text"
                placeholder="소단원명을 작성해주세요!"
                onChange={handleTitleChange}>
            </SubSectionInput>
            <SubSectionTextArea
                id="content"
                name="content"
                type="text"
                placeholder="소단원 컨텐츠를 작성해주세요!"
                onChange={handleContextChange}>
            </SubSectionTextArea>
            <ButtonContainer>
                <CancelButton onClick={handleCancelClick}>취소</CancelButton>
                <SaveInput type="submit" value="저장" onClick={handleSaveClick}></SaveInput>
            </ButtonContainer>
            </SubSectionForm>
        </SubSectionModalContainer>
    );
}

export default SubSectionModal;