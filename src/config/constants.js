// API Configuration
export const API_BASE_URL = 'http://api.weatherapi.com/v1';
export const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

// Default Settings
export const DEFAULT_CITY = 'Mumbai';
export const DEFAULT_UNIT = 'metric'; // 'metric' for Celsius, 'imperial' for Fahrenheit
export const FORECAST_DAYS = 7;

// Weather Condition Mappings
export const WEATHER_CONDITIONS = {
  CLEAR: 'clear',
  CLOUDY: 'cloudy',
  RAINY: 'rainy',
  SNOWY: 'snowy',
  STORMY: 'stormy',
  FOGGY: 'foggy',
};

// Map WeatherAPI condition codes to our simplified conditions
export const getWeatherCondition = (code) => {
  if (code === 1000) return WEATHER_CONDITIONS.CLEAR;
  if ([1003, 1006, 1009].includes(code)) return WEATHER_CONDITIONS.CLOUDY;
  if ([1063, 1180, 1183, 1186, 1189, 1192, 1195, 1240, 1243, 1246].includes(code)) return WEATHER_CONDITIONS.RAINY;
  if ([1066, 1210, 1213, 1216, 1219, 1222, 1225, 1255, 1258].includes(code)) return WEATHER_CONDITIONS.SNOWY;
  if ([1087, 1273, 1276, 1279, 1282].includes(code)) return WEATHER_CONDITIONS.STORMY;
  if ([1030, 1135, 1147].includes(code)) return WEATHER_CONDITIONS.FOGGY;
  return WEATHER_CONDITIONS.CLEAR;
};

// Time of Day Thresholds (hours)
export const TIME_OF_DAY = {
  NIGHT: { start: 0, end: 6 },
  MORNING: { start: 6, end: 12 },
  AFTERNOON: { start: 12, end: 18 },
  EVENING: { start: 18, end: 24 },
};

export const getTimeOfDay = (hour) => {
  if (hour >= TIME_OF_DAY.NIGHT.start && hour < TIME_OF_DAY.MORNING.start) return 'night';
  if (hour >= TIME_OF_DAY.MORNING.start && hour < TIME_OF_DAY.AFTERNOON.start) return 'morning';
  if (hour >= TIME_OF_DAY.AFTERNOON.start && hour < TIME_OF_DAY.EVENING.start) return 'afternoon';
  return 'evening';
};

// Local Storage Keys
export const STORAGE_KEYS = {
  FAVORITES: 'weather_favorites',
  THEME: 'weather_theme',
  SETTINGS: 'weather_settings',
  RECENT_SEARCHES: 'weather_recent_searches',
};

// Debounce Delay
export const SEARCH_DEBOUNCE_DELAY = 500; // milliseconds
