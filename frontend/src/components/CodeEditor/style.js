import styled from "@emotion/styled";
import styled from "@emotion/styled";

export const CodeEditorContainer = styled.div`
  /* Frame 57 */

  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 25px;
  gap: 10px;

  width: 50%;
  height: 100%;

  background: #ffffff;

  border-radius: 20px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`;

export const CodeEditorHeader = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  width: 100%;
  align-self: stretch;
`;

export const CodeEditorLang = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  padding-top: 2px;
  text-align: center;
`;

export const CodeEditorLangSelect = styled.a`
  display: flex;
  flex-direction: row;
  width: 50%;
  height: 100%;
  border-radius: 10px;
  border: 1px solid #e1e7f5;
`;

export const CodeEditorSelectedLang = styled.span`
  width: 80%;
`;

export const CodeEditorLangSelectButton = styled.button`
  background-color: #ffffff;
  border: none;
  height: 20px;
  width: 20px;
  margin-top: 9px;
  margin-right: 10px;
  border-radius: 2px;

  background-repeat: no-repeat;
  background-size: 100%;
  background-position: "center";
`;

export const CodeEditorListContainer = styled.div`
  display: none;
  position: absolute;
  z-index: 2;
  top: 80%;
  left: 1%;
`;
export const CodeEditorListContainerShow = styled.div`
  display: block;
  position: absolute;
  z-index: 2;
  top: 80%;
  left: 1%;
`;

export const CodeEditorLangPython = styled.input``;

export const CodeEditorButton_Exe = styled.button`
  box-sizing: border-box;

  /* Auto layout */

  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  gap: 10px;

  width: 10%;
  height: 39px;

  background: #dae5ff;
  border: 1px solid #000000;
  border-radius: 10px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
  font-weight: 700;
`;

export const CodeEditorButton_Submit = styled.button`
  box-sizing: border-box;

  /* Auto layout */
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  gap: 10px;

  width: 13%;
  height: 39px;

  background: #ffffff;
  border: 1px solid #000000;
  border-radius: 10px;

  /* Inside auto layout */

  flex: none;
  order: 2;
  flex-grow: 0;
  font-weight: 700;
`;

export const CodeEditorDescription = styled.div`
  /* 코드 입력 */
  width: 50%;
  height: 21px;
  margin-top: 10px;
  margin-right: 1%;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 21px;
  /* identical to box height */

  color: #000000;
  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;
