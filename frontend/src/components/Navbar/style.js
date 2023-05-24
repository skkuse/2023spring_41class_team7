import styled from "@emotion/styled";

export const LetfContainer = styled.div`
  -webkit-box-sizing: border-box;
  width: 275px;
  height: 100%;
  background: #ffffff;
  box-shadow: 0px 8px 40px rgba(0, 0, 0, 0.09);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 25px;
  gap: 40px;
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
  background-color: #dfe4e7;
`;

export const PageBtn = styled.button`
  font-size: 15px;
  padding: 8px 45px;
  letter-spacing: 0.06em;
  font-weight: 700;
  background-color: #e1e7f5;
  border: none;
  color: #282726;
  border-radius: 10px;
  cursor: pointer;
`;

export const NavContainer = styled.div`
  display: flex;
  width: 100%;
  height: 50%;
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
  border-bottom: solid 1px #dfe4e7;
`;

export const NavElement = styled.div`
  width: 60%;
  padding: 10px;
  color: #48413d;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  gap: 10px;
`;
