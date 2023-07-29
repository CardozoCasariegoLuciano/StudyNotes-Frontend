import { AcountSVG } from './SVGgalery/acountSVG';
import { CogSVG } from './SVGgalery/cogSvg';
import { Email } from './SVGgalery/emailSvg';
import { EyeOpen, EyeClose } from './SVGgalery/eyeSvg';
import { lockSVG } from './SVGgalery/lockSvg';
import { LogoutSVG } from './SVGgalery/logoutSvg';
import { userSVG } from './SVGgalery/userSvg';
import { XSVG, XSVGfill } from './SVGgalery/xSvg';

type SvgPropType = {
  svgName?: string;
  svgColor?: string;
};

const Svg = ({ svgName, svgColor }: SvgPropType) => {
  switch (svgName) {
    case 'user':
      return userSVG(svgColor);

    case 'lock':
      return lockSVG(svgColor);

    case 'X':
      return XSVG(svgColor);

    case 'Xfill':
      return XSVGfill(svgColor!);

    case 'Cog':
      return CogSVG(svgColor!);

    case 'Acount':
      return AcountSVG(svgColor!);

    case 'Logout':
      return LogoutSVG(svgColor!);

    case 'EyeOpen':
      return EyeOpen(svgColor);

    case 'EyeClose':
      return EyeClose(svgColor);

    case 'email':
      return Email(svgColor!);

    default:
      return <></>;
  }
};

export default Svg;
