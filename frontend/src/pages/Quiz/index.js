import Header from "../../components/Header";
import {
  CodeEditorContainer,
  CodeEditorHeader,
} from "../../components/CodeEditor/style";
import { CodeEditorCpp } from "../../components/CodeEditor";
import {
  QuizOuterContainer,
  QuizTitleContainer,
  QuizInnerContainer,
  QuizUtilContainer,
  QuizEditorContainer,
} from "./style";
import SearchHeader from "../../components/SearchHeader";
import ChattingInterface from "../../components/Chatting";



function QuizPage(props) { 
    const handleClick=()=>{
        alert("@!#!@#!@#!@");
    }
  return (
    <QuizOuterContainer>
      <Header></Header>
      <QuizInnerContainer>
        <QuizUtilContainer>
          <QuizTitleContainer></QuizTitleContainer>
          <ChattingInterface></ChattingInterface>
        </QuizUtilContainer>
        <QuizEditorContainer>
          <CodeEditorCpp onClick={handleClick}></CodeEditorCpp>
        </QuizEditorContainer>
      </QuizInnerContainer>
    </QuizOuterContainer>
  );
}

export default QuizPage;
