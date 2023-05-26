import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { createTheme } from '@uiw/codemirror-themes';
import { cpp } from '@codemirror/lang-cpp';
import { java } from '@codemirror/lang-java';
import { python } from '@codemirror/lang-python';
import { CodeEditorContainer, 
         CodeEditorHeader,
         CodeEditorButton_Exe,
         CodeEditorButton_Submit,
         CodeEditorDescription,
         CodeEditorButton_ExeDiv } from './style';

import {EditorView} from "@codemirror/view"

import Button from '../Button';

    

export function CodeEditorCpp(props) {
    const onChange = React.useCallback((value, viewUpdate) => {
      console.log('value:', value);
    }, []);
    return (
    <CodeEditorContainer>
        <CodeEditorHeader>
            <CodeEditorDescription>코드 입력</CodeEditorDescription>
              
              <CodeEditorButton_Exe  onClick={props.onClick}
            style={{backgroundColor: props.backgroundColor}}>실행</CodeEditorButton_Exe>
              <CodeEditorButton_Submit>제출</CodeEditorButton_Submit>
            
        </CodeEditorHeader>
        <CodeMirror
            value="Write your Code"
            style={{width:"100%"}}
            height='1400px'
            theme="dark"
            onChange={onChange}
            extensions={[cpp()]} 
        />
    </CodeEditorContainer>
      
    );
  }


export function CodeEditorPython() {
    const onChange = React.useCallback((value, viewUpdate) => {
      console.log('value:', value);
    }, []);
    return (
      <CodeMirror
        value="Write your Code"
        height="800px"
        theme="dark"
        onChange={onChange}
        extensions={[python()]} 
      />
    );
  }



export function CodeEditorJava() {
  const onChange = React.useCallback((value, viewUpdate) => {
    console.log('value:', value);
  }, []);
  return (
    <CodeMirror
      value="Write your Code"
      height="800px"
      theme="dark"
      onChange={onChange}
      extensions={[java()]} 
    />
  );
}

