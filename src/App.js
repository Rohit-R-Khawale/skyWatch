import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import CurrentWeatherCard from './features/weather/components/CurrentWeatherCard';
import HourlyForecastList from './features/weather/components/HourlyForecastList';
import DailyForecastList from './features/weather/components/DailyForecastList';
import WeatherBackground from './features/weather/components/WeatherBackground';
import FavoritesSidebar from './features/weather/components/FavoritesSidebar';
import ErrorAlert from './components/ui/ErrorAlert';
import { FullPageLoading } from './components/ui/LoadingSpinner';
import { WeatherCardSkeleton, ForecastCardSkeleton } from './components/ui/Skeleton';
import { useTheme } from './hooks/useTheme';
import { useFavorites } from './hooks/useFavorites';
import { useGeolocation } from './hooks/useGeolocation';
import { getForecast, getWeatherByCoordinates } from './lib/weatherApi';
import { DEFAULT_CITY } from './config/constants';

function App() {
  const [city, setCity] = useState(DEFAULT_CITY);
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [unit, setUnit] = useState('metric');
  
  const { toggleTheme, isDark } = useTheme();
  const { favorites, toggleFavorite, isFavorite, removeFavorite } = useFavorites();
  const { coordinates, loading: locationLoading, error: locationError, getLocation } = useGeolocation();

  // Fetch weather data
  const fetchWeather = async (location) => {
    try {
      setLoading(true);
      setError(null);
      const data = await getForecast(location, 7);
      setWeatherData(data);
    } catch (err) {
      setError(err.message || 'Failed to fetch weather data');
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  // Initial load
  useEffect(() => {
    fetchWeather(city);
  }, []);

  // Handle city search
  const handleSearchCity = (cityName) => {
    setCity(cityName);
    fetchWeather(cityName);
  };

  // Handle unit toggle
  const handleToggleUnit = () => {
    setUnit((prev) => (prev === 'metric' ? 'imperial' : 'metric'));
  };

  // Handle geolocation
  const handleUseLocation = () => {
    getLocation();
  };

  // When coordinates are available, fetch weather
  useEffect(() => {
    if (coordinates) {
      const fetchByCoords = async () => {
        try {
          setLoading(true);
          setError(null);
          const data = await getWeatherByCoordinates(coordinates.lat, coordinates.lon);
          setWeatherData(data);
          setCity(data.location.name);
        } catch (err) {
          setError(err.message || 'Failed to fetch weather for your location');
        } finally {
          setLoading(false);
        }
      };
      fetchByCoords();
    }
  }, [coordinates]);

  // Handle location error
  useEffect(() => {
    if (locationError) {
      setError(locationError);
    }
  }, [locationError]);

  // Handle favorite toggle
  const handleToggleFavorite = () => {
    if (weatherData) {
      toggleFavorite({
        name: weatherData.location.name,
        region: weatherData.location.region,
        country: weatherData.location.country,
      });
    }
  };

  // Handle select favorite
  const handleSelectFavorite = (favoriteName) => {
    setCity(favoriteName);
    fetchWeather(favoriteName);
  };

  return (
    <div className="min-h-screen relative">
      {/* Dynamic Background */}
      <WeatherBackground weatherData={weatherData} />

      {/* Navbar */}
      <Navbar
        onSearchCity={handleSearchCity}
        onToggleTheme={toggleTheme}
        isDark={isDark}
        onToggleUnit={handleToggleUnit}
        unit={unit}
        onUseLocation={handleUseLocation}
        locationLoading={locationLoading}
      />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Favorites Sidebar - Desktop */}
          <aside className="hidden lg:block lg:col-span-1">
            <div className="sticky top-24">
              <FavoritesSidebar
                favorites={favorites}
                onSelectFavorite={handleSelectFavorite}
                onRemoveFavorite={removeFavorite}
                currentCity={city}
              />
            </div>
          </aside>

          {/* Weather Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Error Alert */}
            <AnimatePresence>
              {error && (
                <ErrorAlert
                  message={error}
                  onDismiss={() => setError(null)}
                  severity="error"
                />
              )}
            </AnimatePresence>

            {/* Loading State */}
            {loading && !weatherData && <FullPageLoading message="Fetching weather data..." />}

            {/* Weather Data */}
            {!loading && weatherData && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-6"
              >
                {/* Current Weather */}
                <CurrentWeatherCard
                  data={weatherData}
                  unit={unit}
                  onToggleFavorite={handleToggleFavorite}
                  isFavorite={isFavorite(weatherData.location.name)}
                />

                {/* Hourly Forecast */}
                {weatherData.forecast?.forecastday?.[0]?.hour && (
                  <HourlyForecastList
                    hours={weatherData.forecast.forecastday[0].hour}
                    unit={unit}
                  />
                )}

                {/* Daily Forecast */}
                {weatherData.forecast?.forecastday && (
                  <DailyForecastList
                    days={weatherData.forecast.forecastday}
                    unit={unit}
                  />
                )}
              </motion.div>
            )}

            {/* Loading Skeleton */}
            {loading && weatherData && (
              <div className="space-y-6">
                <WeatherCardSkeleton />
                <div className="grid gap-3 grid-cols-2 md:grid-cols-4">
                  {[...Array(4)].map((_, i) => (
                    <ForecastCardSkeleton key={i} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Favorites - Mobile */}
        <div className="lg:hidden mt-8">
          <FavoritesSidebar
            favorites={favorites}
            onSelectFavorite={handleSelectFavorite}
            onRemoveFavorite={removeFavorite}
            currentCity={city}
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-16 pb-8 text-center text-sm text-slate-600 dark:text-slate-400">
        <p>
          Powered by{' '}
          <a
            href="https://www.weatherapi.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-600 dark:text-primary-400 hover:underline"
          >
            WeatherAPI.com
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
