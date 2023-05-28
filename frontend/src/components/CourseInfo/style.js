import styled from "@emotion/styled";

export const CourseInfoContainer = styled.div`
  -webkit-box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 35px;
`;

export const CourseTitleLanguageContainer = styled.div`
    
    display: flex;
    flex-direction: row;
    justify-content: space-between
    padding: 0px;
    gap: 20px;
    border-radius: 10px;
`;

export const CourseTitleInput = styled.input`
  padding: 20px;
  border-radius: 10px;
  font-weight: 500;
  font-size: 16px;
  border: 1.5px solid black;
  width: 100%;
`;
export const CourseLanguageInput = styled.select`
  border: 1.5px solid black;
  border-radius: 10px;
  padding: 10px;
  font-size: 16px;
`;

export const CourseIntroductionTextarea = styled.textarea`
  -webkit-box-sizing: border-box;
  padding: 20px;
  width: 100%;
  height: 150px;
  border-radius: 10px;
  border: 1.5px solid black;
  border-radius: 10px;
  font-weight: 500;
  font-size: 16px;
  border: 1.5px solid black;
  font-family: "Arial";
`;
