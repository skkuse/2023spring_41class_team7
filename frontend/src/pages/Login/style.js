import styled from "@emotion/styled";

export const LoginOuterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100vh;
    background-color: white;

`;



export const LoginInnerContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    gap: 100px;
`;


export const TitleContainer = styled.div`   
    display: flex;
    flex-direction: row;
    gap: 35px;
    font-style: normal;
    font-weight: 700;
    font-size: 80px;
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
    padding: 0px;
    border-radius: 20px;
    border: 3px solid #94B4FF;
    
`;

export const ModeContainer = styled.div`
    
    display: table;
    justify-content: center;
    align-items: center;
    padding: 0px;
    width: 521px;
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
    padding: 50px;
    gap: 50px;
`;

export const SubmitInput = styled.input`
    width: 316px;
    height: 63px;
    border: 3px solid #F4B860;
    border-radius: 10px;
    font-weight: 700;
    font-size: 16px;
    background-color: #F0F5FF;
    border: none;
`;

export const ToRegisterParagraph = styled.p`
    text-align: center;  
    font-weight: 600;
    font-size: 16px;
    color: #6F7680;


`;

export const ToRegister = styled.span`
    text-decoration: underline;
`;