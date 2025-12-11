import React from 'react';
import { motion } from 'framer-motion';
import Card from '../../../components/ui/Card';
import { formatDate, formatTime, formatTemperature, formatWindSpeed, formatPercentage } from '../../../utils/formatters';

/**
 * Current Weather Card Component
 */
const CurrentWeatherCard = ({ data, unit = 'metric', onToggleFavorite, isFavorite }) => {
  if (!data) return null;

  const { location, current } = data;

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {/* Main Weather Card */}
      <Card className="md:col-span-2 relative overflow-hidden">
        {/* Background gradient based on condition */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-transparent pointer-events-none" />
        
        <div className="relative">
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
                  {location.name}
                </h1>
                <button
                  onClick={onToggleFavorite}
                  className="p-1.5 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                  title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
                >
                  <svg
                    className={`w-6 h-6 ${isFavorite ? 'fill-yellow-400 text-yellow-400' : 'fill-none text-slate-400'}`}
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </button>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                {location.region}, {location.country}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">
                {formatDate(location.localtime)} • {formatTime(location.localtime)}
              </p>
            </div>
            <motion.img
              src={current.condition.icon}
              alt={current.condition.text}
              className="w-20 h-20"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>

          <div className="flex items-end gap-6 mb-6">
            <div className="flex items-baseline">
              <span className="text-6xl font-bold text-slate-900 dark:text-white">
                {Math.round(unit === 'metric' ? current.temp_c : current.temp_f)}
              </span>
              <span className="text-3xl text-slate-600 dark:text-slate-400 ml-2">
                {unit === 'metric' ? '°C' : '°F'}
              </span>
            </div>
            <div className="pb-2">
              <p className="text-lg font-medium text-slate-700 dark:text-slate-300 capitalize">
                {current.condition.text}
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Feels like {Math.round(unit === 'metric' ? current.feelslike_c : current.feelslike_f)}°
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-primary-500/10">
                <svg className="w-5 h-5 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400">Humidity</p>
                <p className="text-sm font-semibold text-slate-900 dark:text-white">{current.humidity}%</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-primary-500/10">
                <svg className="w-5 h-5 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400">Wind</p>
                <p className="text-sm font-semibold text-slate-900 dark:text-white">
                  {Math.round(unit === 'metric' ? current.wind_kph : current.wind_mph)} {unit === 'metric' ? 'km/h' : 'mph'}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-primary-500/10">
                <svg className="w-5 h-5 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400">Visibility</p>
                <p className="text-sm font-semibold text-slate-900 dark:text-white">
                  {Math.round(unit === 'metric' ? current.vis_km : current.vis_miles)} {unit === 'metric' ? 'km' : 'mi'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Details Card */}
      <Card>
        <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-400 mb-4">
          Details
        </h2>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-slate-600 dark:text-slate-400">Pressure</span>
            <span className="text-sm font-semibold text-slate-900 dark:text-white">
              {current.pressure_mb} hPa
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-slate-600 dark:text-slate-400">UV Index</span>
            <span className="text-sm font-semibold text-slate-900 dark:text-white">
              {current.uv}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-slate-600 dark:text-slate-400">Precipitation</span>
            <span className="text-sm font-semibold text-slate-900 dark:text-white">
              {current.precip_mm} mm
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-slate-600 dark:text-slate-400">Cloud Cover</span>
            <span className="text-sm font-semibold text-slate-900 dark:text-white">
              {current.cloud}%
            </span>
          </div>
          {current.air_quality && (
            <div className="pt-3 border-t border-slate-200 dark:border-slate-700">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-400 mb-2">
                Air Quality
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-600 dark:text-slate-400">PM2.5</span>
                <span className="text-sm font-semibold text-slate-900 dark:text-white">
                  {current.air_quality.pm2_5?.toFixed(1)}
                </span>
              </div>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};

export default CurrentWeatherCard;
