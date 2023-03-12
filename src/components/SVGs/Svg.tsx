type SvgPropType = {
  svgName?: string;
  svgColor?: string;
};

const userSVG = (color?: string) => (
  <svg
    width="20"
    height="18"
    viewBox="0 0 16 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.00002 7.6999C9.32551 7.6999 10.4 6.62539 10.4 5.2999C10.4 3.97442 9.32551 2.8999 8.00002 2.8999C6.67454 2.8999 5.60002 3.97442 5.60002 5.2999C5.60002 6.62539 6.67454 7.6999 8.00002 7.6999Z"
      fill={color ? color : "#727171"}
    />
    <path
      d="M2.40002 14.8999C2.40002 11.8071 4.90723 9.2999 8.00002 9.2999C11.0928 9.2999 13.6 11.8071 13.6 14.8999H2.40002Z"
      fill={color ? color : "#727171"}
    />
  </svg>
);
const lockSVG = (color?: string) => (
  <svg
    width="20"
    height="18"
    viewBox="0 0 16 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.00002 7.7001V6.1001C4.00002 3.89096 5.79089 2.1001 8.00002 2.1001C10.2092 2.1001 12 3.89096 12 6.1001V7.7001C12.8837 7.7001 13.6 8.41644 13.6 9.3001V13.3001C13.6 14.1838 12.8837 14.9001 12 14.9001H4.00002C3.11637 14.9001 2.40002 14.1838 2.40002 13.3001V9.3001C2.40002 8.41644 3.11637 7.7001 4.00002 7.7001ZM10.4 6.1001V7.7001H5.60002V6.1001C5.60002 4.77461 6.67454 3.7001 8.00002 3.7001C9.32551 3.7001 10.4 4.77461 10.4 6.1001Z"
      fill={color ? color : "#727171"}
    />
  </svg>
);

const XSVG = (color?: string) => (
  <svg
    width="22"
    height="20"
    viewBox="0 0 16 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.43433 3.93451C3.74675 3.62209 4.25328 3.62209 4.5657 3.93451L8.00001 7.36882L11.4343 3.93451C11.7467 3.62209 12.2533 3.62209 12.5657 3.93451C12.8781 4.24693 12.8781 4.75346 12.5657 5.06588L9.13138 8.5002L12.5657 11.9345C12.8781 12.2469 12.8781 12.7535 12.5657 13.0659C12.2533 13.3783 11.7467 13.3783 11.4343 13.0659L8.00001 9.63157L4.5657 13.0659C4.25328 13.3783 3.74675 13.3783 3.43433 13.0659C3.12191 12.7535 3.12191 12.2469 3.43433 11.9345L6.86864 8.5002L3.43433 5.06588C3.12191 4.75346 3.12191 4.24693 3.43433 3.93451Z"
      fill={color ? color : "#727171"}
    />
  </svg>
);

const EyeOpen = (color?: string) => (
  <svg
    width="20"
    height="18"
    viewBox="0 0 20 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.9998 12C14.9998 13.6569 13.6566 15 11.9998 15C10.3429 15 8.99976 13.6569 8.99976 12C8.99976 10.3431 10.3429 9 11.9998 9C13.6566 9 14.9998 10.3431 14.9998 12Z"
      stroke={color ? color : "#727171"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.45801 12C3.73228 7.94288 7.52257 5 12.0002 5C16.4778 5 20.2681 7.94291 21.5424 12C20.2681 16.0571 16.4778 19 12.0002 19C7.52256 19 3.73226 16.0571 2.45801 12Z"
      stroke={color ? color : "#727171"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const EyeClose = (color?: string) => (
  <svg
    width="20"
    height="18"
    viewBox="0 0 20 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.00024 3L6.5894 6.58916M21.0002 21L17.4114 17.4112M13.8751 18.8246C13.268 18.9398 12.6414 19 12.0007 19C7.52305 19 3.73275 16.0571 2.4585 12C2.80539 10.8955 3.33875 9.87361 4.02168 8.97118M9.87892 9.87868C10.4218 9.33579 11.1718 9 12.0002 9C13.6571 9 15.0002 10.3431 15.0002 12C15.0002 12.8284 14.6645 13.5784 14.1216 14.1213M9.87892 9.87868L14.1216 14.1213M9.87892 9.87868L6.5894 6.58916M14.1216 14.1213L6.5894 6.58916M14.1216 14.1213L17.4114 17.4112M6.5894 6.58916C8.14922 5.58354 10.0068 5 12.0007 5C16.4783 5 20.2686 7.94291 21.5429 12C20.836 14.2507 19.3548 16.1585 17.4114 17.4112"
      stroke={color ? color : "#727171"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Email = (color: string) => (
  <svg
    width="20"
    height="18"
    viewBox="0 0 16 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.60264 5.20704L7.99993 8.40569L14.3973 5.207C14.349 4.36672 13.6523 3.7002 12.8 3.7002H3.19998C2.34759 3.7002 1.65088 4.36674 1.60264 5.20704Z"
      fill={color ? color : "#727171"}
    />
    <path
      d="M14.4 6.99452L7.99993 10.1945L1.59998 6.99456V11.7002C1.59998 12.5839 2.31632 13.3002 3.19998 13.3002H12.8C13.6836 13.3002 14.4 12.5839 14.4 11.7002V6.99452Z"
      fill={color ? color : "#727171"}
    />
  </svg>
);

const Svg = ({ svgName, svgColor }: SvgPropType) => {
  switch (svgName) {
    case "user":
      return userSVG(svgColor);

    case "lock":
      return lockSVG(svgColor);

    case "X":
      return XSVG(svgColor);

    case "EyeOpen":
      return EyeOpen(svgColor);

    case "EyeClose":
      return EyeClose(svgColor);

    case "email":
      return Email(svgColor);

    default:
      return <></>;
  }
};

export default Svg;
