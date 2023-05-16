import { FormContainer, InputContainer, InstructorMode, LoginForm, LoginInnerLeftContainer, LoginInnerRightContainer, LoginOuterContainer, LogoImage, ModeContainer, StudentMode, SubmitInput, TitleContainer, ToRegister, ToRegisterParagraph } from "./style";
import logo from "../../assets/images/logo.png"
import Input from "../../components/Input";
import { useState } from "react";

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
            <LoginInnerLeftContainer>
                <TitleContainer>
                    Code with <br/> 
                    Star
                </TitleContainer>
                <LogoImage src={logo}>
                </LogoImage>
            </LoginInnerLeftContainer>
            <LoginInnerRightContainer>
                <LoginForm onSubmit={handleSubmit}>
                    <FormContainer>
                        <ModeContainer>
                            <StudentMode style={{background: isStudent ? "#F8D57E" : "white"}}>
                                <input type="radio" name="mode" value="student" defaultChecked onChange={handleModeChange}/>학생
                            </StudentMode>
                            <InstructorMode style={{background: isStudent ? "white" : "#F8D57E"}}>
                                <input type="radio" name="mode" value="instructor" onChange={handleModeChange}/>강사
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
                                    <a to="/">회원가입</a>
                                </ToRegister>
                            </ToRegisterParagraph>
                        </InputContainer>
                    </FormContainer>
                </LoginForm>
            </LoginInnerRightContainer>
        </LoginOuterContainer>
    );
}

export default LoginPage;