import {
  Container,
  TextingContainer,
  MsgContainer,
  StuMsgBox,
  MsgBox,
  InputsContainer,
  InputForm,
  InputsArea,
  InputBtn,
} from "./style";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import TeacherProfile from "../../assets/images/Star Struck.png";
import StudentProfile from "../../assets/images/student.png";
import { serverAxios } from "../../utils/commonAxios";
import { useParams } from "react-router-dom";

function MessageBox(props) {
  if (props.isStudent) {
    //  student textbox
    return (
      <MsgContainer key={props.msgID} flexValue="flex-end">
        <StuMsgBox>{props.textData}</StuMsgBox>
        <img src={StudentProfile} style={{ width: 70, height: 70 }} />
      </MsgContainer>
    );
  } else {
    // ai textbox
    return (
      <MsgContainer key={props.msgID} flexValue="flex-start">
        <img src={TeacherProfile} style={{ width: 60, height: 60 }} />
        <MsgBox>{props.textData}</MsgBox>
      </MsgContainer>
    );
  }
}

function ChattingInterfaceQuiz(props) {
  const { chattingData, setChatting } = props;
  const { quizid } = useParams(); // course id , chapter id 받기
  const [inputs, setInputs] = useState("");
  const onChange = (e) => {
    setInputs(e.target.value);
  };

  const sendStudentData = async (body) => {
    // student input 보내기
    await serverAxios
      .post(`/learn/quiz/${quizid}/`, body, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(`respose :` + res.data.data);
        //setChatting((prev) => [...prev, res.data]); // 학생 input을 chatting data에 저장
        setChatting((prev) => [...prev, res.data]);
        //setChattingDataReady(true);
        //props.setClickFlag(!props.clickFlag);
        console.log(chattingData);
        
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const onSubmit = (e) => {
    e.preventDefault();

    if (inputs === "") {
      return;
    } else {
      console.log(inputs);
      const body = {
        data: inputs,
        bot: false,
      };
      sendStudentData(body);
    }
    setInputs("");
  };

  return (
    <Container>
      {/* msg part*/}
      <TextingContainer>
        { chattingData.map((item, idx) => {
            return item.bot == true ? (
            <MessageBox
              key={idx}
              msgID={idx}
              isStudent={false}
              textData={item.data}
            />
          ) : (
            <MessageBox
              key={idx}
              msgID={idx}
              isStudent={true}
              textData={item.data}
            />
          );
        })}
      </TextingContainer>

      {/* inputs part */}
      <InputsContainer>
        <InputForm onSubmit={onSubmit}>
          <InputsArea type="text-area" value={inputs} onChange={onChange} />
          <InputBtn type="submit">
            <FontAwesomeIcon icon={faPaperPlane} />
          </InputBtn>
        </InputForm>
      </InputsContainer>
    </Container>
  );
}

MessageBox.defaultProps = {
  isStudent: false,
};

export default ChattingInterfaceQuiz;
