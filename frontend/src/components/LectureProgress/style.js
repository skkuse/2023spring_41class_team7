import styled from "@emotion/styled";

export const Container = styled.div`
width: 320px;
height: 300px;

display: flex;
flex-direction: column;
box-shadow: 0px 4px 23px 1px rgba(159, 155, 155, 0.25);
border-radius: 10px;
`;


export const ImageContainer = styled.div`
width:100%;
height:50%;
background: #F0F5FF;
`;

export const InfoContainer = styled.div`
-webkit-box-sizing: border-box; 
width:100%;
height:50%;
background: #ffffff;
padding:10px;
display:flex;
flex-direction: column;
`;

export const TitleContainer = styled.div`
width:100%;
height:50%;
font-weight: 700;
font-size: 20px;
`;

export const MoreInfoContainer = styled.div`
width:100%;
height:50%;
display:flex;
justify-content: space-between;
`;

export const ProgressContainer = styled.span`
font-weight: 600;
font-size: 36px;
`;

export const EtcContainer = styled.div`
display:flex;
flex-direction: column;
font-size: 15px;
`;