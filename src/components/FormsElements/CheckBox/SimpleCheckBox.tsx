import { CheckBox } from "../../StyledComponents/CheckBox/CheckBox";
import "./SimpleCheckBox.scss"

type SimpleCheckBoxPropType = {
  label?: string;
  labelLeft?: boolean;
  defaultCheck?: boolean;
};

const showLabel = (text: string) => {
 return <label htmlFor="SimpleCheckBox_id">{text}</label>
}

const SimpleCheckBox = (props: SimpleCheckBoxPropType) => {
  return (
    <div className="SimpleCheckBox">
      {!props.labelLeft && showLabel(props.label!)}
      <CheckBox id="SimpleCheckBox_id" checked={props.defaultCheck}/>
      {props.labelLeft && showLabel(props.label!)}
    </div>
  );
};

export default SimpleCheckBox;
