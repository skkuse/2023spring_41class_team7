import {
  ItemContainer,
  ContentsContainer,
  TitleContainer,
  Title,
  Desc,
  TagContainer,
  Tag,
  TmpThumnail,
} from "./style";

function LectureItem(props) {
  return (
    <ItemContainer>
      <TmpThumnail>
        <img src={props.info.thumbnail}></img>
      </TmpThumnail>
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
