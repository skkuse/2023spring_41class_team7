import { FormContainer, InputContainer, InstructorMode, LoginForm, LoginInnerContainer, LoginInnerLeftContainer, LoginInnerRightContainer, LoginOuterContainer, LogoImage, ModeContainer, StudentMode, SubmitInput, TitleContainer, ToRegister, ToRegisterParagraph } from "./style";
import logo from "../../assets/images/logo.png"
import Input from "../../components/Input";
import { useState } from "react";
import { Link  } from "react-router-dom";

function LoginPage(props) {

    const [mode, setMode] = useState("student")
    const [isStudent, setIsStudent] = useState(true);


    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");

    const handleModeChange = (e) => {
        setMode(e.target.value);
        if(e.target.value === "student") {
            setIsStudent(true);
        }
        else {
            setIsStudent(false);
        }
    }   

    const handleUserIdChange = (e) => {
        setUserId(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = () => {

    }

    return(
        <LoginOuterContainer>
            <LoginInnerContainer>
                <TitleContainer>
                    Code with Star
                    <LogoImage src={logo}></LogoImage>
                </TitleContainer>
                <LoginForm onSubmit={handleSubmit}>
                    <FormContainer>
                        <ModeContainer>
                            <StudentMode style={{background: isStudent ? "#F0F5FF" : "white"}}>
                                <input type="radio" name="mode" value="student" defaultChecked onChange={handleModeChange} style={{marginRight: 20,}}/>학생
                            </StudentMode>
                            <InstructorMode style={{background: isStudent ? "white" : "#F0F5FF"}}>
                                <input type="radio" name="mode" value="instructor" onChange={handleModeChange} style={{marginRight: 20,}}/>강사
                            </InstructorMode>
                        </ModeContainer>
                        <InputContainer>
                            {/* {mode} */}
                            <Input
                                id="userid"
                                name="userid"
                                type="text"
                                placeholder="아이디"
                                onChange={handleUserIdChange}
                                >
                            </Input>
                            {/* {userId} */}
                            <Input
                                id="password"
                                name="password"
                                type="password"
                                placeholder="비밀번호"
                                onChange={handlePasswordChange}>
                            </Input>
                            {/* {password} */}
                            <SubmitInput type="submit" value="로그인"></SubmitInput>
                            <ToRegisterParagraph>
                                Code with Star 이 처음이세요?{" "}
                                <ToRegister>
                                    <Link to="/register">회원가입</Link>
                                </ToRegister>
                            </ToRegisterParagraph>
                        </InputContainer>
                    </FormContainer>
                </LoginForm>
            </LoginInnerContainer>
        </LoginOuterContainer>
    );
}

export default LoginPage;