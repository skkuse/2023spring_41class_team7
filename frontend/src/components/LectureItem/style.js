import styled from "@emotion/styled";

export const ItemContainer = styled.div`
  box-sizing: border-box;
  flex-shrink: 0;
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  padding: 20px;
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0px 4px 36px 2px rgba(223, 228, 231, 0.52);
`;

// 임시용 썸네일
export const TmpThumnail = styled.div`
  width: 200px;
  height: 100%;
  background: #d9d9d9;
`;

export const ContentsContainer = styled.div`
  flex-grow: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  backgroud-color: #ddeede;
  box-sizing: border-box;
`;

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 20px;
`;

export const Title = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
`;

export const Desc = styled.div`
  font-size: 15px;
`;

export const TagContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

export const Tag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 15px;
  background: ${(props) => props.background || "#E1E7F5"};
  border-radius: 10px;
  font-weight: 500;
  font-size: 12px;
`;
