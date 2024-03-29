export const EyeOpen = (color?: string) =>
  <svg
    width="20"
    height="18"
    viewBox="0 0 20 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.9998 12C14.9998 13.6569 13.6566 15 11.9998 15C10.3429 15 8.99976 13.6569 8.99976 12C8.99976 10.3431 10.3429 9 11.9998 9C13.6566 9 14.9998 10.3431 14.9998 12Z"
      stroke={color ? color : '#727171'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.45801 12C3.73228 7.94288 7.52257 5 12.0002 5C16.4778 5 20.2681 7.94291 21.5424 12C20.2681 16.0571 16.4778 19 12.0002 19C7.52256 19 3.73226 16.0571 2.45801 12Z"
      stroke={color ? color : '#727171'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
;

export const EyeClose = (color?: string) =>
  <svg
    width="20"
    height="18"
    viewBox="0 0 20 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.00024 3L6.5894 6.58916M21.0002 21L17.4114 17.4112M13.8751 18.8246C13.268 18.9398 12.6414 19 12.0007 19C7.52305 19 3.73275 16.0571 2.4585 12C2.80539 10.8955 3.33875 9.87361 4.02168 8.97118M9.87892 9.87868C10.4218 9.33579 11.1718 9 12.0002 9C13.6571 9 15.0002 10.3431 15.0002 12C15.0002 12.8284 14.6645 13.5784 14.1216 14.1213M9.87892 9.87868L14.1216 14.1213M9.87892 9.87868L6.5894 6.58916M14.1216 14.1213L6.5894 6.58916M14.1216 14.1213L17.4114 17.4112M6.5894 6.58916C8.14922 5.58354 10.0068 5 12.0007 5C16.4783 5 20.2686 7.94291 21.5429 12C20.836 14.2507 19.3548 16.1585 17.4114 17.4112"
      stroke={color ? color : '#727171'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
;
