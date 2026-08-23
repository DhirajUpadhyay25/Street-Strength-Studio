import React from 'react';

/**
 * SectionHeading — Consistent section header with tag, title, and subtitle
 *
 * Usage:
 *   <SectionHeading
 *     tag="Our Programs"
 *     title="Training Programs"
 *     titleAccent="Programs"
 *     subtitle="Structured training for every level."
 *   />
 */
export default function SectionHeading({
  tag,
  title,
  titleAccent,
  subtitle,
  align = 'center',
  className = '',
}) {
  // If titleAccent is provided, highlight it within the title
  const renderTitle = () => {
    if (!titleAccent || !title.includes(titleAccent)) {
      return title;
    }
    const parts = title.split(titleAccent);
    return (
      <>
        {parts[0]}
        <span className="text-gradient-orange">{titleAccent}</span>
        {parts[1]}
      </>
    );
  };

  const alignClass = {
    center: 'text-center mx-auto',
    left: 'text-left',
    right: 'text-right ml-auto',
  }[align];

  return (
    <div className={`max-w-3xl mb-16 ${alignClass} ${className}`}>
      {tag && (
        <span className="inline-block px-4 py-1.5 rounded-full border border-brand-orange/30 bg-brand-orange/5 text-brand-orange text-xs font-semibold uppercase tracking-[4px] mb-5">
          {tag}
        </span>
      )}
      <h2 className="text-display-md font-extrabold text-white leading-tight">
        {renderTitle()}
      </h2>
      {subtitle && (
        <p className="mt-5 text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
