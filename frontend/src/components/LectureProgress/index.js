import { useNavigate } from "react-router-dom";
import {
  Container,
  ImageContainer,
  InfoContainer,
  TitleContainer,
  MoreInfoContainer,
  EtcContainer,
} from "./style";

function LectureProgress(props) {
  let course_id = props.data.id;
  const navigate = useNavigate();
  const lectureClick = () => {
    navigate("/learning/" + course_id);
  }
  
  //console.log(props.data);
  return (
    <Container onClick={lectureClick}>
      {/* lecture image */}
      {/*<ImageContainer style={{backgroundImage: `url(${props.thumbnail})`}}></ImageContainer>*/}
      <ImageContainer></ImageContainer>
      {/* lecture info */}
      <InfoContainer>
        <TitleContainer >{props.data.title}</TitleContainer>
        {/* more info */}
        <MoreInfoContainer>
          <EtcContainer>
            {/* teacher & language */}
            <span style={{fontWeight:'bold'}}>강사: {props.data.author}</span>
            <span>#{props.data.tag}</span>
          </EtcContainer>
        </MoreInfoContainer>
      </InfoContainer>
    </Container>
  );
}

export default LectureProgress;
