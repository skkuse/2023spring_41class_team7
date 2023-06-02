import { useEffect, useState } from "react";
import {
  ChapterContent,
  ChapterNumberContainer,
  ChapterTitle,
  ShowChapterContainer,
  ShowOuterContainer,
} from "./style";
import Button from "../Button";
import { serverAxios } from "../../utils/commonAxios";

function ShowChapter(props) {
  const [chapterTitle, setChapterTitle] = useState(props.chapterTitle);
  const [chapterContent, setChapterContent] = useState(props.chapterContent);
  const [showContent, setShowContent] = useState(false);
  const [courseid, setCourseid] = useState();
  const [chapterid, setChapterid] = useState();

  useEffect(() => {
    setCourseid(props.courseid);
    setChapterid(props.chapterid);
  }, []);

  const handleChapterTitleChange = (e) => {
    setChapterTitle(e.target.value);
  };

  const handleChapterContentChange = (e) => {
    setChapterContent(e.target.value);
  };

  const handleContentClick = () => {
    setShowContent(!showContent);
  };

  const handleModifyClick = async () => {
    // let targeturl = "/course/chapter/" + chapterid + "/";
    // const body = {
    //   id: chapterid,
    //   course: courseid,
    //   title: chapterTitle,
    //   content: chapterContent,
    // };
    // await serverAxios
    //   .put(targeturl, body, {
    //     withCredentials: true,
    //   })
    //   .then((response) => {
    //     alert("단원 수정 완료");
    //     props.setClickFlag(!props.clickFlag);
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   });
  };

  const handleCancelClick = async () => {
    let targeturl = "/course/chapter/" + chapterid + "/";
    const body = {
      id: chapterid,
    };
    await serverAxios
      .delete(targeturl, body, {
        withCredentials: true,
      })
      .then((response) => {
        alert("단원 삭제 완료");
        props.setClickFlag(!props.clickFlag);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <ShowOuterContainer>
      <ShowChapterContainer>
        <ChapterNumberContainer>{props.chapterNo}주차</ChapterNumberContainer>
        <ChapterTitle
          defaultValue={props.chapterTitle}
          onChange={handleChapterTitleChange}
        ></ChapterTitle>
        <Button
          content="보기"
          onClick={handleContentClick}
          backgroundColor="white"
          type="button"
        ></Button>
        <Button
          content="수정"
          onClick={handleModifyClick}
          backgroundColor="white"
          type="button"
        ></Button>
        <Button
          content="삭제"
          onClick={handleCancelClick}
          backgroundColor="white"
          type="button"
        ></Button>
      </ShowChapterContainer>
      {showContent && (
        <ChapterContent
          overflow="visible"
          defaultValue={props.chapterContent}
          onChange={handleChapterContentChange}
        ></ChapterContent>
      )}
    </ShowOuterContainer>
  );
}

export default ShowChapter;
