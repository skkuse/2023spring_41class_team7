import InstructorCourseCard from "../../components/InstructorCourseCard";
import { ManageCourseContainer, ManageCourseOuterContainer } from "./style";

function ManageCourse(props) {
  return (
    <ManageCourseOuterContainer>
      <ManageCourseContainer>
        <InstructorCourseCard></InstructorCourseCard>
        <InstructorCourseCard></InstructorCourseCard>
        <InstructorCourseCard></InstructorCourseCard>
      </ManageCourseContainer>
    </ManageCourseOuterContainer>
  );
}

export default ManageCourse;
