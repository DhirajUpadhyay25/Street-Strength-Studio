import React from 'react';

/**
 * Container — Max-width wrapper with standard padding
 */
export default function Container({ children, className = '', as: Tag = 'div', id }) {
  return (
    <Tag id={id} className={`max-w-container mx-auto px-5 sm:px-6 lg:px-10 ${className}`}>
      {children}
    </Tag>
  );
}
