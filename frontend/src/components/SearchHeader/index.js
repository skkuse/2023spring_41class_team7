import {
    StyledHeader,
    LogoContainer,
    LogoContents,
    LogoImage,
    LogoStyle,
    SearchBarContainer,
    SearchBar,
    SearchButton,
    UserHeaderContainer,
    UserHeaderImage,
    UserHeaderUserName,
    UserHeaderLogout,
} from "./style";

import logoicon from "../../assets/pngs/logo.png"
import searchicon from "../../assets/pngs/searchicon.png"


function SearchHeader(){
    return (
       <StyledHeader>
            <LogoContainer>
                <LogoContents><a href="./" style={{textDecoration: `none`, color: `black`}}>Code With</a></LogoContents>
                <LogoImage src={logoicon}></LogoImage>
            </LogoContainer>
            <SearchBarContainer>
                <SearchButton style={{backgroundImage: `url(${searchicon})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            }}></SearchButton>
                <SearchBar></SearchBar>
            </SearchBarContainer>
            <UserHeaderContainer>
                
                <UserHeaderUserName>student님 환영!</UserHeaderUserName>
                <UserHeaderLogout>로그아웃</UserHeaderLogout>
            </UserHeaderContainer>
            
            

        </StyledHeader>
    );
}

export default SearchHeader;