import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Container,
  ImageContainer,
  InfoContainer,
  TitleContainer,
  MoreInfoContainer,
  EtcContainer,
} from "./style";
import { serverAxios } from "../../utils/commonAxios";

function LectureProgress(props) {
  let course_id = props.data.id;
  const [lastChapterId, setLastChapterId] = useState("");

  useEffect(() => {
    //console.log(courseid);
    getLastChapterInfo(course_id);
  }, []);

  const getLastChapterInfo = async (course_id) => {
    await serverAxios
      .get(`/learn/course/${course_id}/`, { withCredentials: true })
      .then((res) => {
       setLastChapterId(res.data.last_chapter);
      })
      .catch((err) => console.log(err));
  };

  
  const navigate = useNavigate();
  const lectureClick = () => {
    navigate("/learning/" + course_id);
  }

  let thumbnailurl =
    "http://localhost:3000/api/media/" + props.data.thumbnail;

  
  //console.log(props.data);
  return (
    <Container onClick={lectureClick}>
      {/* lecture image */}
      {/*<ImageContainer style={{backgroundImage: `url(${props.thumbnail})`}}></ImageContainer>*/}
      <ImageContainer src={thumbnailurl}></ImageContainer>
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
