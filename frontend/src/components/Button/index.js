import { StyledButton } from "./style";

function Button(props) {
  return (
    <StyledButton
      onClick={props.onClick}
      style={{ backgroundColor: props.backgroundColor }}
      disabled={props.disabled}
      type={props.type}
    >
      {props.content}
    </StyledButton>
  );
}

export default Button;
