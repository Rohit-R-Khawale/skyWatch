import React from 'react';
import { motion } from 'framer-motion';
import Card from '../../../components/ui/Card';
import { formatDate } from '../../../utils/formatters';

/**
 * Daily Forecast List Component
 */
const DailyForecastList = ({ days, unit = 'metric' }) => {
  if (!days || days.length === 0) return null;

  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
        {days.length}-Day Forecast
      </h2>
      <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">
        {days.map((day, index) => (
          <motion.div
            key={day.date_epoch}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="text-center" hover>
              <p className="text-sm font-medium text-slate-900 dark:text-white mb-2">
                {formatDate(day.date, 'EEE')}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
                {formatDate(day.date, 'MMM d')}
              </p>
              <img
                src={day.day.condition.icon}
                alt={day.day.condition.text}
                className="w-14 h-14 mx-auto mb-3"
              />
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-lg font-bold text-slate-900 dark:text-white">
                  {Math.round(unit === 'metric' ? day.day.maxtemp_c : day.day.maxtemp_f)}°
                </span>
                <span className="text-sm text-slate-500 dark:text-slate-400">
                  {Math.round(unit === 'metric' ? day.day.mintemp_c : day.day.mintemp_f)}°
                </span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 capitalize truncate mb-2">
                {day.day.condition.text}
              </p>
              <div className="flex items-center justify-center gap-1 text-xs text-primary-600 dark:text-primary-400">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                <span>{day.day.daily_chance_of_rain}%</span>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default DailyForecastList;
