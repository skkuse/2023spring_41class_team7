import { ErrorMessageBox, InputBox, InputContainer } from "./style";

function Input(props) {
    return(
        <InputContainer>
            <InputBox
                id={props.id}
                name={props.name}
                type={props.type}
                placeholder={props.placeholder}
                onBlur={props.onBlur}
                onChange={props.onChange}>  
            </InputBox>
        </InputContainer>
    );
}

export default Input;