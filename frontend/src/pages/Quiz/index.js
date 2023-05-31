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

<<<<<<< HEAD
function QuizPage(props) {
=======

function QuizPage(props) { 
  const testJSONArray = [
    
  ]
  
>>>>>>> c18943bc6b7726dd5303060b72cfa77f58b3bf6e
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
