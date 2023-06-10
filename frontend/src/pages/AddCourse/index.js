import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { OuttestContainer } from "../../components/OuttestContainer/style";
import {
  AddCourseForm,
  ButtonsContainer,
  CourseInfoSaveButton,
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
import { serverAxios } from "../../utils/commonAxios";

function AddCourse(props) {
  const [courseid, setCourseid] = useState(null);
  const [courseTitle, setCourseTitle] = useState("");
  const [courseLanguageTag, setCourseLanguageTag] = useState(0);
  const [courseIntroduction, setCourseIntroduction] = useState("");
  const [courseThumbnail, setCourseThumbnail] = useState();
  const [showModal, setShowModal] = useState(false);
  const [isCourseInitialized, setIsCourseInitialized] = useState(false);
  const [isEntered, setIsEntered] = useState(true);
  const [chapters, setChapters] = useState([]);
  const [clickFlag, setClickFlag] = useState(false);

  const navigate = useNavigate();

  const getChaptersFunction = async () => {
    if (courseid && showModal == false) {
      // let targeturl = "/course/chapter/?course=" + courseid;
      let targeturl = "course/course/" + courseid + "/";
      //console.log(targeturl);
      await serverAxios
        .get(targeturl, { withCredentials: true })
        .then((response) => {
          setChapters(JSON.parse(JSON.stringify(response.data.chapters)));
          console.log(chapters);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  useEffect(() => {
    getChaptersFunction();
  }, [isEntered, clickFlag]);
  const handleAddCourseSubmit = (e) => {};

  const handleDoneClick = () => {
    navigate("/user/instructor");
  };

  const handleCancelClick = () => {
    navigate("/user/instructor");
  };

  const handleCourseAddSaveClick = async (e) => {
    e.preventDefault();
    if (courseTitle && courseIntroduction && courseLanguageTag !== 0) {
      try {
        const body = {
          title: courseTitle,
          tag: courseLanguageTag,
          intro: courseIntroduction,
          thumbnail: courseThumbnail,
        };
        /* Course title, introduction POST */
        await serverAxios
          .post("/course/course/", body, {
            withCredentials: true,
          })
          .then((response) => {
            setIsCourseInitialized(true);
            setCourseid(response.data.id);
            alert("강의 정보 저장 성공");
          })
          .catch((e) => {
            console.log(e);
          });
      } catch (e) {}
    }
  };

  const handleAddClick = () => {
    setShowModal(!showModal);
    setIsEntered(false);
  };

  // function isFileObject(obj) {
  //   return obj instanceof File;
  // }

  // const isFile = isFileObject(courseThumbnail);

  if (
    localStorage.getItem("loggedin") &&
    localStorage.getItem("educator") === "true"
  ) {
    return (
      <MostOuterDiv>
        {/* {courseThumbnail && <div>{courseThumbnail.name}</div>}
        {String(isFile)} */}

        <Header></Header>
        <OuttestContainer>
          <Navbar></Navbar>
          <AddCourseForm onSubmit={handleAddCourseSubmit}>
            <ButtonsContainer>
              {/* <Button
                content="완료"
                onClick={handleDoneClick}
                backgroundColor="#DAE5FF"
              ></Button> */}
              <Button
                content="취소"
                onClick={handleCancelClick}
                backgroundColor="white"
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
              isCourseInitialized={isCourseInitialized}
            ></CourseInfo>
            {/* {courseTitle}
            <br />
            {courseLanguageTag}
            <br />
            {courseIntroduction} */}
            <ButtonsContainer>
              <CourseInfoSaveButton
                onClick={handleCourseAddSaveClick}
                disabled={isCourseInitialized}
              >
                강의 정보 저장
              </CourseInfoSaveButton>
              <ChapterAddButton
                onClick={handleAddClick}
                disabled={!isCourseInitialized}
                type="button"
              >
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
            {/* {String(isEntered)} */}
            {isCourseInitialized && (
              <ShowCourseContainer>
                {chapters.map((value, key) => (
                  <ShowChapter
                    courseid={courseid}
                    chapterid={value.id}
                    chapterNo={key + 1}
                    chapterTitle={value.title}
                    chapterIntro={value.intro}
                    chapterContent={value.content}
                    clickFlag={clickFlag}
                    setClickFlag={setClickFlag}
                  ></ShowChapter>
                ))}
              </ShowCourseContainer>
            )}
          </AddCourseForm>
        </OuttestContainer>
      </MostOuterDiv>
    );
  } else {
    navigate("/");
  }
}

export default AddCourse;
