import { useNavigate } from "react-router-dom";
import InstructorCourseCard from "../../components/InstructorCourseCard";
import Navbar from "../../components/Navbar";
import { OuttestContainer } from "../../components/OuttestContainer/style";
import {
  CourseAddButton,
  CourseContainer,
  Title,
  TitleContainer,
  UserInstructorContainer,
} from "./style";
import { faThumbtack } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function UserInstructor(props) {
  const navigate = useNavigate();

  const handleAddClick = () => {
    navigate("/course/add");
  };

  return (
    <OuttestContainer>
      <Navbar></Navbar>
      <UserInstructorContainer>
        <CourseAddButton onClick={handleAddClick}>강의 추가</CourseAddButton>
        <TitleContainer>
          <Title>
            <FontAwesomeIcon
              icon={faThumbtack}
              style={{ marginRight: "10px" }}
            />{" "}
            강의 목록
          </Title>
        </TitleContainer>
        <CourseContainer>
          <InstructorCourseCard></InstructorCourseCard>
          <InstructorCourseCard></InstructorCourseCard>
        </CourseContainer>
      </UserInstructorContainer>
    </OuttestContainer>
  );
}

export default UserInstructor;
