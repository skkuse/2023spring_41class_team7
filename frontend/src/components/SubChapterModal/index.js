import { useState } from "react";
import { CancelButton, ButtonContainer, SubChapterForm, SubChapterInput, SubChapterModalContainer, TitleContainer, SaveInput } from "./style";

function SubChapterModal(props) {
    
    
    const [title, setTitle] = useState("");

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    }
    
    const handleCancelClick =(e) => {
        // 중단원 추가 모달창 닫기
        alert("중단원 추가 모달창 닫기");
        props.setSubChapterModalOpen(false);
    }
    
    const handleSaveClick = (e) => {
        alert("저장하기");
    }
    

    return(
        <SubChapterModalContainer>
            <SubChapterForm>
                <TitleContainer>중단원 추가</TitleContainer>
                <SubChapterInput
                    id="title"
                    name="title"
                    type="text"
                    placeholder="중단원명을 작성해주세요!"
                    onChange={handleTitleChange}>
                </SubChapterInput>
                <ButtonContainer>
                    <CancelButton onClick={handleCancelClick}>취소</CancelButton>
                    <SaveInput type="submit" value="저장" onClick={handleSaveClick}></SaveInput>
                </ButtonContainer>
            </SubChapterForm>
        </SubChapterModalContainer>
    );
}

export default SubChapterModal;