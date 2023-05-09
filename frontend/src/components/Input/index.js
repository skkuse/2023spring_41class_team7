import { InputBox } from "./style";

function Input(props) {
    return(
        <InputBox
            name={props.name}
            type={props.type}
            placeholder={props.placeholder}
            onBlur={props.onBlur}
            onChange={props.onChange}
        />
    );
}

export default Input;