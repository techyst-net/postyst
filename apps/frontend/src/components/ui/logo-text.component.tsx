import React from 'react';

export const LogoTextComponent = () => {
  return (
    <svg
      width="101"
      height="33"
      viewBox="0 0 101 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Zeshan"
    >
      <g transform="translate(2 4) scale(0.39)">
        <rect width="64" height="64" rx="14" fill="#6366F1" />
        <path d="M18 18 H46 V26 L31 38 H46 V46 H18 V38 L33 26 H18 Z" fill="#F8FAFC" />
      </g>
      <text
        x="32"
        y="23"
        fontFamily="Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif"
        fontSize="16"
        fontWeight="600"
        letterSpacing="-0.3"
        fill="currentColor"
      >
        Zeshan
      </text>
    </svg>
  );
};
