import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Enhanced Loading Spinner
 */
const LoadingSpinner = ({ size = 'md', className = '' }) => {
  const sizes = {
    sm: 'h-6 w-6',
    md: 'h-12 w-12',
    lg: 'h-16 w-16',
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <motion.div
        className={`${sizes[size]} border-4 border-primary-200 dark:border-primary-900 border-t-primary-500 rounded-full`}
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
      />
    </div>
  );
};

/**
 * Full Page Loading
 */
export const FullPageLoading = ({ message = 'Loading...' }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="flex flex-col items-center justify-center min-h-[400px] space-y-4"
      >
        <LoadingSpinner size="lg" />
        <p className="text-slate-600 dark:text-slate-400 text-lg">{message}</p>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingSpinner;
