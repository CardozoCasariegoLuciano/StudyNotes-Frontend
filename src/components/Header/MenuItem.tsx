import Svg from "../SVGs/Svg";
import "./menuItem.scss";

type MenuItemPropType = {
  svg: string;
  text: string;
  action: () => void;
  svgColor?: string;
  separator?: boolean;
};

const MenuItem = (props: MenuItemPropType) => {
  return (
    <div
      className={"MenuItem " + (props.separator && "separator")}
      onClick={props.action}
    >
      <Svg svgName={props.svg} svgColor={props.svgColor} />
      <p> {props.text} </p>
    </div>
  );
};

export default MenuItem;
