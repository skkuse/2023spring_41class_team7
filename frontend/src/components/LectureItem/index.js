import {
    ItemContainer,
    ContentsContainer,
    TitleContainer,
    Title,
    Desc,
    TagContainer,
    Tag,
    TmpThumnail
} from './style'

function LectureItem() {
    return ( 
        <ItemContainer>
            <TmpThumnail>
                {/* thumnail - need to change! */}
            </TmpThumnail>
            <ContentsContainer>
                {/* contents */}
                <TitleContainer>
                    <Title>강의 제목</Title>
                    <Desc>강의에 대한 간략한 설명글</Desc>
                </TitleContainer>
                <TagContainer>
                    <Tag background = {"#DDEEDE"}>OOO 선생님</Tag>
                    <Tag background = {"#E1E7F5"}>PYTHON</Tag>
                </TagContainer>
            </ContentsContainer>

        </ItemContainer>
     );
}

export default LectureItem;