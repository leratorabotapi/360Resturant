import * as React from 'react';

function SvgPlus(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 11h9v2h-9v9h-2v-9H2v-2h9V2h2v9z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgPlus;
