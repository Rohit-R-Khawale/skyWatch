import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Card from '../../../components/ui/Card';
import { formatTime } from '../../../utils/formatters';

/**
 * Hourly Forecast List Component
 */
const HourlyForecastList = ({ hours, unit = 'metric' }) => {
  const scrollRef = useRef(null);

  if (!hours || hours.length === 0) return null;

  // Get next 24 hours
  const hourlyData = hours.slice(0, 24);

  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
        Hourly Forecast
      </h2>
      <div
        ref={scrollRef}
        className="flex gap-3 overflow-x-auto pb-4 custom-scrollbar snap-x snap-mandatory"
      >
        {hourlyData.map((hour, index) => (
          <motion.div
            key={hour.time_epoch}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
            className="snap-start"
          >
            <Card className="min-w-[120px] text-center hover:scale-105 transition-transform cursor-pointer" hover>
              <p className="text-xs font-medium text-slate-600 dark:text-slate-400 mb-2">
                {formatTime(hour.time, false)}
              </p>
              <img
                src={hour.condition.icon}
                alt={hour.condition.text}
                className="w-12 h-12 mx-auto mb-2"
              />
              <p className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                {Math.round(unit === 'metric' ? hour.temp_c : hour.temp_f)}°
              </p>
              <div className="flex items-center justify-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                <svg className="w-3 h-3 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                <span>{hour.chance_of_rain}%</span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 truncate">
                {hour.condition.text}
              </p>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HourlyForecastList;
