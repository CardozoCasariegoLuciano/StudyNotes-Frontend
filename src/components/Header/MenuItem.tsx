import Svg from '../SVGs/Svg';
import styles from './menuItem.module.scss';

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
      className={`${styles.MenuItem} ${
        props.separator ? styles.separator : ''
      }`}
      onClick={props.action}
    >
      <Svg svgName={props.svg} svgColor={props.svgColor} />
      <p> {props.text} </p>
    </div>
  );
};

export default MenuItem;
