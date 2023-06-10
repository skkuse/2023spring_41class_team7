import styled from "@emotion/styled";

export const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;
`;

export const IdxContainer = styled.div`
  width: 300px;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 15px;
  border-radius: 10px;
  background: #ffffff;
  box-shadow: 0px 4px 30px 2px rgba(223, 228, 231, 0.7);
`;

export const IdxTitle = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  padding: 10px 0 15px 0;
  border-bottom: 2px solid #e1e7f5;
`;

export const IdxItemsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 6px;
    height: 8px;
    background: #ffffff;
  }
  &::-webkit-scrollbar-thumb {
    background: #eeeeee;
    border-radius: 6px;
  }
`;

export const IdxItem = styled.div`
  width: 90%;
  font-size: 18px;
  padding: 5px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

// right side
export const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-radius: 10px;
  box-sizing: border-box;
`;

export const LecHeader = styled.div`
  -webkit-box-sizing: border-box;
  width: 100%;
  height: 10%;
  padding: 25px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  background: #e1e7f5;
`;

export const LecTitle = styled.span`
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
`;

export const LecRate = styled.span`
  font-size: 20px;
`;

export const LecContainer = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  gap: 20px;
`;

export const ChatContainer = styled.div`
  width: 50%;
  height: auto;
  box-shadow: 0px 4px 30px 2px rgba(223, 228, 231, 0.7);
`;

export const TmpCodeContainer = styled.div`
  width: 50%;
  background: #ffffff;
  box-shadow: 0px 4px 30px 2px rgba(223, 228, 231, 0.7);
`;
