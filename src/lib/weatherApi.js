import { API_BASE_URL, API_KEY } from '../config/constants';

/**
 * Fetch current weather data for a location
 * @param {string} location - City name, coordinates, or other location identifier
 * @returns {Promise<Object>} Current weather data
 */
export const getCurrentWeather = async (location) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/current.json?key=${API_KEY}&q=${encodeURIComponent(location)}&aqi=yes`
    );

    if (!response.ok) {
      if (response.status === 400) {
        throw new Error('Location not found. Please check the city name.');
      }
      throw new Error('Failed to fetch weather data. Please try again.');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching current weather:', error);
    throw error;
  }
};

/**
 * Fetch forecast data (includes hourly and daily forecasts)
 * @param {string} location - City name, coordinates, or other location identifier
 * @param {number} days - Number of forecast days (1-14)
 * @returns {Promise<Object>} Forecast data
 */
export const getForecast = async (location, days = 7) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/forecast.json?key=${API_KEY}&q=${encodeURIComponent(location)}&days=${days}&aqi=yes&alerts=yes`
    );

    if (!response.ok) {
      if (response.status === 400) {
        throw new Error('Location not found. Please check the city name.');
      }
      throw new Error('Failed to fetch forecast data. Please try again.');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching forecast:', error);
    throw error;
  }
};

/**
 * Search for cities (autocomplete)
 * @param {string} query - Search query
 * @returns {Promise<Array>} Array of matching locations
 */
export const searchCities = async (query) => {
  if (!query || query.trim().length < 2) {
    return [];
  }

  try {
    const response = await fetch(
      `${API_BASE_URL}/search.json?key=${API_KEY}&q=${encodeURIComponent(query)}`
    );

    if (!response.ok) {
      throw new Error('Failed to search cities.');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error searching cities:', error);
    return [];
  }
};

/**
 * Get weather by coordinates
 * @param {number} lat - Latitude
 * @param {number} lon - Longitude
 * @returns {Promise<Object>} Weather data
 */
export const getWeatherByCoordinates = async (lat, lon) => {
  const location = `${lat},${lon}`;
  return getForecast(location);
};
