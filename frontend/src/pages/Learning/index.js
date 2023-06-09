import {
  PageContainer,
  SideBar,
  IdxContainer,
  IdxTitle,
  IdxItemsContainer,
  IdxItem,
  ContentContainer,
  LecHeader,
  LecTitle,
  LecContainer,
  ChatContainer,
} from "./style";
import { OuttestContainer } from "../../components/OuttestContainer/style";
import { faList, faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ChattingInterface from "../../components/Chatting";
import { CodeEditor } from "../../components/CodeEditor";
import { MostOuterDiv } from "../../components/MostOuterDiv/style";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import { serverAxios } from "../../utils/commonAxios";
import { useParams } from "react-router-dom";

function LearningPage() {
  const { courseid } = useParams();
  const [learningInfo, setLearning] = useState(null); // 강의 전체 정보 저장
  const [chattingData, setChatting] = useState(null); // 채팅 데이터 저장

  useEffect(() => {
    //console.log(courseid);
    getLearningInfo(courseid);
  }, []);

  const getLearningInfo = async (courseid) => {
    await serverAxios
      .get(`/learn/course/${courseid}/`, { withCredentials: true })
      .then((res) => {
        setLearning(res.data);
        setChatting(res.data.chat);
      })
      .catch((err) => console.log(err));
  };

  if (!learningInfo) {
    return null;
  }

  return (
    <MostOuterDiv>
      <Header />
      <OuttestContainer>
        <PageContainer>
          {/* index bar */}
          <IdxContainer>
            <IdxTitle>
              <FontAwesomeIcon icon={faList} />
              목차
            </IdxTitle>
            <IdxItemsContainer>
              {/* todo - 목차 링크 달기 */}
              {learningInfo.chapter.map((item) => {
                return <IdxItem key={item.id}>{item.title}</IdxItem>;
              })}
            </IdxItemsContainer>
          </IdxContainer>

          {/* contents container */}
          <ContentContainer>
            {/* 강의 헤더 */}
            <LecHeader>
              <LecTitle>
                {/* 강의 제목 */}
                {learningInfo.course.title}
              </LecTitle>
            </LecHeader>

            {/* 강의 container */}
            <LecContainer>
              {/* chatting interface */}
              <ChatContainer>
                <ChattingInterface
                  chattingData={chattingData}
                  setChatting={setChatting}
                />
              </ChatContainer>
              {/* code editor */}
              <CodeEditor />
            </LecContainer>
          </ContentContainer>
        </PageContainer>
      </OuttestContainer>
    </MostOuterDiv>
  );
}

export default LearningPage;
