import { useState } from "react";
import Navbar from "../../components/Navbar";
import { OuttestContainer } from "../../components/OuttestContainer/style";
import {
  AddCourseContainer,
  ButtonsContainer,
  ChapterAddButton,
} from "./style";
import Button from "../../components/Button";
import CourseInfo from "../../components/CourseInfo";
import ChapterModal from "../../components/ChapterModal";

function ModifyCourse(props) {
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [language, setLanguage] = useState("");
  const [introduction, setIntroduction] = useState("");

  const handleSaveClick = () => {
    alert("저장하기");
  };

  const handleCancelClick = () => {
    alert("취소하기");
  };

  const handleAddClick = () => {
    setShowModal(!showModal);
  };
  return (
    <OuttestContainer>
      <Navbar></Navbar>
      <AddCourseContainer>
        <ButtonsContainer>
          <Button
            content="저장"
            onClick={handleSaveClick}
            backgroundColor="#DAE5FF"
            disabled={showModal}
          ></Button>
          <Button
            content="취소"
            onClick={handleCancelClick}
            backgroundColor="white"
            disabled={showModal}
          ></Button>
        </ButtonsContainer>
        <CourseInfo
          title={title}
          language={language}
          introduction={introduction}
        ></CourseInfo>
        <ChapterAddButton onClick={handleAddClick}>단원 추가</ChapterAddButton>
        {showModal && <ChapterModal setShowModal={setShowModal}></ChapterModal>}
      </AddCourseContainer>
    </OuttestContainer>
  );
}

export default ModifyCourse;
