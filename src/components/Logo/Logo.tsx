import { HTMLAttributes } from 'react';
import { LogoMediumDouble } from './LogosGalery/DoubleLine/LogoMedium';
import { LogoMediumInLine } from './LogosGalery/OneLine/LogoMedium';
import { LogoSmallInLine } from './LogosGalery/OneLine/LogoSmall';

interface LogoProps extends HTMLAttributes<HTMLDivElement> {
  margin?: string;
  size?: number;
  inLine?: boolean;
}

const largeSize = 1;
const mediumSize = 2;
const smallSize = 3;

//TODO terminar los SVGs que faltal

const Logo = ({
  margin,
  size = mediumSize,
  inLine = false,
  ...rest
}: LogoProps): JSX.Element => {
  return <div {...rest}>{getLogo({ margin, size, inLine })}</div>;
};

const getLogo = ({
  margin,
  size = mediumSize,
  inLine = false,
}: LogoProps): JSX.Element => {
  if (!inLine) {
    switch (size) {
      case largeSize:
        return <h1>Agregar este SVG</h1>;
      case mediumSize:
        return LogoMediumDouble({ margin });
      case smallSize:
        return <h1>Agregar este SVG</h1>;
      default:
        return <>No valid size yet</>;
    }
  }

  if (inLine) {
    switch (size) {
      case largeSize:
        return <h1>Agregar este SVG</h1>;
      case mediumSize:
        return LogoMediumInLine({ margin });
      case smallSize:
        return LogoSmallInLine({ margin });
      default:
        return <>No valid size yet</>;
    }
  }
  return <></>;
};

export default Logo;
