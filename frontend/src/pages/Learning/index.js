import {
    PageContainer,
    SideBar,
    IdxContainer,
    QaContainer,
    IdxTitle,
    IdxItemsContainer,
    IdxItem,
    ContentContainer,
    LecHeader,
    LecTitle,
    LecRate,
    LecContainer,
    ChatContainer,
    TmpCodeContainer
} from "./style"
import {
    faList,
    faCircleQuestion
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function LearningPage() {
    return ( 
        <PageContainer>
            {/* index bar */}
            <SideBar>
                {/* index container */}
                <IdxContainer>
                    <IdxTitle>
                        <FontAwesomeIcon icon={faList}/>목차
                    </IdxTitle>
                    <IdxItemsContainer>
                        <IdxItem>1주차 제목 자리</IdxItem>
                        <IdxItem>2주차 제목 자리</IdxItem>
                        <IdxItem>3주차 제목 자리</IdxItem>
                    </IdxItemsContainer>  
                </IdxContainer>

                {/* Question container */}
                <QaContainer>
                    <IdxTitle>
                        <FontAwesomeIcon icon={faCircleQuestion} />나의 질문
                    </IdxTitle>
                    <IdxItemsContainer>
                        <IdxItem>질문 내용 1</IdxItem>
                        <IdxItem>질문 내용 2</IdxItem>
                        <IdxItem>질문 내용 3</IdxItem>
                        <IdxItem>질문 내용 4</IdxItem>
                        <IdxItem>질문 내용 5</IdxItem>
                        <IdxItem>질문 내용 6</IdxItem>
                    </IdxItemsContainer>

                </QaContainer>
            </SideBar>

            {/* contents container */}
            <ContentContainer>
                {/* 강의 헤더 */}
                <LecHeader>
                    <LecTitle>
                        {/* 강의 제목 */}
                        입문자를 위한 파이썬 기초
                    </LecTitle>
                    <LecRate>
                        진도율: 1강/27강 (3.70%)
                        {/* 진도율 */}
                    </LecRate>
                </LecHeader>
                {/* 강의 container */}
                <LecContainer>
                    {/* chatting interface */}
                    <ChatContainer></ChatContainer>
                    {/* code editor */}
                    <TmpCodeContainer></TmpCodeContainer>
                </LecContainer>

            </ContentContainer>

        </PageContainer>
     );
}

export default LearningPage;