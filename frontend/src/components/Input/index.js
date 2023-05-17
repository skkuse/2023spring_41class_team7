import {InputBox} from "./style";

function Input(props) {
    return(
            <InputBox
                id={props.id}
                name={props.name}
                type={props.type}
                placeholder={props.placeholder}
                onChange={props.onChange}>  
            </InputBox>
       
    );
}

export default Input;