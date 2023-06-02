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
  LogoutButton,
  NicknameSpan,
} from "./style";

import logoicon from "../../assets/images/logo.png";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
import { serverAxios } from "../../utils/commonAxios";

function Header(props) {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/main");
  };
  const handleLogoutClick = async () => {
    await serverAxios
      .get("user/auth", {
        withCredentials: true,
      })
      .then((response) => {
        localStorage.clear();
        alert("로그아웃 성공");
        navigate("/");
      })
      .catch(() => {
        //로그인 실패
      });
    localStorage.clear();
    navigate("/");
  };
  return (
    <StyledHeader>
      {/* {String(localStorage.getItem("loggedin"))} */}
      <LogoContainer onClick={handleLogoClick}>
        <LogoContents>Code with</LogoContents>
        <LogoImage src={logoicon}></LogoImage>
      </LogoContainer>
      <UserHeaderContainer>
        <UserHeaderUserName>
          <NicknameSpan>{localStorage.getItem("nickname")}</NicknameSpan>님
          환영!
        </UserHeaderUserName>
        <LogoutButton onClick={handleLogoutClick} type="button">
          로그아웃
        </LogoutButton>
      </UserHeaderContainer>
    </StyledHeader>
  );
}

export default Header;
