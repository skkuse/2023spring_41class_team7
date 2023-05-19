import styled from "@emotion/styled";

export const RegisterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: "white";
   
`;

export const RegisterForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
`;

export const FormContainer = styled.div`
    width: 800px;
    border-radius: 20px;
    border: 3px solid #94B4FF;
    justify-content: center;
    align-items: center;
`;

export const ModeContainer = styled.div`
    display: table;
    justify-content: center;
    align-items: center;
    padding: 0px;
    width: 100%;
    height: 86px;
    border-radius: 20px;
    
`;

export const StudentMode = styled.div`
    display:table-cell;
    vertical-align:middle;
    height: 100%;
    text-align: center;
    border-radius: 20px 0 0 0;
    border-bottom: 3px solid #94B4FF;
    font-weight: 700;
    font-size: 16px; 
    
    
`;

export const InstructorMode = styled.div`
    display:table-cell;
    vertical-align:middle;
    height: 100%;
    text-align: center;
    border-radius: 0 20px 0 0;
    border-bottom: 3px solid #94B4FF;
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
    border-radius: 10px;
    font-weight: 700;
    font-size: 16px;
    background-color: #F0F5FF;
    border: none;
`;

export const ToLoginParagraph = styled.p`
    text-align: center;  
    font-weight: 600;
    font-size: 16px;
    color: #6F7680;
    margin-top: 25px;

`;

export const ToLogin = styled.span`
    text-decoration: underline;
`;