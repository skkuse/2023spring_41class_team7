import styled from "@emotion/styled";

export const LetfContainer = styled.div`
  -webkit-box-sizing: border-box;
  width: 275px;
  height: 100%;
  background: #ffffff;
  box-shadow: 0px 8px 40px rgba(0, 0, 0, 0.09);
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 25px;
  gap: 20px;
`;

export const ProfileContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 17px;
`;

export const NameContainer = styled.div`
  font-size: 24px;
  font-weight: 500;
  line-height: 24px;
`;

export const EmailContainer = styled.div`
  font-weight: 500;
`;

export const PageBtn = styled.button`
  font-size: 20px;
  font-weight: 700;
  padding: 15px 25px;
  letter-spacing: 0.06em;
  font-weight: 700;
  background-color: #e1e7f5;

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
  height: 55px;
  display: flex;
  justify-content: center;
  font-size: 22px;
  font-weight: 600;
  align-items: center;
  margin: 15px 0px;
  border-bottom: solid 2px #dfe4e7;
`;

export const NavElement = styled.div`
  width: 70%;
  padding: 10px;
  color: #48413d;
  font-size: 21px;
  font-weight: 400;
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  gap: 15px;
`;
