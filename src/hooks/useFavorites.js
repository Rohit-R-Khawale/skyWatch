import { useState, useEffect } from 'react';
import { STORAGE_KEYS } from '../config/constants';

/**
 * Custom hook for managing favorite locations
 * @returns {Object} Favorites state and management functions
 */
export const useFavorites = () => {
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.FAVORITES);
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (location) => {
    setFavorites((prev) => {
      // Avoid duplicates
      if (prev.some((fav) => fav.name === location.name)) {
        return prev;
      }
      return [...prev, location];
    });
  };

  const removeFavorite = (locationName) => {
    setFavorites((prev) => prev.filter((fav) => fav.name !== locationName));
  };

  const isFavorite = (locationName) => {
    return favorites.some((fav) => fav.name === locationName);
  };

  const toggleFavorite = (location) => {
    if (isFavorite(location.name)) {
      removeFavorite(location.name);
    } else {
      addFavorite(location);
    }
  };

  return {
    favorites,
    addFavorite,
    removeFavorite,
    isFavorite,
    toggleFavorite,
  };
};
