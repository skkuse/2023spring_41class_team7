import styled from "@emotion/styled";

export const Container = styled.div`
-webkit-box-sizing: border-box; 
width: 400px;
height: 600px;
display: flex;
flex-direction: column;
align-items: center;
background: #FFFFFF;
border-radius: 10px;
padding:20px 10px 10px 10px;
gap:10px;
`;

// msg part
export const TextingContainer = styled.div`
-webkit-box-sizing: border-box; 
display: flex;
width:100%;
height:90%;
flex-direction: column;
justify-content: flex-start;
align-items: center;
padding: 0 10px 10px 10px;
gap: 20px;
overflow:scroll;
overflow-x:hidden;
&::-webkit-scrollbar {
    width: 6px;
}
&::-webkit-scrollbar-thumb {
    
    background: #EEEEEE;
    border-radius: 6px;
}
`;

// user or ai에 따라서 style 변화주기
export const MsgContainer = styled.div`
width: 100%;
display: flex;
justify-content : flex-start;
align-items: flex-start;
gap: 15px;
`;

export const MsgIcon = styled.div`
width:45px;
height:45px;
border-radius: 50px;
background : #EEEEEE;
`;

export const StuMsgBox = styled.div`
width: 250px;
padding: 10px;
border-radius: 10px;
background : #EEEEEE;
`;

export const MsgBox = styled.div`
width: 250px;
padding: 10px;
border-radius: 10px;
background: #ffffff;
border : 2px solid #EEEEEE;
`;


//input part
export const InputsContainer = styled.div`
width:100%;
padding:5px;
`;

export const InputForm = styled.form`
width:100%;
display: flex;
justify-content: flex-start;
align-items: flex-start;
gap:5px;
`;

export const InputsArea = styled.textarea`
-webkit-box-sizing: border-box; 
width:85%;
padding:5px;
height: 50px;
resize:none;
font-size: 15px;
font-family: 'Roboto';
outline: none;
border: 2px solid #48413D;
`;

export const InputBtn = styled.button`
margin:0;
font-size: 25px;
border: none;
cursor: pointer;
padding: 10px;
color: #48413D;
background:#ffffff;
`;