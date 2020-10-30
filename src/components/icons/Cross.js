import * as React from 'react';

function SvgCross(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.778 10.364L18.142 4l1.414 1.414-6.364 6.364 6.364 6.364-1.414 1.414-6.364-6.364-6.364 6.364L4 18.142l6.364-6.364L4 5.414 5.414 4l6.364 6.364z"
        fill="#fff"
      />
    </svg>
  );
}

export default SvgCross;
