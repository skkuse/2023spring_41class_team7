import { useState } from "react";
import { CancelButton, ButtonContainer, SubChapterForm, SubChapterInput, SubChapterModalContainer, TitleContainer, SaveInput } from "./style";

function SubChapterModal() {
    
    const [title, setTitle] = useState("");

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    }
    
    const handleCancelPress =(e) => {

    }
    
    const handleSavePress = (e) => {

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
                {title}
                <ButtonContainer>
                    <CancelButton onPress={handleCancelPress}>취소</CancelButton>
                    <SaveInput type="submit" value="저장" onPress={handleSavePress}></SaveInput>
                </ButtonContainer>
            </SubChapterForm>
        </SubChapterModalContainer>
    );
}

export default SubChapterModal;