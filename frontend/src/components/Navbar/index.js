import styled from "@emotion/styled";
import {
  LetfContainer,
  ProfileContainer,
  NavContainer,
  PageBtn,
  NavTitle,
  NavElement,
} from "./style";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import StudentProfile from "../../assets/images/student.png";
import EducatorProfile from "../../assets/images/teacher.png";
import { serverAxios } from "../../utils/commonAxios";
import { useEffect, useState } from "react";

const NameStyle = styled.span`
  font-weight: 700;
  font-size: 24px;
`;

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
            localStorage.getItem("educator") == true
              ? EducatorProfile
              : StudentProfile
          }
          style={{ width: 190, height: 190 }}
        />
        {/* name */}
        <NameStyle>{localStorage.getItem("nickname")} 님!</NameStyle>

        {/* my page btn - student, teacher에 따라서 구분*/}
        {localStorage.getItem("educator") == true ? (
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
        {/* title */}
        <NavTitle>
          <p>강의 언어</p>
        </NavTitle>

        {/* links */}
        {/* {console.log(itemList)} */}

        {itemList != null ? (
          itemList.map((item) => {
            return (
              <NavElement key={item.id}>
                <FontAwesomeIcon icon={faCode} />
                <Link
                  to={"/"}
                  style={{ textDecoration: "none", color: "#48413D" }}
                >
                  {item.title}
                </Link>
              </NavElement>
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
