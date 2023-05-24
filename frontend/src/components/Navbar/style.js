import styled from "@emotion/styled";

export const LetfContainer = styled.div`
    width: 180px;
    height: 560px;
    background: #FFFFFF;
    box-shadow: 0px 8px 40px rgba(0, 0, 0, 0.09);
    border-radius: 20px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 25px;
`;

export const ProfileContainer = styled.div`
display: flex;
width: 100%;
flex-direction: column;
justify-content: center;
align-items: center;
`;

export const TmpProfile = styled.div`
width: 120px;
height: 120px;
border-radius: 100px;
background-color: #DFE4E7;
`;

export const PageBtn = styled.button`
font-size: 15px;
padding: 8px 45px;
letter-spacing: 0.06em;
font-weight: 700;
background-color: #E1E7F5;
border: none;
color : #282726;
border-radius: 10px;
cursor: pointer;
`;


export const NavContainer = styled.div`
display: flex;
width: 100%;
height:50%;
flex-direction: column;
justfy-content: center;
align-items: center;
`;

export const NavTitle = styled.div`
width: 100%;
display: flex;
justify-content: center;
font-size: 18px;
align-items: center;
margin-bottom: 10px;
border-bottom: solid 1px #DFE4E7;
`;

export const NavElement = styled.div`
width: 60%;
padding: 10px;
color: #48413D;
display: flex;
align-items: center;
margin-bottom: 10px;
gap: 10px;
`;