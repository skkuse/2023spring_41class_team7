import { StyledButton } from "./style";

function Button(props) {
   return(
        <StyledButton
            onClick={props.onClick}
            style={{backgroundColor: props.backgroundColor}}>
            {props.content}
        </StyledButton>
   );
}

export default Button;