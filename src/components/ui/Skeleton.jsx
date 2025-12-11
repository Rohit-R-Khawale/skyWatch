import React from 'react';
import { motion } from 'framer-motion';

/**
 * Skeleton loader component
 * @param {Object} props - Component props
 * @param {string} props.variant - Skeleton variant: 'text', 'circle', 'rectangle'
 * @param {string} props.width - Width
 * @param {string} props.height - Height
 * @param {string} props.className - Additional CSS classes
 */
const Skeleton = ({ variant = 'text', width, height, className = '' }) => {
  const baseStyles = 'bg-slate-200 dark:bg-slate-700 shimmer rounded';
  
  const variants = {
    text: 'h-4 w-full',
    circle: 'rounded-full',
    rectangle: 'rounded-lg',
  };

  const style = {
    width: width || (variant === 'circle' ? '40px' : undefined),
    height: height || (variant === 'circle' ? '40px' : undefined),
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      style={style}
    />
  );
};

/**
 * Weather Card Skeleton
 */
export const WeatherCardSkeleton = () => {
  return (
    <div className="glass rounded-2xl p-6 space-y-4">
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <Skeleton width="150px" height="24px" />
          <Skeleton width="100px" height="16px" />
        </div>
        <Skeleton variant="circle" width="64px" height="64px" />
      </div>
      <div className="space-y-2">
        <Skeleton width="120px" height="48px" />
        <Skeleton width="180px" height="16px" />
        <Skeleton width="160px" height="16px" />
      </div>
    </div>
  );
};

/**
 * Forecast Card Skeleton
 */
export const ForecastCardSkeleton = () => {
  return (
    <div className="glass rounded-2xl p-4 space-y-3 flex flex-col items-center">
      <Skeleton width="80px" height="16px" />
      <Skeleton variant="circle" width="48px" height="48px" />
      <Skeleton width="60px" height="24px" />
      <Skeleton width="100px" height="14px" />
    </div>
  );
};

export default Skeleton;
