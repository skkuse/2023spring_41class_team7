import {
    Container,
    TextingContainer,
    MsgContainer,
    MsgIcon,
    StuMsgBox,
    MsgBox,
    InputsContainer,
    InputForm,
    InputsArea,
    InputBtn
} from "./style"
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";


function MessageBox(props) {

    if(props.isStudent){
        //  student textbox
        return(
            <MsgContainer>
                <StuMsgBox>
                    학생 - 수업 내용 및 질문에 대한 답변이 담길 부분입니다.    
                </StuMsgBox>
                <MsgIcon></MsgIcon>       
            </MsgContainer>
        );

    }
    else{
        // ai textbox
        return(
            
            <MsgContainer>
                <MsgIcon></MsgIcon>
                <MsgBox>
                    강사 - 수업 내용 및 질문에 대한 답변이 담길 부분입니다.    
                </MsgBox>  
            </MsgContainer>
            
        );

    }

}


function ChattingInterface() {

    const [inputs, setInputs] = useState("")
    const onChange = (e) => {
        setInputs(e.target.value)
    }
    const onSubmit = (e) => {
        e.preventDefault()
        if(inputs === ""){
            return
        }
        setInputs("")
    }

    return ( 
        <Container>

            {/* msg part*/}
            <TextingContainer>
                {/* ai */}
                <MessageBox isStudent = {true}/>
                <MessageBox/>
                

            </TextingContainer>

            {/* inputs part */}
            <InputsContainer>
            <InputForm onSubmit={onSubmit}>
                <InputsArea 
                    type="text-area"
                    value={inputs} 
                    onChange={onChange}
                />
                <InputBtn type="submit"><FontAwesomeIcon icon={faPaperPlane} /></InputBtn>

            </InputForm>
            </InputsContainer>

        </Container>
     );
}

MessageBox.defaultProps = {
    isStudent: false
  }

export default ChattingInterface;