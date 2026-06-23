import React from "react";

export function SectionHeader({ title, subtitle, description, centered = true }) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {title && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-primaryDeep">
          {title}
        </p>
      )}
      <div className={`mb-5 flex items-center ${centered ? "justify-center" : "justify-start"} gap-4`}>
        <span className="h-px w-16 bg-gold" />
        <span className="h-2 w-2 rotate-45 border border-gold" />
        <span className="h-px w-16 bg-gold" />
      </div>
      <h2 className="text-4xl font-semibold tracking-tight text-navyGray sm:text-5xl">
        {subtitle}
      </h2>
      {description && (
        <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-mutedText">
          {description}
        </p>
      )}
    </div>
  );
}
