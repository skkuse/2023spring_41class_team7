import styled from "@emotion/styled";

export const StyledHeader = styled.div`
  -webkit-box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  padding-right: 40px;

  gap: 10px
  width: 100%;
  height: 7%;
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
  
  height : 50%;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
  background-color: #eeeeee; /* For test */
`;

export const LogoContents = styled.div`
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
  height: 125%;
  
  background: url(free-icon-exclusive-4926953.png);
  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;
`;

export const SearchBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 35px;
  gap: 10px;
  height: 50%;
  width: 70%;
  background: #eeeeee;
  /* Inside auto layout */
  -webkit-box-sizing: border-box;
  flex: none;
  order: 1;
  flex-grow: 0;
`;

export const SearchBar = styled.input`
  /* Frame 113 */
  box-sizing: border-box;

  /* Auto layout */
  width: 50%;
  height: 40px;
  font-size: 22px;
  padding: 10px 35px;
  gap: 10px;
  background: #faf7f2;

  border: 2px solid black;
  border-radius: 20px;
  
  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  font-family: FontAwesome;
`;

export const SearchButton = styled.button`
  justify-content: center;
  align-items: center;

  width: 40px;
  height: 40px;
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

  
  height: 50%;

  /* Inside auto layout */

  flex: none;
  order: 2;
  flex-grow: 0;
`;


export const UserHeaderUserName = styled.div`
  
  height: 100%;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  padding-top: 3%;
  text-align: right;
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
