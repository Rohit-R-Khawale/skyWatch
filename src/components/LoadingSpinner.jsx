// src/components/LoadingSpinner.jsx
import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center py-10">
      <div className="flex items-center gap-3 rounded-full border border-slate-800 bg-slate-900/80 px-5 py-3">
        <div className="h-4 w-4 animate-spin rounded-full border-2 border-slate-500 border-t-transparent" />
        <span className="text-sm text-slate-200">Fetching latest weather…</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
