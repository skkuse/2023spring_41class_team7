import Navbar from "../../components/Navbar";
import { OuttestContainer } from "../../components/OuttestContainer/style";
import { ModifyCourseContainer } from "./style";

function ModifyCourse(props) {
  return (
    <OuttestContainer>
      <Navbar></Navbar>
      <ModifyCourseContainer></ModifyCourseContainer>
    </OuttestContainer>
  );
}

export default ModifyCourse;
