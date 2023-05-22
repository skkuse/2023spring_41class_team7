import styled from "@emotion/styled";

export const StyledHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px 70px;
    gap: 10px;
    width: fill-available;
    height: 124px;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
    background-color: white; /* For test */
`;

export const LogoContainer = styled.div`
    /* Frame 53 */
    /* Auto layout */
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px;
    gap: 10px;
    color: black;
    width: 237px;
    height: 84px;
    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
    
    background-color: white; /* For test */
`;
 
export const LogoContents = styled.div`
    width: 143px;
    height: 47px;
    
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 26px;
    line-height: 38px;

    color: #000000;


    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
`;

export const LogoImage = styled.img`
    width: 64px;
    height: 64px;
    /* Inside auto layout */
    flex: none;
    order: 1;
    flex-grow: 0;
`;




export const SearchBarContainer = styled.div`
    /* Frame 113 */
    /* Auto layout */
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding: 10px 35px;
    gap: 10px;

    width: 40%;
    height: 76px;

    background: white;


    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 0;
`;

export const SearchBar = styled.input`
/* Frame 113 */
    box-sizing: border-box;

    /* Auto layout */

    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding: 10px 35px;
    gap: 10px;

    width: 90%;
    height: 76px;
    font-size: 35px;
    background: #FAF7F2;
    border: 3px solid #000000;
    border-radius: 20px;

    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 0;
`;

export const SearchButton = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    width: 60px;
    height: 60px;    
    border-radius: 100px;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
`;

export const UserHeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px;
    gap: 10px;

    width: 207px;
    height: 84px;


    /* Inside auto layout */

    flex: none;
    order: 2;
    flex-grow: 0;
`;

export const UserHeaderImage = styled.img`
    width: 64px;
    height: 64px;

    background: url(emoji_good 1.png);

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
`;

export const UserHeaderUserName = styled.div`
    width: 150px;
    height: 23px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;

    color: #000000;


    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 0;
`;

export const UserHeaderLogout = styled.button`
    width: auto;
    height: 20px;
    font-size: auto;
    /* Inside auto layout */
    border: solid 2px;
    background-color: yellow;
    flex: none;

    order: 2;
    flex-grow: 0;
`;