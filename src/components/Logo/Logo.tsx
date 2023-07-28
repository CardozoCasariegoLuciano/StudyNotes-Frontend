import { HTMLAttributes } from 'react';
import { LogoMediumDouble } from './LogosGalery/DoubleLine/LogoMedium';
import { LogoMediumInLine } from './LogosGalery/OneLine/LogoMedium';
import { LogoSmallInLine } from './LogosGalery/OneLine/LogoSmall';

interface LogoProps extends HTMLAttributes<HTMLDivElement> {
  margin?: string;
  size?: number;
  inLine?: boolean;
}

const Logo = ({
  margin,
  size = 2,
  inLine = false,
  ...rest
}: LogoProps): JSX.Element => {
  return <div {...rest}>{getLogo({ margin, size, inLine })}</div>;
};

const getLogo = ({
  margin,
  size = 2,
  inLine = false,
}: LogoProps): JSX.Element => {
  if (!inLine) {
    switch (size) {
    case 2:
      return LogoMediumDouble({ margin });
    default:
      return <></>;
    }
  }

  if (inLine) {
    switch (size) {
    case 2:
      return LogoMediumInLine({ margin });
    case 3:
      return LogoSmallInLine({ margin });
    default:
      return <></>;
    }
  }
  return <></>;
};

export default Logo;
