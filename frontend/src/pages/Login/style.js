import styled from "@emotion/styled";

export const LoginOuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  background-color: #eeeeee;
`;

export const LoginInnerContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 75px;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 35px;
  font-style: normal;
  font-weight: 700;
  font-size: 75px;
  text-align: center;
  align-items: center;
`;

export const LogoImage = styled.img`
  width: 128px;
  height: 128px;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px 20px;
  border-radius: 20px;
  border: 3px solid #94b4ff;
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;S
    justify-content: center;
    align-items: center;
    padding: 50px;
    gap: 50px;
`;

export const SubmitInput = styled.input`
  width: 320px;
  height: 67px;
  border: 3px solid #f4b860;
  border-radius: 10px;
  font-weight: 700;
  font-size: 16px;
  background-color: #cddbfc;
  border: none;
`;

export const ToRegisterParagraph = styled.p`
  text-align: center;
  font-weight: 600;
  font-size: 16px;
  color: #6f7680;
  margin: 0;
`;

export const ToRegister = styled.span`
  text-decoration: underline;
`;
