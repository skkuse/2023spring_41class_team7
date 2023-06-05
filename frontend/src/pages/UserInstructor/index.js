import { useNavigate } from "react-router-dom";
import InstructorCourseCard from "../../components/InstructorCourseCard";
import Navbar from "../../components/Navbar";
import { OuttestContainer } from "../../components/OuttestContainer/style";
import {
  CourseAddButton,
  CourseContainer,
  Title,
  TitleContainer,
  TotalCourseNum,
  TotalCourseNumDiv,
  UserInstructorContainer,
} from "./style";
import { faThumbtack } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../../components/Header";
import { MostOuterDiv } from "../../components/MostOuterDiv/style";
import { useEffect, useState } from "react";
import { serverAxios } from "../../utils/commonAxios";

function UserInstructor(props) {
  const [courses, setCourses] = useState();
  const [isReady, setIsReady] = useState(false);
  const [clickFlag, setClickFlag] = useState(false);

  const navigate = useNavigate();

  let tempCourses = [];

  const getCoursesFunction = async () => {
    let targeturl = "/course/course/?my=" + localStorage.getItem("username");
    await serverAxios
      .get(targeturl, { withCredentials: true })
      .then((response) => {
        tempCourses = JSON.parse(JSON.stringify(response.data));
        setCourses(tempCourses);
        setIsReady(true);
        console.log(courses);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getCoursesFunction();
  }, [clickFlag]);

  const handleAddClick = () => {
    navigate("/add");
  };

  if (
    localStorage.getItem("loggedin") &&
    localStorage.getItem("educator") === "true"
  ) {
    return (
      <MostOuterDiv>
        <Header></Header>
        <OuttestContainer>
          <Navbar></Navbar>
          <UserInstructorContainer>
            <CourseAddButton onClick={handleAddClick}>
              강의 추가
            </CourseAddButton>
            <TitleContainer>
              <Title>
                <FontAwesomeIcon
                  icon={faThumbtack}
                  style={{ marginRight: "10px" }}
                />{" "}
                강의 목록
              </Title>
            </TitleContainer>
            {isReady && (
              <TotalCourseNumDiv>
                총:
                <TotalCourseNum> {courses.length}</TotalCourseNum>개
              </TotalCourseNumDiv>
            )}
            <CourseContainer>
              {isReady &&
                courses.map((value, key) => {
                  return (
                    <InstructorCourseCard
                      course={value}
                      clickFlag={clickFlag}
                      setClickFlag={setClickFlag}
                    ></InstructorCourseCard>
                  );
                })}
            </CourseContainer>
          </UserInstructorContainer>
        </OuttestContainer>
      </MostOuterDiv>
    );
  }
}

export default UserInstructor;
