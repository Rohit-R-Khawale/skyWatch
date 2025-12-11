import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Input from '../../../components/ui/Input';
import { useDebounce } from '../../../hooks/useDebounce';
import { searchCities } from '../../../lib/weatherApi';

/**
 * Search Bar with Autocomplete
 */
const SearchBar = ({ onSelectCity, placeholder = 'Search for a city...' }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  
  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (debouncedQuery.trim().length < 2) {
        setSuggestions([]);
        return;
      }

      setLoading(true);
      try {
        const results = await searchCities(debouncedQuery);
        setSuggestions(results.slice(0, 5)); // Limit to 5 suggestions
      } catch (error) {
        console.error('Error fetching suggestions:', error);
        setSuggestions([]);
      } finally {
        setLoading(false);
      }
    };

    fetchSuggestions();
  }, [debouncedQuery]);

  const handleSelectCity = (city) => {
    setQuery('');
    setSuggestions([]);
    setShowSuggestions(false);
    onSelectCity(city.name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSelectCity(query.trim());
      setQuery('');
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  return (
    <div className="relative">
      <form onSubmit={handleSubmit}>
        <Input
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setShowSuggestions(true);
          }}
          onFocus={() => setShowSuggestions(true)}
          placeholder={placeholder}
          icon={
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          }
        />
      </form>

      {/* Suggestions Dropdown */}
      <AnimatePresence>
        {showSuggestions && suggestions.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute z-50 w-full mt-2 glass rounded-xl overflow-hidden shadow-xl"
          >
            {suggestions.map((city, index) => (
              <button
                key={`${city.id}-${index}`}
                onClick={() => handleSelectCity(city)}
                className="w-full px-4 py-3 text-left hover:bg-white/10 dark:hover:bg-slate-800/50 transition-colors border-b border-white/10 last:border-b-0"
              >
                <p className="font-medium text-slate-900 dark:text-white">
                  {city.name}
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {city.region}, {city.country}
                </p>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Click outside to close */}
      {showSuggestions && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setShowSuggestions(false)}
        />
      )}
    </div>
  );
};

export default SearchBar;
