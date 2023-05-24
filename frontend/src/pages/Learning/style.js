import styled from "@emotion/styled";

export const PageContainer = styled.div`

width:100%;
height:100%;
display: flex;
flex-direction: row;
align-items: center;
padding: 15px;
gap:30px;
`; 


// left side
export const SideBar = styled.div`
width: 270px;
height: 580px;
display: flex;
flex-direction: column;
align-items: center;
gap:20px;


`;

export const IdxContainer = styled.div`
-webkit-box-sizing: border-box; 
width: 100%;
height:60%;
display: flex;
flex-direction: column;
align-items: center;
gap: 10px;
padding:15px;
border-radius: 10px;
background: #ffffff;
`;

export const IdxTitle = styled.div`
width:80%;
display:flex;
justify-content: center;
align-items: center;
gap:20px;
font-style: normal;
font-weight: 600;
font-size: 20px;
padding:5px;
border-bottom: 1px solid #E1E7F5;
`;

export const IdxItemsContainer = styled.div`
width:100%;
height:100%;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
gap: 10px;
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


export const IdxItem = styled.div`
width:90%;
font-size: 16px;
padding:5px;
`;

export const QaContainer = styled.div`
-webkit-box-sizing: border-box; 
width: 100%;
height:40%;
display: flex;
flex-direction: column;
align-items: center;
gap: 10px;
padding:15px;
border-radius: 10px;
background: #ffffff;
`;


// right side
export const ContentContainer = styled.div`
width: 900px;
height: 580px;
padding:20px;
border-radius: 10px;
background: #ffffff;
-webkit-box-sizing: border-box; 
`;


export const LecHeader = styled.div`
-webkit-box-sizing: border-box; 
width: 100%;
padding:3px 10px 10px 10px;
display: flex;
justify-content: space-between;
`;

export const LecTitle = styled.div`
font-style: normal;
font-weight: 600;
font-size: 20px;
`;

export const LecRate = styled.div`
font-size: 18px;
`;

export const LecContainer = styled.div`

`;

export const ChatContainer = styled.div`

`;

export const TmpCodeContainer = styled.div`

`;