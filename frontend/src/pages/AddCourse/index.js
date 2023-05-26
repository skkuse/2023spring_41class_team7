import { useState } from "react";
import Navbar from "../../components/Navbar";
import { OuttestContainer } from "../../components/OuttestContainer/style";
import {
  AddCourseForm,
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
import { useNavigate } from "react-router-dom";

function AddCourse(props) {
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  const handleAddCourseSubmit = (e) => {};

  const handleSaveClick = () => {
    alert("저장하기");
  };

  const handleCancelClick = () => {
    navigate("/user/instructor");
  };

  const handleAddClick = () => {
    setShowModal(!showModal);
  };
  return (
    <MostOuterDiv>
      <Header></Header>
      <OuttestContainer>
        <Navbar></Navbar>
        <AddCourseForm onSubmit={handleAddCourseSubmit}>
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
              type="button"
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
        </AddCourseForm>
      </OuttestContainer>
    </MostOuterDiv>
  );
}

export default AddCourse;
