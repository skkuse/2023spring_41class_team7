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
  const [courseid, setCourseid] = useState();
  const [showModal, setShowModal] = useState(false);
  const [isCourseInitialized, setIsCourseInitialized] = useState(false);
  const [isEntered, setIsEntered] = useState(true);
  const navigate = useNavigate();

  const handleAddCourseSubmit = (e) => {};

  const handleSaveClick = () => {
    /* Course title, introduction POST */
    /* POST 성공 시 */
    setIsCourseInitialized(true);
    /* setCourseid(REPONSE로 날라온 id 값) */
  };

  const handleCancelClick = () => {
    navigate("/user/instructor");
  };

  const handleAddClick = () => {
    setShowModal(!showModal);
    setIsEntered(false);
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
              disabled={isCourseInitialized}
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
          <ChapterAddButton
            onClick={handleAddClick}
            disabled={!isCourseInitialized}
            type="button"
          >
            단원 추가
          </ChapterAddButton>
          {showModal && (
            <ChapterModal
              courseid={courseid}
              setShowModal={setShowModal}
              setIsEntered={setIsEntered}
              disabled={showModal}
            ></ChapterModal>
          )}
          {/* {String(isEntered)} */}
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
