import Input from "../../components/Input";
import { useState} from "react";
import { ErrorMessageBox, FormContainer, InputContainer, InstructorMode, ModeContainer, RegisterContainer, RegisterForm, StudentMode, SubmitInput, ToLogin, ToLoginParagraph } from "./style";
import { Link} from "react-router-dom";

function RegisterPage(props) {

    
    const [mode, setMode] = useState("student")
    const [isStudent, setIsStudent] = useState(true);


    const [userId, setUserId] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    
    const [isUserIdValid, setIsUserIdValid] = useState(false);
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [isPasswordValid, setIsPasswordValid] = useState(false);
    const [isPasswordConfirmValid, setIsPasswordConfirmValid] = useState(false);

    const [userIdError, setUserIdError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [passwordConfirmError, setPasswordConfirmError] = useState("");



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
       
        let pattern =  /^[a-z]+[a-z0-9]{5,19}$/g;

        if(e.target.value === "") {
            setIsUserIdValid(false);
            setUserIdError("");
        }
        
        else if(pattern.test(e.target.value)) {
            setIsUserIdValid(true);
            setUserIdError("");
        }
        else {
            setIsUserIdValid(false);
            setUserIdError("아이디는 6~20자로 영문자로 시작하며 영문자 또는 숫자만 사용할 수 있습니다.");
        }
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        
        let pattern = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
        
        if(e.target.value === "") {
            setIsEmailValid(false);
            setEmailError("");
        }
        
        else if(pattern.test(e.target.value)) {
            setIsEmailValid(true);
            setEmailError("");
        }
        else {
            setIsEmailValid(false);
            setEmailError("잘못된 형식의 이메일 주소입니다.");
        }
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);

        let pattern =  /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;

        if(e.target.value === "") {
            setIsPasswordValid(false);
            setPasswordError("");
        }

        else if(pattern.test(e.target.value)) {
            setIsPasswordValid(true);
            setPasswordError("");
        }
        else {
            setIsPasswordValid(false);
            setPasswordError("비밀번호는 8~16자로 영문, 숫자, 특수문자를 최소 한가지씩 포함해야 합니다.");
        }

        if(passwordConfirm !== e.target.value) {
            setIsPasswordConfirmValid(false);
            setPasswordConfirmError("비밀번호가 일치하지 않습니다.");
        }
    }

    const handlePasswordConfirmChange = (e) => {
        setPasswordConfirm(e.target.value);
        if (e.target.value === "") {
            setIsPasswordConfirmValid(false);
            setPasswordConfirmError("");
          } else if (password && e.target.value === password) {
            setIsPasswordConfirmValid(true);
            setPasswordConfirmError("");
          } else {
            setIsPasswordConfirmValid(false);
            setPasswordConfirmError("비밀번호가 일치하지 않습니다.");
          }
        
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

   return(
    <RegisterContainer>
        <FormContainer>
            <RegisterForm onSubmit={handleSubmit}>
                <ModeContainer>
                    <StudentMode style={{background: isStudent ? "#F0F5FF" : "white"}}>
                        <input type="radio" name="mode" value="student" defaultChecked onChange={handleModeChange} style={{marginRight: 20,}}/>학생
                    </StudentMode>
                    <InstructorMode style={{background: isStudent ? "white" : "#F0F5FF"}}>
                        <input type="radio" name="mode" value="instructor" onChange={handleModeChange} style={{marginRight: 20,}}/>강사
                    </InstructorMode>
                </ModeContainer>
                <InputContainer>
                    {/* {mode} <br/> */}
                    <Input
                        id="userid"
                        name="userid"
                        type="text"
                        placeholder="아이디"
                        onChange={handleUserIdChange}
                        >
                    </Input>
                    <ErrorMessageBox>{userIdError}</ErrorMessageBox>
                    {/* <p>{String(isUserIdValid)}</p> */}
                    <Input
                        id="email"
                        name="email"
                        type="text"
                        placeholder="이메일"
                        onChange={handleEmailChange}>
                    </Input>
                    <ErrorMessageBox>{emailError}</ErrorMessageBox>
                    {/* <p>{String(isEmailValid)}</p> */}
                    <Input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="비밀번호"
                        onChange={handlePasswordChange}>
                    </Input>
                    <ErrorMessageBox>{passwordError}</ErrorMessageBox>
                    {/* <p>{password}</p>
                    <p>{String(isPasswordValid)}</p> */}
                    <Input
                        id="passwordConfirm"
                        name="passwordConfirm"
                        type="password"
                        placeholder="비밀번호 확인"
                        onChange={handlePasswordConfirmChange}>
                    </Input>
                    <ErrorMessageBox>{passwordConfirmError}</ErrorMessageBox>
                    {/* <p>{passwordConfirm}</p>
                    <p>{String(isPasswordConfirmValid)}</p> */}
                    <SubmitInput type="submit" value="회원가입"></SubmitInput>
                    <ToLoginParagraph>
                        계정이 이미 있으세요?{" "}
                        <ToLogin>
                            <Link to="/login">로그인</Link>
                        </ToLogin>
                    </ToLoginParagraph>
                </InputContainer>
            </RegisterForm>
        </FormContainer>
    </RegisterContainer>
   );
}

export default RegisterPage;