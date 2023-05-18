import styled from "@emotion/styled";

export const SubChapterModalContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 35px 60px;
    gap: 35px;
    width: 960px;
    height: 480px;
    background-color: white;
    border: 5px solid black;
    border-radius: 30px;
`;


export const TitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    padding: 20px 0;
    background-color: #DDEEDE;
    border-radius: 10px;
    font-weight: 700;
    font-size: 20px;
    width: 100%;
    text-indent: 20px;
    
`;

export const SubChapterForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    gap: 35px;
    margin: 0;
    padding: 0;
`;

export const SubChapterInput = styled.input`
    padding: 20px;
    border-radius: 10px;
    font-weight: 500;
    font-size: 16px;
    border: 3px solid black;
`;

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-end;
    height: 100%;
    border-radius: 10px;
    gap: 20px;
`;

export const CancelButton = styled.button`
    width: 80px;
    height: 50px;
    border-radius: 10px;
    font-weight: 700;
    font-size: 16px;
`;

export const SaveInput = styled.input`
    width: 80px;
    height: 50px;
    border-radius: 10px;
    font-weight: 700;
    font-size: 16px;
`;
