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
  const [courseTitle, setCourseTitle] = useState("");
  const [courseLanguageTag, setCourseLanguageTag] = useState(0);
  const [courseIntroduction, setCourseIntroduction] = useState("");
  const [courseThumbnail, setCourseThumbnail] = useState();
  const [courseChapters, setCourseChapters] = useState([]);
  const [isReady, setIsReady] = useState(false);
  const [isEntered, setIsEntered] = useState(true);

  const [modifyClickFlag, setModifyClickFlag] = useState(false);

  const navigate = useNavigate();

  const getCourseInfoFunction = async () => {
    let targeturl = "course/course/" + courseid + "/";
    await serverAxios
      .get(targeturl, { withCredentials: true })
      .then((response) => {
        // setCourseInfo(JSON.parse(JSON.stringify(response.data)));
        setCourseTitle(JSON.parse(JSON.stringify(response.data)).title);
        setCourseLanguageTag(JSON.parse(JSON.stringify(response.data)).tag);
        setCourseIntroduction(JSON.parse(JSON.stringify(response.data)).intro);
        setCourseChapters(JSON.parse(JSON.stringify(response.data)).chapters);
        setIsReady(true);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => {
    getCourseInfoFunction();
  }, [isEntered, modifyClickFlag]);

  const handleModifyCourseSubmit = (e) => {
    e.preventDefault();
  };

  const handleSaveClick = () => {
    alert("저장하기");
  };

  const handleCancelClick = () => {
    navigate("/user/instructor");
  };

  const handleCourseInfoModifyClick = async (e) => {
    e.preventDefault();
    if (courseTitle && courseIntroduction && courseThumbnail) {
      let targeturl = "/course/course/" + courseid + "/";

      const formData = new FormData();
      formData.append("title", courseTitle);
      formData.append("tag", courseLanguageTag);
      formData.append("intro", courseIntroduction);
      formData.append("thumbnail", courseThumbnail);

      await serverAxios
        .put(targeturl, formData, {
          withCredentials: true,
        })
        .then((response) => {
          alert("단원 정보 수정 완료");
          setModifyClickFlag(!modifyClickFlag);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  const handleAddClick = () => {
    setShowModal(!showModal);
    setIsEntered(false);
  };
  if (localStorage.getItem("loggedin") && isReady) {
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
              courseTitle={courseTitle}
              courseLanguageTag={courseLanguageTag}
              courseIntroduction={courseIntroduction}
              setCourseTitle={setCourseTitle}
              setCourseLanguageTag={setCourseLanguageTag}
              setCourseIntroduction={setCourseIntroduction}
              setCourseThumbnail={setCourseThumbnail}
            ></CourseInfo>
            <ButtonsContainer>
              {/* {String(isReady)} */}
              <CourseInfoModifyButton onClick={handleCourseInfoModifyClick}>
                강의 정보 수정
              </CourseInfoModifyButton>
              <ChapterAddButton onClick={handleAddClick} disabled={showModal}>
                단원 추가
              </ChapterAddButton>
            </ButtonsContainer>
            {showModal && (
              <ChapterModal
                courseid={courseid}
                setShowModal={setShowModal}
                setIsEntered={setIsEntered}
                disabled={showModal}
              ></ChapterModal>
            )}
            <ShowCourseContainer>
              {courseChapters.map((value, key) => (
                <ShowChapter
                  courseid={courseid}
                  chapterid={value.id}
                  chapterNo={key + 1}
                  chapterTitle={value.title}
                  chapterIntro={value.intro}
                  chapterContent={value.content}
                  isModify={true}
                ></ShowChapter>
              ))}
            </ShowCourseContainer>
          </ModifyCourseForm>
        </OuttestContainer>
      </MostOuterDiv>
    );
  }
}

export default ModifyCourse;
