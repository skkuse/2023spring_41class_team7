<<<<<<< HEAD
import React, { useEffect, useRef } from 'react';
import { useState } from "react";
import CodeMirror from '@uiw/react-codemirror';

import { cpp } from '@codemirror/lang-cpp';
import { java } from '@codemirror/lang-java';
import { python } from '@codemirror/lang-python';
import { CodeEditorContainer, 
         CodeEditorHeader,
         CodeEditorButton_Exe,
         CodeEditorButton_Submit,
         CodeEditorDescription,
         CodeEditorLangSelect,
         CodeEditorLang,
         CodeEditorListContainer,
         CodeEditorSelectedLang,
         CodeEditorListContainerShow,
         CodeEditorLangSelectButton} from './style';

import toggleLogo from "../../assets/images/Vector.png";
export function CodeEditor(props) {
    
    const [show, setShow] = useState(false);
    const [lang, setLang] = useState("Python");

    const onChange = React.useCallback((value, viewUpdate) => {
      
    }, []);

    const onClickSelect = React.useCallback((viewUpdate) =>{
      setShow(true);
      
    }, []);
    const onClickLang = (params, e) => {
      console.log(params);
      setLang(params);
      setShow(false);
    }
    return (
    <CodeEditorContainer >
        <CodeEditorHeader >
            <CodeEditorDescription>코드 입력</CodeEditorDescription>
              <CodeEditorLang style={{position:'relative'}}>
                <CodeEditorLangSelect style={{fontSize:'20px'}}>

                  <CodeEditorSelectedLang>
                    {
                      lang == "Python" && "Python" ||
                      lang == "C++" && "C++" ||
                      lang == "JAVA" && "JAVA" ||
                      "Select Language"
                    }
                  </CodeEditorSelectedLang>
                    <CodeEditorLangSelectButton onClick={onClickSelect}
                  style={{ backgroundImage:`url(${toggleLogo})`}}></CodeEditorLangSelectButton>
      
                </CodeEditorLangSelect>
                <div>
                  {show ? 
                  <CodeEditorListContainerShow>
                    <ul style={{backgroundColor:'#FFFFFF', textAlign:'left',padding:'0px', marginBlock:'20%'}}>
                    <li style={{listStyle:'none', border:'1px solid black', fontSize:'20px', padding:'2px 5px'}}
                        onClick={(e)=>{onClickLang("Python", e)}}>Python</li>
                    <li style={{listStyle:'none', border:'1px solid black', fontSize:'20px', padding:'2px 5px'}}
                        onClick={(e)=>{onClickLang("C++", e)}}>C++</li>
                    <li style={{listStyle:'none', border:'1px solid black', fontSize:'20px', padding:'2px 5px'}}
                        onClick={(e)=>{onClickLang("JAVA", e)}}>JAVA</li>
                    </ul>
                    </CodeEditorListContainerShow>: 
                  <CodeEditorListContainer>
  
                  </CodeEditorListContainer>}
                </div>
              </CodeEditorLang>
              
              <CodeEditorButton_Exe  onClick={props.onClick}
            style={{backgroundColor: props.backgroundColor}}>실행</CodeEditorButton_Exe>
              <CodeEditorButton_Submit>제출</CodeEditorButton_Submit>
        </CodeEditorHeader>
        <CodeMirror
            value="Write your Code"
            style={{width:"100%", height:"100%"}}
            height='100%'
            theme="dark"
            onChange={onChange}
            
            extensions={lang == "Python" && python() ||
                        lang == "C++" && cpp() ||
                        lang == "JAVA" && java()} 
        />
    </CodeEditorContainer>
      
    );
  }



=======
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
export function CodeEditor(props) {
  const [show, setShow] = useState(false);
  const [lang, setLang] = useState("Python");

  const onChange = React.useCallback((value, viewUpdate) => {}, []);

  const onClickSelect = React.useCallback((viewUpdate) => {
    setShow(true);
  }, []);
  const onClickLang = (params, e) => {
    console.log(params);
    setLang(params);
    setShow(false);
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
                      fontSize: "20px",
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
                      fontSize: "20px",
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
                      fontSize: "20px",
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

        <CodeEditorButton_Exe
          onClick={props.onClick}
          style={{ backgroundColor: props.backgroundColor }}
        >
          실행
        </CodeEditorButton_Exe>
        <CodeEditorButton_Submit>제출</CodeEditorButton_Submit>
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
>>>>>>> 9ea8fc9a798717ae5b57a00e7507f6afc8a48c65
