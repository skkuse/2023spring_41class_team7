import styled from "@emotion/styled";
import React from "react";
import {
  LetfContainer,
  ProfileContainer,
  NavContainer,
  PageBtn,
  NavTitle,
  NavElement,
  EmailContainer,
  NameContainer,
} from "./style";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink } from "react-router-dom";
import StudentProfile from "../../assets/images/student.png";
import EducatorProfile from "../../assets/images/teacher.png";
import { serverAxios } from "../../utils/commonAxios";
import { useEffect, useState } from "react";

const NameStyle = styled.span`
  font-weight: 700;
  font-size: 24px;
`;

const style = {
  textDecoration: "none",
  color: "#5282E0",
  fontWeight: "700",
};

function getTitle(props) {
  return (
    <NavTitle key={props.idx}>
      <Link to={"/main"} style={{ textDecoration: "none", color: "#48413D" }}>
        <p>{props.category}</p>
      </Link>
    </NavTitle>
  );
}

function Navbar() {
  const [itemList, setItemList] = useState(null);

  useEffect(() => {
    getItem();
  }, []);

  const getItem = async () => {
    await serverAxios
      .get("/course/tag/", { withCredentials: true })
      .then((res) => {
        setItemList(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <LetfContainer>
      {/* profile */}
      <ProfileContainer>
        {/* img  - student, teacher에 따라서 구분 */}
        <img
          src={
            localStorage.getItem("educator") == "true"
              ? EducatorProfile
              : StudentProfile
          }
          style={{ width: 190, height: 190 }}
        />
        {/* name */}
        <NameContainer>
          <NameStyle>{localStorage.getItem("nickname")}</NameStyle>
        </NameContainer>
        <EmailContainer>{localStorage.getItem("email")}</EmailContainer>

        {/* my page btn - student, teacher에 따라서 구분*/}
        {localStorage.getItem("educator") == "true" ? (
          <Link to="/user/instructor">
            <PageBtn>마이페이지</PageBtn>
          </Link>
        ) : (
          <Link to="/user/student">
            <PageBtn>마이페이지</PageBtn>
          </Link>
        )}
      </ProfileContainer>

      {/* nav list */}
      <NavContainer>
        {itemList != null ? (
          itemList.map((item, idx) => {
            return (
              <React.Fragment key={idx}>
                {getTitle(item, idx)}
                {item.titles.map((i) => (
                  <NavElement key={i.id}>
                    <FontAwesomeIcon icon={faCode} />
                    <NavLink
                      to={"/main/" + i.id}
                      style={({ isActive }) =>
                        isActive
                          ? style
                          : { textDecoration: "none", color: "#48413D" }
                      }
                    >
                      {i.title}
                    </NavLink>
                  </NavElement>
                ))}
              </React.Fragment>
            );
          })
        ) : (
          <div></div>
        )}
      </NavContainer>
    </LetfContainer>
  );
}

export default Navbar;
