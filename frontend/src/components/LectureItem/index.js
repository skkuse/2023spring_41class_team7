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

import { useEffect, useState } from "react";

function LectureItem(props) {
  let thumbnailurl =
    " http://localhost:3000/api/media/" + props.course.thumbnail;

  const navigate = useNavigate();

  useEffect(() => {}, []);

  const handleLectureItemClick = () => {
    navigate("/learning/" + props.info.id);
  };
  return (
    <ItemContainer onClick={handleLectureItemClick}>
      {thumbnailurl && (
        <Thumbnail src={thumbnailurl}>
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
