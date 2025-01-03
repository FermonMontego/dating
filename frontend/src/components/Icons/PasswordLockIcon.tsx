import React, { FC, SVGProps } from 'react';

type Props = {} & SVGProps<SVGSVGElement>;

const PasswordLockIcon: FC<Props> = ({ ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24px"
      height="24px"
      {...props}
    >
      <g id="Rounded">
        <path d="M20,20V10c0-1.1-0.9-2-2-2H6c-1.1,0-2,0.9-2,2v10c0,1.1,0.9,2,2,2h12C19.1,22,20,21.1,20,20z M13,15c0,0.55-0.45,1-1,1s-1-0.45-1-1s0.45-1,1-1S13,14.45,13,15z M17,15c0,0.55-0.45,1-1,1c-0.55,0-1-0.45-1-1s0.45-1,1-1C16.55,14,17,14.45,17,15z M9,15c0,0.55-0.45,1-1,1s-1-0.45-1-1s0.45-1,1-1S9,14.45,9,15z" />
        <path
          fill="none"
          stroke="#000"
          strokeWidth={2}
          strokeMiterlimit={10}
          d="M17,9c0-0.4,0-1.6,0-2c0-2.8-2.2-5-5-5S7,4.2,7,7c0,0.4,0,1.6,0,2"
        />
      </g>
    </svg>
  );
};

export default PasswordLockIcon;
