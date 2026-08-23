import React from 'react';

/**
 * FormField — Accessible form input with label, validation, and error display
 *
 * Usage:
 *   <FormField
 *     label="Full Name"
 *     name="fullName"
 *     value={form.fullName}
 *     onChange={handleChange}
 *     error={errors.fullName}
 *     required
 *   />
 */
export default function FormField({
  label,
  name,
  type = 'text',
  value,
  onChange,
  error,
  required = false,
  placeholder,
  options, // For select fields
  rows, // For textarea
  className = '',
  disabled = false,
}) {
  const id = `field-${name}`;
  const errorId = `${id}-error`;

  const inputClasses = `
    w-full px-4 py-3 rounded-xl bg-white/5 border
    text-white placeholder-gray-500
    transition-all duration-300
    focus:outline-none focus:ring-2 focus:ring-brand-orange/50 focus:border-brand-orange
    disabled:opacity-50 disabled:cursor-not-allowed
    ${error ? 'border-red-500/60' : 'border-white/10 hover:border-white/20'}
    ${className}
  `.trim();

  const renderInput = () => {
    if (options) {
      return (
        <select
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          className={`${inputClasses} appearance-none cursor-pointer`}
          required={required}
          disabled={disabled}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : undefined}
        >
          <option value="" className="bg-neutral-900">
            {placeholder || `Select ${label}`}
          </option>
          {options.map((opt) => (
            <option key={opt.value || opt} value={opt.value || opt} className="bg-neutral-900">
              {opt.label || opt}
            </option>
          ))}
        </select>
      );
    }

    if (rows || type === 'textarea') {
      return (
        <textarea
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows={rows || 4}
          className={`${inputClasses} resize-none`}
          required={required}
          disabled={disabled}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : undefined}
        />
      );
    }

    return (
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={inputClasses}
        required={required}
        disabled={disabled}
        aria-invalid={!!error}
        aria-describedby={error ? errorId : undefined}
      />
    );
  };

  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="block text-sm font-medium text-gray-300">
        {label}
        {required && <span className="text-brand-orange ml-1" aria-hidden="true">*</span>}
      </label>
      {renderInput()}
      {error && (
        <p id={errorId} className="text-red-400 text-xs mt-1" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
