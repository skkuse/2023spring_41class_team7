import styled from "@emotion/styled";

export const Container = styled.div`
  width: 320px;
  height: 300px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 23px 1px rgba(159, 155, 155, 0.25);
  border-radius: 10px;
`;

export const ImageContainer = styled.img`
  width: 100%;
  height: 50%;
  background: #f0f5ff;
`;

export const InfoContainer = styled.div`
  -webkit-box-sizing: border-box;
  width: 100%;
  height: 50%;
  background: #ffffff;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

export const TitleContainer = styled.div`
  width: 100%;
  height: 50%;
  font-weight: 700;
  font-size: 20px;
`;

export const MoreInfoContainer = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: flex-end;
`;

export const EtcContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  font-size: 15px;
`;
