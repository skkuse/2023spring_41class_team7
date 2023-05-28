import { useState } from "react";
import Navbar from "../../components/Navbar";
import { OuttestContainer } from "../../components/OuttestContainer/style";
import {
  AddCourseContainer,
  ButtonsContainer,
  ChapterAddButton,
  ShowCourseContainer,
} from "./style";
import Button from "../../components/Button";
import CourseInfo from "../../components/CourseInfo";
import ChapterModal from "../../components/ChapterModal";
import ShowChapter from "../../components/ShowChapter";
import Header from "../../components/Header";
import { MostOuterDiv } from "../../components/MostOuterDiv/style";

function AddCourse(props) {
  const [showModal, setShowModal] = useState(false);

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
    <MostOuterDiv>
      <Header></Header>
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
          <CourseInfo></CourseInfo>
          <ChapterAddButton onClick={handleAddClick} disabled={showModal}>
            단원 추가
          </ChapterAddButton>
          {showModal && (
            <ChapterModal
              setShowModal={setShowModal}
              disabled={showModal}
            ></ChapterModal>
          )}
          <ShowCourseContainer>
            <ShowChapter></ShowChapter>
            <ShowChapter></ShowChapter>
          </ShowCourseContainer>
        </AddCourseContainer>
      </OuttestContainer>
    </MostOuterDiv>
  );
}

export default AddCourse;
