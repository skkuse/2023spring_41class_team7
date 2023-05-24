import styled from "@emotion/styled";
import {
    LetfContainer,
    ProfileContainer,
    NavContainer,
    TmpProfile,
    PageBtn,
    NavTitle,
    NavElement
} from "./style";
import {faCode} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';

const NameStyle = styled.p`
font-weight: 700;
font-size: 24px;
`
function Navbar() {
    return ( 
        <LetfContainer>
            {/* profile */}
            <ProfileContainer>
                {/* img */}
                <TmpProfile/>
                {/* name */}
                <NameStyle>user 님!</NameStyle>

                {/* my page btn */}
                <PageBtn>마이페이지</PageBtn>
                {/* if teacher, lecture management btn */}
            </ProfileContainer>

            {/* nav list */}
            <NavContainer>
                {/* title */}
                <NavTitle>
                    <p>강의 언어</p>
                </NavTitle>
                
                {/* links */}
                
                <NavElement><FontAwesomeIcon icon={faCode} /><Link to={"/"} style={{ textDecoration: "none", color: "#48413D"}}>파이썬</Link></NavElement>
                <NavElement><FontAwesomeIcon icon={faCode} /><Link to={"/"} style={{ textDecoration: "none",color: "#48413D" }}>자바</Link></NavElement>
                <NavElement><FontAwesomeIcon icon={faCode} /><Link to={"/"} style={{ textDecoration: "none",color: "#48413D" }}>C언어</Link></NavElement>
                
            </NavContainer>
        </LetfContainer>
     );
}

export default Navbar;