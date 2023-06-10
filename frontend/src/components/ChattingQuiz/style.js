import styled from "@emotion/styled";

export const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 73%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  border-radius: 10px;
  gap: 10px;
`;

// msg part
export const TextingContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
  gap: 20px;
  overflow-y: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: #eeeeee;
    border-radius: 6px;
  }
`;

// user or ai에 따라서 style 변화주기
export const MsgContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: ${(props) => props.flexValue || "flex-end"};
  align-items: flex-start;
  font-size: 18px;
  gap: 20px;
`;

export const StuMsgBox = styled.div`
  width: 70%;
  padding: 10px;
  border-radius: 10px;
  background: #eeeeee;
`;

export const MsgBox = styled.div`
  width: 70%;
  padding: 10px;
  border-radius: 10px;
  background: #ffffff;
  border: 2px solid #eeeeee;
`;

//input part
export const InputsContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 10px 10px 10px 20px;
  background: #e1e7f5;
  border-radius: 0px 0px 10px 10px;
`;

export const InputForm = styled.form`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 5px;
`;

export const InputsArea = styled.textarea`
  -webkit-box-sizing: border-box;
  flex-grow: 1;
  padding: 5px;
  height: 50%;
  resize: none;
  font-size: 18px;
  font-family: "Roboto";
  outline: none;
  border-radius: 10px;
`;

export const InputBtn = styled.button`
  margin: 0;
  font-size: 25px;
  border: none;
  cursor: pointer;
  padding: 10px;
  color: #48413d;
  background: #e1e7f5;
`;
