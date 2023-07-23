import { ChangeEvent, useState } from "react";
import { InputContainer } from "../../StyledComponents/Containers/InputContainer";
import { Input } from "../../StyledComponents/Input/Input";
import Svg from "../../SVGs/Svg";
import styles from "./simpleInput.module.scss";

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
  onCleanInput: (name: string) => void;
  label?: string;
};

const SimpleInput = (props: SimpleInputPropType) => {
  const [svgEye, setSvgEye] = useState("EyeOpen");
  const [inputType, setInputType] = useState(props.type);

  const labelName = props.label
    ? props.label
    : props.name.charAt(0).toUpperCase() + props.name.slice(1);
  const inputID = `id_${props.name}`;
  const errorMessagge =
    props.errorMessage &&
    props.errorMessage[Object.keys(props.errorMessage!)[0]];
  const inputPlaceholder = props.placeHolder
    ? props.placeHolder
    : `Write your ${props.name} here`;

  const toggleInputType = () => {
    if (inputType === "text") {
      setInputType("password");
      setSvgEye("EyeOpen");
    } else {
      setInputType("text");
      setSvgEye("EyeClose");
    }
  };

  return (
    <div className={styles.SimpleInput} style={props.styles}>
      <label className={styles.SimpleInput__label} htmlFor={inputID}>
        {labelName}
      </label>
      <InputContainer error={!!errorMessagge} spaceBetween={true}>
        <div className={styles.SimpleInput__input}>
          <Svg svgName={props.icon} />
          <Input
            type={inputType}
            placeholder={inputPlaceholder}
            name={props.name}
            autoComplete="off"
            id={inputID}
            value={props.value}
            onChange={props.onChange}
            onBlur={props.onBlur}
          />
        </div>
        <div className={styles.SimpleInput__actions}>
          {props.value && props.type === "password" && (
            <div
              onClick={() => toggleInputType()}
              className={styles.SimpleInput__SVG}
            >
              <Svg svgName={svgEye} />
            </div>
          )}
          {props.value && (
            <div
              onClick={() => props.onCleanInput(props.name)}
              className={styles.SimpleInput__SVG}
            >
              <Svg svgName="X" />
            </div>
          )}
        </div>
      </InputContainer>
      {errorMessagge && (
        <p className={styles.SimpleInput__error}>{errorMessagge}</p>
      )}
    </div>
  );
};

export default SimpleInput;
