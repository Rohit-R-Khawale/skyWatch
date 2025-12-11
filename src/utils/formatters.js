import { format, parseISO } from 'date-fns';

/**
 * Format date to readable string
 * @param {string|Date} date - Date to format
 * @param {string} formatStr - Format string (date-fns format)
 * @returns {string} Formatted date
 */
export const formatDate = (date, formatStr = 'EEE, MMM d') => {
  try {
    const dateObj = typeof date === 'string' ? parseISO(date) : date;
    return format(dateObj, formatStr);
  } catch (error) {
    console.error('Error formatting date:', error);
    return '';
  }
};

/**
 * Format time to readable string
 * @param {string|Date} time - Time to format
 * @param {boolean} is24Hour - Use 24-hour format
 * @returns {string} Formatted time
 */
export const formatTime = (time, is24Hour = false) => {
  try {
    const timeObj = typeof time === 'string' ? parseISO(time) : time;
    return format(timeObj, is24Hour ? 'HH:mm' : 'h:mm a');
  } catch (error) {
    console.error('Error formatting time:', error);
    return '';
  }
};

/**
 * Format temperature with unit
 * @param {number} temp - Temperature value
 * @param {string} unit - 'metric' or 'imperial'
 * @returns {string} Formatted temperature
 */
export const formatTemperature = (temp, unit = 'metric') => {
  const rounded = Math.round(temp);
  const symbol = unit === 'metric' ? '°C' : '°F';
  return `${rounded}${symbol}`;
};

/**
 * Format wind speed with unit
 * @param {number} speed - Wind speed value
 * @param {string} unit - 'metric' or 'imperial'
 * @returns {string} Formatted wind speed
 */
export const formatWindSpeed = (speed, unit = 'metric') => {
  const unitLabel = unit === 'metric' ? 'km/h' : 'mph';
  return `${Math.round(speed)} ${unitLabel}`;
};

/**
 * Format percentage
 * @param {number} value - Value to format
 * @returns {string} Formatted percentage
 */
export const formatPercentage = (value) => {
  return `${Math.round(value)}%`;
};
