import Input from "../../components/Input";
import { useState } from "react";
import {
  ErrorMessageBox,
  FormContainer,
  InputContainer,
  InstructorMode,
  ModeContainer,
  RegisterContainer,
  RegisterForm,
  StudentMode,
  SubmitInput,
  ToLogin,
  ToLoginParagraph,
} from "./style";
import { Link, useNavigate } from "react-router-dom";
import { serverAxios } from "../../utils/commonAxios";

function Register(props) {
  const [mode, setMode] = useState("student");
  const [isStudent, setIsStudent] = useState(true);

  const [username, setUsername] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const [isUsernameValid, setIsUsernameValid] = useState(false);
  const [isNicknameValid, setIsNicknameValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isPasswordConfirmValid, setIsPasswordConfirmValid] = useState(false);

  const [usernameError, setUsernameError] = useState("");
  const [nicknameError, setNicknameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordConfirmError, setPasswordConfirmError] = useState("");

  const navigate = useNavigate();

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    if (
      isUsernameValid &&
      isNicknameValid &&
      isEmailValid &&
      isPasswordValid &&
      isPasswordConfirmValid
    ) {
      try {
        const body = {
          username: username,
          nickname: nickname,
          email: email,
          password: password,
          password2: passwordConfirm,
          educator: !isStudent,
        };
        await serverAxios.post("/user/create/", body).then((response) => {
          alert("회원가입 성공");
          navigate("/login");
        });
      } catch (e) {
        console.log(e);
        alert("회원가입 실패");
      }
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

    let pattern = /^[a-z]+[a-z0-9]{5,19}$/g;

    if (e.target.value === "") {
      setIsUsernameValid(false);
      setUsernameError("");
    } else if (pattern.test(e.target.value)) {
      setIsUsernameValid(true);
      setUsernameError("");
    } else {
      setIsUsernameValid(false);
      setUsernameError(
        "아이디는 6~20자로 영문자로 시작하며 영문자 또는 숫자만 사용할 수 있습니다."
      );
    }
  };

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);

    let pattern = /^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]{2,16}$/;

    if (e.target.value === "") {
      setIsNicknameValid(false);
      setNicknameError("");
    } else if (pattern.test(e.target.value)) {
      setIsNicknameValid(true);
      setNicknameError("");
    } else {
      setIsNicknameValid(false);
      setNicknameError(
        "아이디는 2~16자로 영어 또는 숫자 또는 한글을 사용할 수 있습니다."
      );
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);

    let pattern =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

    if (e.target.value === "") {
      setIsEmailValid(false);
      setEmailError("");
    } else if (pattern.test(e.target.value)) {
      setIsEmailValid(true);
      setEmailError("");
    } else {
      setIsEmailValid(false);
      setEmailError("잘못된 형식의 이메일 주소입니다.");
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);

    let pattern =
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;

    if (e.target.value === "") {
      setIsPasswordValid(false);
      setPasswordError("");
    } else if (pattern.test(e.target.value)) {
      setIsPasswordValid(true);
      setPasswordError("");
    } else {
      setIsPasswordValid(false);
      setPasswordError(
        "비밀번호는 8~16자로 영문, 숫자, 특수문자를 최소 한 가지씩 포함해야 합니다."
      );
    }

    if (passwordConfirm !== e.target.value) {
      setIsPasswordConfirmValid(false);
      setPasswordConfirmError("비밀번호가 일치하지 않습니다.");
    }
  };

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
  };

  return (
    <RegisterContainer>
      <FormContainer>
        <RegisterForm onSubmit={handleRegisterSubmit}>
          <ModeContainer>
            <StudentMode
              style={{ background: isStudent ? "#cddbfc" : "white" }}
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
              style={{ background: isStudent ? "white" : "#cddbfc" }}
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
            {/* {mode} <br/> */}
            <Input
              id="username"
              name="username"
              type="text"
              placeholder="아이디"
              onChange={handleUsernameChange}
            ></Input>
            <ErrorMessageBox>{usernameError}</ErrorMessageBox>
            {/* <p>{String(isUsernameValid)}</p> */}
            <Input
              id="nickname"
              name="nickname"
              type="text"
              placeholder="닉네임"
              onChange={handleNicknameChange}
            ></Input>
            <ErrorMessageBox>{nicknameError}</ErrorMessageBox>
            {/* <p>{String(isNicknameValid)}</p> */}
            <Input
              id="email"
              name="email"
              type="text"
              placeholder="이메일"
              onChange={handleEmailChange}
            ></Input>
            <ErrorMessageBox>{emailError}</ErrorMessageBox>
            {/* <p>{String(isEmailValid)}</p> */}
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="비밀번호"
              onChange={handlePasswordChange}
            ></Input>
            <ErrorMessageBox>{passwordError}</ErrorMessageBox>
            {/* <p>{password}</p>
                    <p>{String(isPasswordValid)}</p> */}
            <Input
              id="passwordConfirm"
              name="passwordConfirm"
              type="password"
              placeholder="비밀번호 확인"
              onChange={handlePasswordConfirmChange}
            ></Input>
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

export default Register;