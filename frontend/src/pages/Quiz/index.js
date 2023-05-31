import Header from "../../components/Header";
import { useState } from "react";
import { CodeEditor } from "../../components/CodeEditor";

import ChattingInterface from "../../components/Chatting";
import { OuttestContainer } from "../../components/OuttestContainer/style";
import {
  ChatContainer,
  ContentContainer,
  IdxContainer,
  LecContainer,
  PageContainer,
  SideBar,
} from "../Learning/style";
import { MostOuterDiv } from "../../components/MostOuterDiv/style";
import {
  QuizPageContainer,
  QuizChatContainer,
  QuizInfoContainer,
  QuizOuterContainer,
  QuizTitleContainer,
  QuizEditorContainer,
} from "./style";
import React from "react";
import setShow from "../../components/CodeEditor/index.js";

function QuizPage(props) {
  return (
    <MostOuterDiv>
      <Header></Header>
      <OuttestContainer>
        <QuizPageContainer>
          <QuizChatContainer>
            <QuizTitleContainer>제목</QuizTitleContainer>
            <QuizInfoContainer>내용</QuizInfoContainer>
            <ChattingInterface></ChattingInterface>
          </QuizChatContainer>
          <CodeEditor> </CodeEditor>
        </QuizPageContainer>
      </OuttestContainer>
    </MostOuterDiv>
  );
}

export default QuizPage;
