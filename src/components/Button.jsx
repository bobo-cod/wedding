import React from "react";

export function PrimaryButton({ children, className = "", ...props }) {
  return (
    <button
      className={`group relative overflow-hidden rounded-full bg-primaryDark px-7 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-glow transition duration-300 hover:-translate-y-0.5 hover:bg-primaryDeep focus:outline-none focus:ring-4 focus:ring-primary/40 disabled:cursor-not-allowed disabled:opacity-60 ${className}`}
      {...props}
    >
      <span className="absolute inset-y-0 left-0 w-1/2 -translate-x-full bg-white/25 blur-xl transition group-hover:animate-shimmer" />
      <span className="relative">{children}</span>
    </button>
  );
}

export function SecondaryButton({ children, className = "", ...props }) {
  return (
    <button
      className={`rounded-full border border-primaryDark/45 bg-white/70 px-7 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-navyGray transition duration-300 hover:-translate-y-0.5 hover:border-primaryDeep hover:bg-primarySoft focus:outline-none focus:ring-4 focus:ring-primary/30 disabled:cursor-not-allowed disabled:opacity-60 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
