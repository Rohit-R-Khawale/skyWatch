import React from 'react';
import { motion } from 'framer-motion';

/**
 * Toggle Switch component
 * @param {Object} props - Component props
 * @param {boolean} props.checked - Checked state
 * @param {Function} props.onChange - Change handler
 * @param {string} props.label - Label text
 */
const Switch = ({ checked, onChange, label = '', className = '' }) => {
  return (
    <label className={`flex items-center cursor-pointer ${className}`}>
      {label && <span className="mr-3 text-sm font-medium text-slate-700 dark:text-slate-300">{label}</span>}
      <div className="relative">
        <input
          type="checkbox"
          className="sr-only"
          checked={checked}
          onChange={onChange}
        />
        <motion.div
          className={`block w-12 h-6 rounded-full transition-colors ${
            checked ? 'bg-primary-500' : 'bg-slate-300 dark:bg-slate-600'
          }`}
        />
        <motion.div
          className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full shadow-md"
          animate={{
            x: checked ? 24 : 0,
          }}
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        />
      </div>
    </label>
  );
};

export default Switch;
