import React from 'react';
import { motion } from 'framer-motion';
import SearchBar from '../../features/weather/components/SearchBar';
import Switch from '../ui/Switch';
import Button from '../ui/Button';

/**
 * Navbar Component
 */
const Navbar = ({
  onSearchCity,
  onToggleTheme,
  isDark,
  onToggleUnit,
  unit,
  onUseLocation,
  locationLoading,
}) => {
  return (
    <nav className="sticky top-0 z-50 glass-strong border-b border-white/20 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo/Brand */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 flex-shrink-0"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-primary-400 to-primary-600 shadow-lg">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-slate-900 dark:text-white">
                SkyWatch
              </h1>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Real-time weather
              </p>
            </div>
          </motion.div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:block flex-1 max-w-md">
            <SearchBar onSelectCity={onSearchCity} />
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Use Location Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={onUseLocation}
              loading={locationLoading}
              className="hidden sm:inline-flex"
              title="Use my location"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </Button>

            {/* Unit Toggle */}
            <div className="hidden sm:flex items-center gap-1 glass rounded-full px-2 py-1">
              <button
                onClick={() => unit !== 'metric' && onToggleUnit()}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                  unit === 'metric'
                    ? 'bg-primary-500 text-white shadow-md'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-white/10'
                }`}
              >
                °C
              </button>
              <button
                onClick={() => unit !== 'imperial' && onToggleUnit()}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                  unit === 'imperial'
                    ? 'bg-primary-500 text-white shadow-md'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-white/10'
                }`}
              >
                °F
              </button>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={onToggleTheme}
              className="p-2 rounded-xl glass hover:bg-white/10 dark:hover:bg-slate-800/50 transition-colors"
              title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? (
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-slate-700" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden pb-4">
          <SearchBar onSelectCity={onSearchCity} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
