"use client";

export const Logo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="60"
      height="60"
      viewBox="0 0 64 64"
      fill="none"
      className="mt-[8px] min-w-[60px] min-h-[60px]"
      role="img"
      aria-label="Zeshan"
    >
      <defs>
        <linearGradient id="zeshan-logo-gradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#818CF8" />
          <stop offset="1" stopColor="#4F46E5" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="14" fill="url(#zeshan-logo-gradient)" />
      <path d="M18 18 H46 V26 L31 38 H46 V46 H18 V38 L33 26 H18 Z" fill="#F8FAFC" />
    </svg>
  );
};
