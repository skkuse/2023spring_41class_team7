import {
  StyledHeader,
  LogoContainer,
  LogoContents,
  LogoImage,
  SearchBar,
  SearchButton,
  UserHeaderContainer,
  UserHeaderImage,
  UserHeaderUserName,
  UserHeaderLogout,
} from "./style";

import logoicon from "../../assets/images/logo.png";
import Button from "../Button";
import { useNavigate } from "react-router-dom";

function Header(props) {
  const navigate = useNavigate();
  const handleLogoutClick = () => {
    props.setLoggedin(false);
    navigate("/");
  };
  return (
    <StyledHeader>
      <LogoContainer>
        <LogoContents>
          <a href="./" style={{ textDecoration: `none`, color: `black` }}>
            Code With
          </a>
        </LogoContents>
        <LogoImage src={logoicon}></LogoImage>
      </LogoContainer>
      <UserHeaderContainer>
        <UserHeaderUserName>student님 환영!</UserHeaderUserName>
        <UserHeaderLogout onClick={handleLogoutClick}>
          로그아웃
        </UserHeaderLogout>
      </UserHeaderContainer>
    </StyledHeader>
  );
}

export default Header;
