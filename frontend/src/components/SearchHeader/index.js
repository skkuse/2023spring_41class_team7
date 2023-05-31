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

import logoicon from "../../assets/images/logo.png"
import searchicon from "../../assets/images/searchicon.png"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import Button from "../Button";


function SearchHeader(props){
    return (
       <StyledHeader>
            <LogoContainer>
                <LogoContents><a href="./" style={{textDecoration: `none`, color: `black`}}>Code With</a></LogoContents>
                <LogoImage src={logoicon}></LogoImage>
            </LogoContainer>
            
            <SearchBarContainer>
                <SearchBar></SearchBar>
                <SearchButton onClick={props.onClick} style={{ backgroundImage: `url(${searchicon})`, 
                backgroundRepeat: 'no-repeat', backgroundSize: `cover`}} >
                </SearchButton>
            </SearchBarContainer>
            
            <UserHeaderContainer>
                <UserHeaderUserName>student님 환영!</UserHeaderUserName>
                <UserHeaderLogout onClick={props.onClick}>로그아웃</UserHeaderLogout>
            </UserHeaderContainer>
            
            

        </StyledHeader>
    );
}

export default SearchHeader;