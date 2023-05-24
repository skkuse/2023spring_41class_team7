import LectureItem from "../../components/LectureItem"
import{
    MainContainer,
    LectureContainer,
    TitleContainer,
    Title
} from "./style";
import Navbar from "../../components/Navbar";
import { OuttestContainer } from "../../components/OuttestContainer/style";

function MainPage() {
    return ( 
        <OuttestContainer>
            <Navbar/>
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
        </OuttestContainer>
    );
}

export default MainPage;