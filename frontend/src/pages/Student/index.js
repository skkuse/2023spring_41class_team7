import { 
    PageContainer,
    ProgressContainer,
    QuizContainer,
    TitleContainer,
    Title} from "./style";
import {faThumbtack} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function StudentPage() {
    return ( 
        <PageContainer>

            {/* 수강중인 강의 */}
            <ProgressContainer>
                <TitleContainer>
                    <Title><FontAwesomeIcon icon={faThumbtack} style={{marginRight: "10px"}}/> 수강중인 강의</Title>
                </TitleContainer>

            </ProgressContainer>

            {/* 나만의 퀴즈 */}
            <QuizContainer>
                <TitleContainer>
                <Title><FontAwesomeIcon icon={faThumbtack} style={{marginRight: "10px"}}/> 나만의 퀴즈</Title>
                </TitleContainer>
            </QuizContainer>

        </PageContainer>
     );
}

export default StudentPage;