import styled from "@emotion/styled";

export const RegisterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #FAF7F2;
   
`;

export const RegisterForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
`;

export const FormContainer = styled.div`
    width: 782px;
    border-radius: 20px;
    border: 3px solid black;
    justify-content: center;
    align-items: center;
`;

export const ModeContainer = styled.div`
    display: table;
    justify-content: center;
    align-items: center;
    padding: 0px;
    width: 782px;
    height: 82px;
    border-radius: 20px;
    
`;

export const StudentMode = styled.div`
    display:table-cell;
    vertical-align:middle;
    height: 100%;
    text-align: center;
    border-radius: 20px 0 0 0;
    border-bottom: 3px solid #000000;
    font-weight: 700;
    font-size: 16px; 
    
    
`;

export const InstructorMode = styled.div`
    display:table-cell;
    vertical-align:middle;
    height: 100%;
    text-align: center;
    border-radius: 0 20px 0 0;
    border-left: 3px solid #000000;
    border-bottom: 3px solid #000000;
    font-weight: 700;
    font-size: 16px;
`;

export const InputContainer = styled.div`  
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 75px;
    gap: 25px;
    
`;

export const ErrorMessageBox = styled.p`
    width: 316px;
    font-weight: 600;
    font-size: 12px;
    color: red;
    margin-top: -15px;
`;

export const SubmitInput = styled.input`
    width: 316px;
    height: 63px;
    border: 3px solid #F4B860;
    border-radius: 10px;
    font-weight: 700;
    font-size: 16px;
    background-color: white;
`;

export const ToLoginParagraph = styled.p`
    text-align: center;  
    font-weight: 600;
    font-size: 14px;
    color: #6F7680;
    margin-top: 25px;

`;

export const ToLogin = styled.span`
    text-decoration: underline;
`;