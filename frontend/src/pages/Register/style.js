import styled from "@emotion/styled";

export const RegisterContainer = styled.div`
    background-color: #FAF7F2;
   
`;

export const RegisterForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    
`;

export const ErrorMessageBox = styled.p`
    width: 320px;
    margin: 6px 0;
    font-weight: 700;
    font-size: 14px;
    color: red;
`;

export const SubmitInput = styled.input`
    width: 320px;
    height: 73px;
    border: 3px solid #F4B860;
    border-radius: 10px;
    font-weight: 700;
    font-size: 16px;
    background-color: white;
`;