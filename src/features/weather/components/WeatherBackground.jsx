import React from 'react';
import { motion } from 'framer-motion';
import { getWeatherCondition, getTimeOfDay } from '../../../config/constants';

/**
 * Dynamic Weather Background Component
 */
const WeatherBackground = ({ weatherData }) => {
  if (!weatherData) return null;

  const { current, location } = weatherData;
  const condition = getWeatherCondition(current.condition.code);
  const hour = new Date(location.localtime).getHours();
  const timeOfDay = getTimeOfDay(hour);

  // Background gradients based on weather and time
  const backgrounds = {
    clear: {
      morning: 'from-amber-200 via-orange-200 to-yellow-100',
      afternoon: 'from-sky-400 via-blue-300 to-cyan-200',
      evening: 'from-orange-400 via-pink-400 to-purple-400',
      night: 'from-indigo-900 via-purple-900 to-slate-900',
    },
    cloudy: {
      morning: 'from-slate-300 via-slate-200 to-gray-200',
      afternoon: 'from-slate-400 via-gray-300 to-slate-200',
      evening: 'from-slate-500 via-gray-400 to-slate-300',
      night: 'from-slate-800 via-gray-800 to-slate-700',
    },
    rainy: {
      morning: 'from-slate-400 via-blue-300 to-slate-300',
      afternoon: 'from-slate-500 via-blue-400 to-gray-400',
      evening: 'from-slate-600 via-blue-500 to-gray-500',
      night: 'from-slate-900 via-blue-900 to-gray-900',
    },
    snowy: {
      morning: 'from-slate-200 via-blue-100 to-white',
      afternoon: 'from-slate-300 via-blue-200 to-slate-100',
      evening: 'from-slate-400 via-blue-300 to-slate-200',
      night: 'from-slate-700 via-blue-800 to-slate-800',
    },
    stormy: {
      morning: 'from-gray-600 via-slate-500 to-gray-500',
      afternoon: 'from-gray-700 via-slate-600 to-gray-600',
      evening: 'from-gray-800 via-slate-700 to-gray-700',
      night: 'from-gray-900 via-slate-900 to-black',
    },
    foggy: {
      morning: 'from-gray-300 via-slate-200 to-gray-200',
      afternoon: 'from-gray-400 via-slate-300 to-gray-300',
      evening: 'from-gray-500 via-slate-400 to-gray-400',
      night: 'from-gray-700 via-slate-600 to-gray-600',
    },
  };

  const gradient = backgrounds[condition]?.[timeOfDay] || backgrounds.clear.afternoon;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        key={`${condition}-${timeOfDay}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className={`absolute inset-0 bg-gradient-to-br ${gradient}`}
      />
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-white/30 dark:bg-black/50" />
      
      {/* Animated particles for rain/snow */}
      {condition === 'rainy' && (
        <div className="absolute inset-0 opacity-20">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-0.5 h-8 bg-blue-400"
              style={{
                left: `${Math.random() * 100}%`,
                top: `-${Math.random() * 20}%`,
              }}
              animate={{
                y: ['0vh', '120vh'],
              }}
              transition={{
                duration: Math.random() * 2 + 1,
                repeat: Infinity,
                ease: 'linear',
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      )}
      
      {condition === 'snowy' && (
        <div className="absolute inset-0 opacity-30">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `-${Math.random() * 20}%`,
              }}
              animate={{
                y: ['0vh', '120vh'],
                x: ['-10px', '10px', '-10px'],
              }}
              transition={{
                duration: Math.random() * 5 + 3,
                repeat: Infinity,
                ease: 'linear',
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default WeatherBackground;
