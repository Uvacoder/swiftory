import React from 'react';

export const AnsonLichtfussLogo = ({
  stroke = '#fff',
  fill = 'none',
  style = {},
}) => {
  return (
    <svg
      style={style}
      className="transition-opacity"
      clip-rule="evenodd"
      fill-rule="evenodd"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="1.5"
      viewBox="0 0 388 339"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m192.597 134.633 29.763 51.551-82.721 143.351h239.13l-36.902-63.917h-91.68l45.862-79.435-70.72-122.414m-32.732 70.864-112.526 194.902h-73.204l185.951-322.844 32.522 57.096"
        fill={fill}
        stroke={stroke}
        stroke-width="3"
      />
    </svg>
  );
};
