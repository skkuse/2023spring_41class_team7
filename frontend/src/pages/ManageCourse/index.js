import { useNavigate } from "react-router-dom";
import InstructorCourseCard from "../../components/InstructorCourseCard";
import Navbar from "../../components/Navbar";
import { OuttestContainer } from "../../components/OuttestContainer/style";
import {
  AddButton,
  CourseContainer,
  ManageCourseContainer,
  Title,
  TitleContainer,
} from "./style";
import { faThumbtack } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ManageCourse(props) {
  const navigate = useNavigate();

  const handleAddClick = () => {
    navigate("/addcourse");
  };
  return (
    <OuttestContainer>
      <Navbar></Navbar>
      <ManageCourseContainer>
        <AddButton onClick={handleAddClick}>강의 추가</AddButton>
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
      </ManageCourseContainer>
    </OuttestContainer>
  );
}

export default ManageCourse;
