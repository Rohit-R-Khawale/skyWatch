import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Card from '../../../components/ui/Card';

/**
 * Favorites Sidebar Component
 */
const FavoritesSidebar = ({ favorites, onSelectFavorite, onRemoveFavorite, currentCity }) => {
  if (favorites.length === 0) {
    return (
      <Card className="p-4">
        <div className="text-center text-slate-500 dark:text-slate-400">
          <svg className="w-12 h-12 mx-auto mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>
          <p className="text-sm">No favorites yet</p>
          <p className="text-xs mt-1">Star cities to save them here</p>
        </div>
      </Card>
    );
  }

  return (
    <div className="space-y-2">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-400 px-2 mb-3">
        Favorites
      </h2>
      <AnimatePresence>
        {favorites.map((favorite, index) => (
          <motion.div
            key={favorite.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ delay: index * 0.05 }}
          >
            <Card
              className={`p-3 cursor-pointer group relative ${
                currentCity === favorite.name ? 'ring-2 ring-primary-500' : ''
              }`}
              onClick={() => onSelectFavorite(favorite.name)}
              hover
            >
              <div className="flex items-center justify-between">
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-slate-900 dark:text-white truncate">
                    {favorite.name}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                    {favorite.region || favorite.country}
                  </p>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onRemoveFavorite(favorite.name);
                  }}
                  className="ml-2 p-1 rounded-lg opacity-0 group-hover:opacity-100 hover:bg-red-500/10 transition-all"
                  title="Remove from favorites"
                >
                  <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </Card>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default FavoritesSidebar;
