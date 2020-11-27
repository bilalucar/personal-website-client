import * as React from "react";

function SvgHome(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 25 25"
      fill="currentColor"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        className="home_svg__cls-1"
        d="M20.75 25H4.25A1.25 1.25 0 013 23.75V10.68L.85 12.82l-.71-.71 12-12a.5.5 0 01.71 0l12 12-.71.71L22 10.71v13A1.25 1.25 0 0120.75 25zM16 24h4.75a.25.25 0 00.25-.25V9.7l-8.49-8.5L4 9.69v14.06a.25.25 0 00.25.25H9v-5.75A1.25 1.25 0 0110.25 17h4.5A1.25 1.25 0 0116 18.25zm-6 0h5v-5.75a.25.25 0 00-.25-.25h-4.5a.25.25 0 00-.25.25z"
      />
    </svg>
  );
}

export default SvgHome;
