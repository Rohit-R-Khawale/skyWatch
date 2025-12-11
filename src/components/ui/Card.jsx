import React from 'react';
import { motion } from 'framer-motion';

/**
 * Glassmorphism Card component
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Card content
 * @param {string} props.className - Additional CSS classes
 * @param {boolean} props.hover - Enable hover effect
 */
const Card = ({ children, className = '', hover = false, ...props }) => {
  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    hover: hover ? { y: -4, transition: { duration: 0.2 } } : {},
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      className={`glass rounded-2xl p-6 ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;
