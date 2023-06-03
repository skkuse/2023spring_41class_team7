import { useState } from "react";
import {
  CourseInfoContainer,
  CourseIntroductionTextarea,
  CourseLanguageInput,
  CourseTitleInput,
  CourseTitleLanguageContainer,
} from "./style";

function CourseInfo(props) {
  const handleTitleChange = (e) => {
    props.setCourseTitle(e.target.value);
  };

  const handleLanguageChange = (e) => {
    props.setCourseLanguageTag(parseInt(e.target.value));
  };

  const handleIntroductionChange = (e) => {
    props.setCourseIntroduction(e.target.value);
  };

  return (
    <CourseInfoContainer>
      <CourseTitleLanguageContainer>
        <CourseTitleInput
          id="title"
          name="title"
          type="text"
          placeholder="강의명을 작성해주세요!"
          onChange={handleTitleChange}
          defaultValue={props.courseTitle}
          disabled={props.isCourseInitialized}
        ></CourseTitleInput>
        <CourseLanguageInput
          id="language"
          name="language"
          onChange={handleLanguageChange}
          defaultValue={String(props.courseLanguageTag)}
        >
          <option value="0" disabled>
            언어 선택
          </option>
          <option value="1">Python</option>
          <option value="2">Java</option>
          <option value="3">C</option>
          <option value="4">C++</option>
        </CourseLanguageInput>
      </CourseTitleLanguageContainer>
      <CourseIntroductionTextarea
        id="introduction"
        name="introduction"
        placeholder="강의에 대한 간단한 소개를 작성해주세요!"
        onChange={handleIntroductionChange}
        defaultValue={props.courseIntroduction}
        disabled={props.isCourseInitialized}
      ></CourseIntroductionTextarea>
    </CourseInfoContainer>
  );
}

export default CourseInfo;
