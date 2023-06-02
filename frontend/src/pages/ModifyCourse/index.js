import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { OuttestContainer } from "../../components/OuttestContainer/style";
import {
  ModifyCourseForm,
  ButtonsContainer,
  ChapterAddButton,
  ShowCourseContainer,
  CourseInfoModifyButton,
} from "./style";
import Button from "../../components/Button";
import CourseInfo from "../../components/CourseInfo";
import ChapterModal from "../../components/ChapterModal";
import ShowChapter from "../../components/ShowChapter";
import Header from "../../components/Header";
import { MostOuterDiv } from "../../components/MostOuterDiv/style";
import { useNavigate, useParams } from "react-router-dom";
import { serverAxios } from "../../utils/commonAxios";

function ModifyCourse(props) {
  let courseid = Number(useParams().courseid);

  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [language, setLanguage] = useState("");
  const [introduction, setIntroduction] = useState("");
  const [courseInfo, setCourseInfo] = useState();
  const [isReady, setIsReady] = useState(false);
  const navigate = useNavigate();

  const getCourseInfoFunction = async () => {
    let targeturl = "course/course/" + courseid + "/";
    await serverAxios
      .get(targeturl, { withCredentials: true })
      .then((response) => {
        setCourseInfo(JSON.parse(JSON.stringify(response.data)));

        setIsReady(true);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => {
    getCourseInfoFunction();
  }, []);

  const handleModifyCourseSubmit = (e) => {
    e.preventDefault();
  };

  const handleSaveClick = () => {
    alert("저장하기");
  };

  const handleCancelClick = () => {
    navigate("/user/instructor");
  };

  const handleCourseInfoModifyClick = () => {
    alert("강의 수정하기");
  };

  const handleAddClick = () => {
    setShowModal(!showModal);
  };
  if (localStorage.getItem("loggedin")) {
    return (
      <MostOuterDiv>
        <Header></Header>
        <OuttestContainer>
          <Navbar></Navbar>
          <ModifyCourseForm onSubmit={handleModifyCourseSubmit}>
            <ButtonsContainer>
              {/* <Button
                content="저장"
                onClick={handleSaveClick}
                backgroundColor="#DAE5FF"
                disabled={showModal}
              ></Button> */}
              <Button
                content="취소"
                onClick={handleCancelClick}
                backgroundColo
                r="white"
                disabled={showModal}
                type="button"
              ></Button>
            </ButtonsContainer>
            <CourseInfo
              courseTitle={isReady ? courseInfo.title : title}
              language={language}
              courseIntroduction={isReady ? courseInfo.intro : introduction}
            ></CourseInfo>
            <ButtonsContainer>
              {String(isReady)}
              <CourseInfoModifyButton onClick={handleCourseInfoModifyClick}>
                강의 정보 수정
              </CourseInfoModifyButton>
              <ChapterAddButton onClick={handleAddClick} disabled={showModal}>
                단원 추가
              </ChapterAddButton>
            </ButtonsContainer>
            {showModal && (
              <ChapterModal setShowModal={setShowModal}></ChapterModal>
            )}
            <ShowCourseContainer>
              <ShowChapter></ShowChapter>
              <ShowChapter></ShowChapter>
            </ShowCourseContainer>
          </ModifyCourseForm>
        </OuttestContainer>
      </MostOuterDiv>
    );
  }
}

export default ModifyCourse;
