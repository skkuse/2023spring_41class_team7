import React, { useEffect, useRef } from "react";
import { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";

import { cpp } from "@codemirror/lang-cpp";
import { java } from "@codemirror/lang-java";
import { python } from "@codemirror/lang-python";
import {
  CodeEditorContainer,
  CodeEditorHeader,
  CodeEditorButton_Exe,
  CodeEditorButton_Submit,
  CodeEditorDescription,
  CodeEditorLangSelect,
  CodeEditorLang,
  CodeEditorListContainer,
  CodeEditorSelectedLang,
  CodeEditorListContainerShow,
  CodeEditorLangSelectButton,
} from "./style";

import toggleLogo from "../../assets/images/Vector.png";
import { useParams } from "react-router-dom";
import { serverAxios } from "../../utils/commonAxios";


export function CodeEditorQuiz(props) {
  const { quizid } = useParams();
  
  const { chattingData, setChatting } = props;
  const [show, setShow] = useState(false);
  const [lang, setLang] = useState("Python");

  const [code, setCode] = useState("");
  let userCode = "";
  //let code = "Write your Code";
  const onChange = React.useCallback((value, viewUpdate) => {
    setCode(value);
    userCode = value;
    setCode(value);
    
  }, []);
  const onClickSelect = React.useCallback((viewUpdate) => {
    setShow(true);
  }, []);
  const onClickLang = (params, e) => {
    console.log(params);
    setLang(params);
    setShow(false);
  };

  const codeExecution = async(body) => {
    const config = {"Content-Type": 'application/json'};
    await serverAxios
    .post(`/learn/quiz/${quizid}/`,(body), config,  {
      withCredentials: true
    })
    .then((res) => {
      console.log(`respose :` + JSON.stringify(res.data));
      setChatting((prev) => [...prev, res.data]); // 학생 input을 chatting data에 저장
      //setChatting1(res.data);
      props.setClickFlag(!props.clickFlag);
      //console.log("Response "+ chattingData[chattingData.length - 1].data);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  const exeClick = () => {
    if(userCode === "Write your Code"){
      return;
    } else{
      const body = {
        data: code,
        bot: false,
      };
      codeExecution(body);
    }
  };

  const submitClick = () => {
    if(userCode === "Write your Code"){
      return;
    } else{
      const body = {
        data: code,
        bot: false,
      };
      codeExecution(body);
    }
  };


  return (
    <CodeEditorContainer>
      <CodeEditorHeader>
        <CodeEditorDescription>코드 입력</CodeEditorDescription>
        <CodeEditorLang style={{ position: "relative" }}>
          <CodeEditorLangSelect style={{ fontSize: "20px" }}>
            <CodeEditorSelectedLang>
              {(lang == "Python" && "Python") ||
                (lang == "C++" && "C++") ||
                (lang == "JAVA" && "JAVA") ||
                "Select Language"}
            </CodeEditorSelectedLang>
            <CodeEditorLangSelectButton
              onClick={onClickSelect}
              style={{ backgroundImage: `url(${toggleLogo})` }}
            ></CodeEditorLangSelectButton>
          </CodeEditorLangSelect>
          <div>
            {show ? (
              <CodeEditorListContainerShow>
                <ul
                  style={{
                    backgroundColor: "#FFFFFF",
                    textAlign: "left",
                    padding: "0px",
                    marginBlock: "20%",
                  }}
                >
                  <li
                    style={{
                      listStyle: "none",
                      border: "1px solid black",
                      fontSize: "15px",
                      padding: "2px 5px",
                    }}
                    onClick={(e) => {
                      onClickLang("Python", e);
                    }}
                  >
                    Python
                  </li>
                  <li
                    style={{
                      listStyle: "none",
                      border: "1px solid black",
                      fontSize: "15px",
                      padding: "2px 5px",
                    }}
                    onClick={(e) => {
                      onClickLang("C++", e);
                    }}
                  >
                    C++
                  </li>
                  <li
                    style={{
                      listStyle: "none",
                      border: "1px solid black",
                      fontSize: "15px",
                      padding: "2px 5px",
                    }}
                    onClick={(e) => {
                      onClickLang("JAVA", e);
                    }}
                  >
                    JAVA
                  </li>
                </ul>
              </CodeEditorListContainerShow>
            ) : (
              <CodeEditorListContainer></CodeEditorListContainer>
            )}
          </div>
        </CodeEditorLang>
        <CodeEditorButton_Exe onClick={exeClick}>실행</CodeEditorButton_Exe>
        <CodeEditorButton_Submit  onClick={submitClick}>제출</CodeEditorButton_Submit>
      </CodeEditorHeader>
      <CodeMirror
        value="Write your Code"
        style={{ width: "100%", height: "100%" }}
        height="100%"
        theme="dark"
        onChange={onChange}
        extensions={
          (lang == "Python" && python()) ||
          (lang == "C++" && cpp()) ||
          (lang == "JAVA" && java())
        }
      />
    </CodeEditorContainer>
  );
}
