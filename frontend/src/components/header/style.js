import styled from "@emotion/styled";

export const StyledHeader = styled.div`
  -webkit-box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  // padding-left: 20px;
  // padding-right: 40px;
 padding: 0 35px; 
  gap: 10px
  width: 100%;
  height: 72px;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
  background-color: #eeeeee; /* For test */
`;

export const LogoContainer = styled.div`
  /* Frame 53 */
  /* Auto layout */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 10px;
  color: black;
  //width: 10%;
  height: 50%;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
  background-color: #eeeeee; /* For test */
`;

export const LogoContents = styled.div`
  height: 48px;

  font-family: "Arial";
  font-style: normal;
  font-weight: 600;
  font-size: 30px;

  color: #000000;

  /* Inside auto layout */
  height: 100%;

  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const LogoImage = styled.img`
  height: 48px;
  background: url(free-icon-exclusive-4926953.png);
  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;
`;
export const SearchButton = styled.img`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 10px;

  width: 45.51px;
  height: 45.51px;

  background: #f8d57e;
  border-radius: 100px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const UserHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 25px;

  height: 50%;

  /* Inside auto layout */

  flex: none;
  order: 2;
  flex-grow: 0;
`;

export const NicknameSpan = styled.span`
  font-weight: 600;
`;

export const UserHeaderUserName = styled.div`
  height: 100%;

  font-family: "Arial";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  padding-top: 3%;
  text-align: right;
  color: #000000;

  /* Inside auto layout */
`;

export const UserHeaderLogout = styled.button`
  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 5px 5px;

  height: 60%;
  font-size: 13px;
  background: #dae5ff;
  border: 1px solid #000000;

  border-radius: 10px;

  /* Inside auto layout */

  flex: none;
  order: 2;
  flex-grow: 0;
`;

export const LogoutButton = styled.button`
  border-radius: 10px;
  padding: 10px;
  font-weight: 600;
  font-size: 16px;
  background-color: #dae5ff;
  -webkit-box-sizing: border-box;
`;
