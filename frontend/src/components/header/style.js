import styled from "@emotion/styled";

export const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  padding-right: 40px;
  padding-top: 20px;
  padding-bottom: 20px;
  gap: 10px;
  width: fill-available;
  height: 50px;
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
  width: 237px;

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;

  background-color: #eeeeee; /* For test */
`;

export const LogoContents = styled.div`
  height: 47px;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 600;
  font-size: 30px;

  color: #000000;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const LogoImage = styled.img`
  width: 64px;
  height: 64px;
  background: url(free-icon-exclusive-4926953.png);
  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;
`;

export const SearchBar = styled.input`
  /* Frame 113 */
  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 10px 35px;
  gap: 10px;

  width: 1350px;
  height: 76px;

  background: #faf7f2;
  border: 3px solid #000000;
  border-radius: 20px;

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
  gap: 10px;

  width: 207px;
  height: 84px;

  /* Inside auto layout */

  flex: none;
  order: 2;
  flex-grow: 0;
`;

export const UserHeaderImage = styled.img`
  width: 64px;
  height: 64px;

  background: url(emoji_good 1.png);

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const UserHeaderUserName = styled.div`
  width: 150px;
  height: 23px;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;

  color: #000000;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
`;

export const UserHeaderLogout = styled.button`
  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  gap: 10px;

  width: 100px;
  height: 25px;
  font-size: 13px;
  background: #dae5ff;
  border: 1px solid #000000;
  border-radius: 10px;

  /* Inside auto layout */

  flex: none;
  order: 2;
  flex-grow: 0;
`;
