import styled from "@emotion/styled";

export const MainContainer = styled.div`
width: 900px;
height: 560px;
padding: 25px;
background: #FFFFFF;
box-shadow: 0px 8px 40px rgba(0, 0, 0, 0.09);
border-radius: 20px;

display:flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
gap:20px;
`;

export const LectureContainer = styled.div`
width:100%;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
gap:20px;
padding: 10px;

overflow: scroll;
&::-webkit-scrollbar {
    width: 6px;
    height: 8px;
    background: #ffffff;
}
&::-webkit-scrollbar-thumb {
    background: #EEEEEE;
    border-radius: 6px;
}

`;

export const TitleContainer = styled.div`
width: 90%;
text-align: center;
border-bottom: 3px solid #E1E7F5;
line-height: 0.1em;
margin: 15px 0;
`;

export const Title = styled.span`
font-style: normal;
font-weight: 700;
font-size: 20px;
background: #ffffff;
padding: 0 20px;
`;