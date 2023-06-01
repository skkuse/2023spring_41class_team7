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
  const [courseid, setCourseid] = useState();
  const [courseTitle, setCourseTitle] = useState("");
  const [courseLanguageTag, setcourseLanguageTag] = useState(1);
  const [courseIntroduction, setCourseIntroduction] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isCourseInitialized, setIsCourseInitialized] = useState(false);
  const [isEntered, setIsEntered] = useState(true);
  let chapters = [];

  const navigate = useNavigate();

  // useEffect(async () => {
  //   if (courseid) {
  //     let params = URLSearchParams();
  //     params.append("/chapter", courseid);
  //     await serverAxios
  //       .get("/course", { withCredentials: true }, params)
  //       .then((response) => {
  //         chapters = JSON.parse(response.data);
  //       });
  //   }
  // }, [showModal]);
  const handleAddCourseSubmit = (e) => {};

  const handleSaveClick = () => {};

  const handleCourseAddSaveClick = async (e) => {
    if (courseTitle && courseIntroduction) {
      e.preventDefault();
      try {
        const body = {
          title: courseTitle,
          tag: courseLanguageTag,
          intro: courseIntroduction,
        };
        /* Course title, introduction POST */
        await serverAxios
          .post("/course/course/", body, {
            withCredentials: true,
          })
          .then((response) => {
            setIsCourseInitialized(true);
            setCourseid(response.data.id);
            alert("Course Info 저장 성공");
          })
          .catch((e) => {
            console.log(e);
          });
      } catch (e) {}
    }
  };

  const handleCancelClick = () => {
    navigate("/user/instructor");
  };

  const handleAddClick = () => {
    setShowModal(!showModal);
    setIsEntered(false);
  };

  const testJSONArray = [
    {
      id: 1,
      course: 1,
      title: "정식이가 가르쳐주는 파이썬",
      intro: "잘 찾아오셨습니다!",
      content: "정식이는 도커러입니다.",
      created_at: "2023-05-28T07:11:49.985428Z",
      modified_at: "2023-05-28T07:11:50.154150Z",
    },
    {
      id: 2,
      course: 1,
      title: "기초 파이썬 문법",
      intro: "잘 찾아오셨습니다!",
      content: "이제부터 한 번 가봅시다.",
      created_at: "2023-05-29T07:46:30.030849Z",
      modified_at: "2023-05-29T07:46:30.239792Z",
    },
    {
      id: 3,
      course: 1,
      title: "파이썬의 효능",
      intro: "잘 찾아오셨습니다!",
      content: "제대로 한 번 가봅시다.",
      created_at: "2023-05-29T07:47:25.114241Z",
      modified_at: "2023-05-29T07:47:25.213260Z",
    },
  ];

  const myArray = JSON.parse(JSON.stringify(testJSONArray));
  chapters = myArray;

  if (localStorage.getItem("loggedin")) {
    return (
      <MostOuterDiv>
        <Header></Header>
        <OuttestContainer>
          <Navbar></Navbar>
          <AddCourseForm onSubmit={handleAddCourseSubmit}>
            <ButtonsContainer>
              {/* <Button
                content="저장"
                onClick={handleSaveClick}
                backgroundColor="#DAE5FF"
                disabled={isCourseInitialized}
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
              setcourseLanguageTag={setcourseLanguageTag}
              setCourseIntroduction={setCourseIntroduction}
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
                    chapterNo={key + 1}
                    chapterTitle={value.title}
                    chapterContent={value.content}
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
