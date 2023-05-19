import styled from "@emotion/styled";

export const ChapterModalContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 35px 60px;
    gap: 35px;
    width: 960px;
    background-color: white;
    border-radius: 30px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    padding: 20px 0;
    background-color: #DAE5FF;
    border-radius: 10px;
    font-weight: 600;
    font-size: 20px;
    width: 100%;
    text-indent: 20px;
`;

export const ChapterForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    gap: 35px;
    margin: 0;
    padding: 0;
`;

export const ChapterInput = styled.input`
    padding: 20px;
    border-radius: 10px;
    font-weight: 500;
    font-size: 16px;
    border: 1.5px solid black;
`;

export const ChapterTextArea = styled.textarea`
    padding: 20px;
    height: 320px;
    border-radius: 10px;
    font-weight: 500;
    font-size: 16px;
    border: 1.5px solid black;
    font-family: 'Arial';

`;


export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-end;
    height: 100px;
    border-radius: 10px;
    gap: 20px;
`;
