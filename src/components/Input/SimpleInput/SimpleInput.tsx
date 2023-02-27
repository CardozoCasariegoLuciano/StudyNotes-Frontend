import { ChangeEvent } from "react";
import { InputContainer } from "../../StyledComponents/Containers/InputContainer";
import { Input } from "../../StyledComponents/Input/Input";
import Svg from "../../SVGs/Svg";
import "./simpleInput.scss";

type SimpleInputPropType = {
  placeHolder?: string;
  name: string;
  type: string;
  styles?: { [key: string]: string };
  value: string | number;
  onChange: (ev: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onBlur: (ev: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  icon?: string;
  errorMessage?: { [key: string]: string };
};

const SimpleInput = (props: SimpleInputPropType) => {
  const labelName = props.name.charAt(0).toUpperCase() + props.name.slice(1);
  const inputID = `id_${props.name}`;
  const errorMessagge =
    props.errorMessage &&
    props.errorMessage[Object.keys(props.errorMessage!)[0]];
  const inputPlaceholder = props.placeHolder
    ? props.placeHolder
    : `Write your ${props.name} here`;

  // TODO: cambiar al color de error cuando este mal el form <27-02-23, yo> //

  return (
    <div className="SimpleInput" style={props.styles}>
      <label htmlFor={inputID}>{labelName}</label>
      <InputContainer>
        <Svg svgName={props.icon} />
        <Input
          type={props.type}
          placeholder={inputPlaceholder}
          name={props.name}
          autoComplete="off"
          id={inputID}
          value={props.value}
          onChange={props.onChange}
          onBlur={props.onBlur}
        />
      </InputContainer>
      {errorMessagge && <p className="SimpleInput__error">{errorMessagge}</p>}
    </div>
  );
};

export default SimpleInput;
