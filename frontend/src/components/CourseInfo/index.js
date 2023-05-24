import { useState } from "react";
import { CourseInfoContainer, CourseIntroductionTextarea, CourseLanguageInput, CourseTitleInput, CourseTitleLanguageContainer } from "./style";

function CourseInfo(props) {

    const [title, setTitle] = useState("");
    const [language, setLanguage] = useState("");
    const [introduction, setIntroduction] = useState("");

    
   

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    }

    const handleLanguageChange = (e) => {
        setLanguage(e.target.value);
    }

    const handleIntroductionChange = (e) => {
        setIntroduction(e.target.value);
    }

    
    return(

        <CourseInfoContainer>
            <CourseTitleLanguageContainer>
                <CourseTitleInput
                    id="title"
                    name="title"
                    type="text"
                    placeholder="강의명을 작성해주세요!"
                    onChange={handleTitleChange}
                ></CourseTitleInput>
                <CourseLanguageInput
                    id="language"
                    name="language"
                    onChange={handleLanguageChange}>
                    <option>Python</option>
                    <option>Java</option>
                    <option>C</option>
                </CourseLanguageInput>
            </CourseTitleLanguageContainer>
            <CourseIntroductionTextarea
                id="introduction"
                name="introduction"
                placeholder="단원 컨텐츠를 작성해주세요!"
                onChange={handleIntroductionChange}
            ></CourseIntroductionTextarea>
        </CourseInfoContainer>
    );
}

export default CourseInfo;