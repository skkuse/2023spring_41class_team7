import styled from "@emotion/styled";

export const LoginOuterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 50px;
    height: 100vh;
    background-color: #FAF7F2;

`;

export const LoginInnerLeftContainer = styled.div`
flex: 1;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 50px;
background: radial-gradient(50% 50% at 50% 55%, #FFD886 0%, rgba(255, 255, 255, 0) 100%);
height: 100vh;
`;

export const TitleContainer = styled.div`
    
    font-style: normal;
    font-weight: 700;
    font-size: 80px;
    text-align: center;
`;

export const LogoImage = styled.img`
    width: 256px;
    height: 256px;
`;

export const LoginInnerRightContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
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
    border: 3px solid black;
    
`;

export const ModeContainer = styled.div`
    
    display: table;
    justify-content: center;
    align-items: center;
    padding: 0px;
    width: 100%;
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
    background-color: white;
`;

export const ToRegisterParagraph = styled.p`
    text-align: center;  
    font-weight: 600;
    font-size: 14px;
    color: #6F7680;


`;

export const ToRegister = styled.span`
    text-decoration: underline;
`;