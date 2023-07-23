import { ChangeEvent } from "react";
import { CheckBox } from "../../StyledComponents/CheckBox/CheckBox";
import styles from "./SimpleCheckBox.module.scss";

type SimpleCheckBoxPropType = {
  label?: string;
  labelLeft?: boolean;
  defaultCheck?: boolean;
  onChange?: (ev: ChangeEvent<HTMLInputElement>) => void;
  name: string;
};

const showLabel = (text: string) => {
  return <label htmlFor="SimpleCheckBox_id">{text}</label>;
};

const SimpleCheckBox = (props: SimpleCheckBoxPropType) => {
  return (
    <div className={ styles.SimpleCheckBox }>
      {!props.labelLeft && showLabel(props.label!)}
      <CheckBox
        id="SimpleCheckBox_id"
        name={props.name}
        checked={props.defaultCheck}
        onChange={props.onChange}
      />
      {props.labelLeft && showLabel(props.label!)}
    </div>
  );
};

export default SimpleCheckBox;
