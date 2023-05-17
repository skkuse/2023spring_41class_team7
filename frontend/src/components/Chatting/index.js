import SmallList from "../test";
import { ChattingContainer, MessageContainer, MessageListContainer, SendContainer, TextArea } from "./style";
// import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
// import {
//   MainContainer,
//   ChatContainer,
//   MessageList,
//   Message,
//   MessageInput,
// } from "@chatscope/chat-ui-kit-react";

import { useState, button } from "react";




function Chatting(props) {

    
    const [list, setList] = useState([]);
    
    const handleButtonClick = (e) => {

        setList([...list, <SmallList context="hello" ></SmallList>]);
        
    }
    return(
         <ChattingContainer>
            <MessageContainer>
                <div>1</div>
                <div>1</div>
                <MessageListContainer>
                </MessageListContainer>
            </MessageContainer>
            <SendContainer>
                <TextArea></TextArea>
            </SendContainer>
            <button onClick={handleButtonClick}>대단원 추가</button>
            <div id="listDiv">
                {list}
            </div>
         </ChattingContainer>

        // <div style={{ position: "relative", height: "500px" }}>
        //     <MainContainer>
        //         <ChatContainer>
        //         <MessageList>
        //             <Message
        //             model={{
        //                 message: "Hello my friend",
        //                 sentTime: "just now",
        //                 sender: "Joe",
        //             }}
        //             />
        //         </MessageList>
        //         <MessageInput placeholder="Type message here" />
        //         </ChatContainer>
        //     </MainContainer>
        // </div>
        
        
        
    );
}

export default Chatting;