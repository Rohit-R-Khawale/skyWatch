import React from 'react';

/**
 * Input component with icon support
 * @param {Object} props - Component props
 * @param {string} props.value - Input value
 * @param {Function} props.onChange - Change handler
 * @param {string} props.placeholder - Placeholder text
 * @param {React.ReactNode} props.icon - Icon element
 * @param {string} props.className - Additional CSS classes
 */
const Input = React.forwardRef(({
  value,
  onChange,
  placeholder = '',
  icon = null,
  className = '',
  ...props
}, ref) => {
  return (
    <div className={`relative ${className}`}>
      {icon && (
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-slate-400">
          {icon}
        </div>
      )}
      <input
        ref={ref}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full rounded-xl glass py-2.5 ${icon ? 'pl-10' : 'pl-4'} pr-4 text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-primary-500/50 transition-all`}
        {...props}
      />
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
