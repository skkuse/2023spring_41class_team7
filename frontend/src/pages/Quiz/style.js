import styled from "@emotion/styled";

export const QuizOuterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;


    width: auto;
    height: fill-available;
    

    /* Inside auto layout */
    background-color: #EEEEEE;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
`;

export const QuizTitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
    width: 100%;
    height: 124px;

    /* Inside auto layout */

    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
`;

export const QuizInnerContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 35px 35px;
    gap: 35px;

    width: 100%;
    height: 100%;
    border-radius: 20px;

    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 1;
`;


export const QuizEditorContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 35px 35px;
    gap: 35px;

    width: 40%;
    height: 100%;
    border-radius: 20px;

    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 1;
`;
export const QuizUtilContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 35px 35px;
    gap: 35px;

    width: 40%;
    height: 100%;
    border-radius: 20px;

    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 1;
`;