type SvgPropType = {
  svgName?: string;
};

const userSVG = (
  <svg
    width="20"
    height="20"
    viewBox="0 0 16 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.00002 7.6999C9.32551 7.6999 10.4 6.62539 10.4 5.2999C10.4 3.97442 9.32551 2.8999 8.00002 2.8999C6.67454 2.8999 5.60002 3.97442 5.60002 5.2999C5.60002 6.62539 6.67454 7.6999 8.00002 7.6999Z"
      fill="#727171"
    />
    <path
      d="M2.40002 14.8999C2.40002 11.8071 4.90723 9.2999 8.00002 9.2999C11.0928 9.2999 13.6 11.8071 13.6 14.8999H2.40002Z"
      fill="#727171"
    />
  </svg>
);

const lockSVG = (
  <svg
    width="20"
    height="20"
    viewBox="0 0 16 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.00002 7.7001V6.1001C4.00002 3.89096 5.79089 2.1001 8.00002 2.1001C10.2092 2.1001 12 3.89096 12 6.1001V7.7001C12.8837 7.7001 13.6 8.41644 13.6 9.3001V13.3001C13.6 14.1838 12.8837 14.9001 12 14.9001H4.00002C3.11637 14.9001 2.40002 14.1838 2.40002 13.3001V9.3001C2.40002 8.41644 3.11637 7.7001 4.00002 7.7001ZM10.4 6.1001V7.7001H5.60002V6.1001C5.60002 4.77461 6.67454 3.7001 8.00002 3.7001C9.32551 3.7001 10.4 4.77461 10.4 6.1001Z"
      fill="#727171"
    />
  </svg>
);

const Svg = ({ svgName }: SvgPropType) => {
  switch (svgName) {
    case "user":
      return userSVG;

    case "lock":
      return lockSVG;

    default:
      return <></>;
  }
};

export default Svg;
