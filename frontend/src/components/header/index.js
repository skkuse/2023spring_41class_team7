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


import logoicon from "../../assets/pngs/logo.png"

function Header(){
    return (
       <StyledHeader>
            <LogoContainer>
                <LogoContents><a href="./" style={{textDecoration: `none`, color: `black`}}>Code With</a></LogoContents>
                <LogoImage src={logoicon}></LogoImage>
            </LogoContainer>
            <UserHeaderContainer>
                
                <UserHeaderUserName>student님 환영!</UserHeaderUserName>
                <UserHeaderLogout>로그아웃</UserHeaderLogout>
            </UserHeaderContainer>
            
            

        </StyledHeader>
    );
}

export default Header;