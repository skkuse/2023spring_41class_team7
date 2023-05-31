import {
  FormContainer,
  InputContainer,
  InstructorMode,
  LoginForm,
  LoginInnerContainer,
  LoginOuterContainer,
  LogoImage,
  ModeContainer,
  StudentMode,
  SubmitInput,
  TitleContainer,
  ToRegister,
  ToRegisterParagraph,
} from "./style";
import logo from "../../assets/images/logo.png";
import Input from "../../components/Input";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { serverAxios } from "../../utils/commonAxios";

function Login(props) {
  const [mode, setMode] = useState("student");
  const [isStudent, setIsStudent] = useState(true);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [isUsernameValid, setIsUsernameValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const navigate = useNavigate();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    if (isUsernameValid && isPasswordValid) {
      try {
        const body = {
          username: username,
          password: password,
          educator: !isStudent,
        };
        // await serverAxios
        //   .post("user/auth", body, {
        //     withCredentials: true,
        //   })
        //   .then((response) => {
        //     alert("로그인 성공");
        //     localStorage.setItem("loggedin", true);
        //     localStorage.setItem("username", response.data.username);
        //     localStorage.setItem("nickname", response.data.nickname);
        //     localStorage.setItem("email", response.data.email);
        //     localStorage.setItem("educator", response.data.educator);
        //     navigate("/main");
        //   })
        // .catch((e) => {
        //   console.log(e);
        //   로그인 실패
        //   alert("로그인 실패");
        // });
        localStorage.setItem("loggedin", true);
        localStorage.setItem("user", JSON.stringify(body));
        alert("로그인 성공");
        navigate("/add");
      } catch (e) {}
    }
  };

  const handleModeChange = (e) => {
    setMode(e.target.value);
    if (e.target.value === "student") {
      setIsStudent(true);
    } else {
      setIsStudent(false);
    }
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    if (e.target.value === "") {
      setIsUsernameValid(false);
    } else {
      setIsUsernameValid(true);
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (e.target.value === "") {
      setIsPasswordValid(false);
    } else {
      setIsPasswordValid(true);
    }
  };

  return (
    <LoginOuterContainer>
      <LoginInnerContainer>
        <TitleContainer>
          Code with Star
          <LogoImage src={logo}></LogoImage>
        </TitleContainer>
        <LoginForm onSubmit={handleLoginSubmit}>
          <FormContainer>
            <ModeContainer>
              <StudentMode
                style={{ background: isStudent ? "#F0F5FF" : "white" }}
              >
                <input
                  type="radio"
                  name="mode"
                  value="student"
                  defaultChecked
                  onChange={handleModeChange}
                  style={{ marginRight: 20 }}
                />
                학생
              </StudentMode>
              <InstructorMode
                style={{ background: isStudent ? "white" : "#F0F5FF" }}
              >
                <input
                  type="radio"
                  name="mode"
                  value="instructor"
                  onChange={handleModeChange}
                  style={{ marginRight: 20 }}
                />
                강사
              </InstructorMode>
            </ModeContainer>
            <InputContainer>
              {/* {mode} */}
              <Input
                id="username"
                name="username"
                type="text"
                placeholder="아이디"
                onChange={handleUsernameChange}
              ></Input>
              {/* {username} */}
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="비밀번호"
                onChange={handlePasswordChange}
              ></Input>
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

export default Login;
