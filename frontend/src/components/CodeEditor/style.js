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
    height: 1500px;

    background: #FFFFFF;
    border: 3px solid #000000;
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



export const CodeEditorButton_Exe = styled.button`

    box-sizing: border-box;

    /* Auto layout */

    justify-content: center;
    align-items: center;
    padding: 10px 20px;
    gap: 10px;

    width: 10%;
    height: 39px;
    
    background: #DAE5FF;
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

    background: #FFFFFF;
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
    width: 70%;
    height: 21px;
    margin-top: 10px;
    margin-right: 5%;
    font-family: 'Roboto';
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
