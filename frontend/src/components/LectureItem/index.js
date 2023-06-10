import { useNavigate } from "react-router-dom";
import {
  ItemContainer,
  ContentsContainer,
  TitleContainer,
  Title,
  Desc,
  TagContainer,
  Tag,
  Thumbnail,
} from "./style";
import python_logo from "../../assets/images/python-logo.png";
import java_logo from "../../assets/images/java-logo.png";
import c_logo from "../../assets/images/c-logo.png";
import cpp_logo from "../../assets/images/cpp-logo.png";
import { useEffect, useState } from "react";

function LectureItem(props) {
  const [thumbnail, setThumbnail] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    if (props.info.tag === "파이썬") {
      setThumbnail(python_logo);
    } else if (props.info.tag === "자바") {
      setThumbnail(java_logo);
    } else if (props.info.tag === "C") {
      setThumbnail(c_logo);
    } else if (props.info.tag === "C++") {
      setThumbnail(cpp_logo);
    }
  }, []);

  const handleLectureItemClick = () => {
    navigate("/learning/" + props.info.id);
  };
  return (
    <ItemContainer onClick={handleLectureItemClick}>
      {thumbnail && (
        <Thumbnail src={thumbnail}>
          {/* <img src={thumbnail}></img> */}
        </Thumbnail>
      )}
      <ContentsContainer>
        {/* contents */}
        <TitleContainer>
          <Title>{props.info.title}</Title>
          <Desc>{props.info.intro}</Desc>
        </TitleContainer>
        <TagContainer>
          <Tag background={"#DDEEDE"}>{props.info.author}</Tag>
          <Tag background={"#E1E7F5"}>{props.info.tag}</Tag>
        </TagContainer>
      </ContentsContainer>
    </ItemContainer>
  );
}

export default LectureItem;
