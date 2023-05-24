import LectureItem from "../../components/LectureItem"
import{
    MainContainer,
    LectureContainer,
    TitleContainer,
    Title
} from "./style";

function MainPage() {
    return ( 
        <MainContainer>
            <TitleContainer>
                <Title>강좌 목록</Title>
            </TitleContainer>
            <LectureContainer>   {/*강의 목록 리스트 ( 강의 아이템 )*/}
                <LectureItem/>
                <LectureItem/>
                <LectureItem/>
            </LectureContainer> 
        </MainContainer>
    );
}

export default MainPage;