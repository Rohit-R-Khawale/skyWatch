// src/components/Navbar.jsx
import React, { useState } from "react";

const Navbar = ({
  appName = "WeatherNow",
  onSearchCity,
  unit = "metric", // "metric" for °C, "imperial" for °F
  onToggleUnit,
}) => {
  const [searchValue, setSearchValue] = useState("");
  const isMetric = unit === "metric";

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = searchValue.trim();
    if (!trimmed) return;
    onSearchCity && onSearchCity(trimmed);
  };

  return (
    <nav className="w-full border-b border-white/10 bg-slate-900/80 backdrop-blur sticky top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 gap-3">
        {/* Brand */}
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-sky-400 to-indigo-500 shadow-md">
            <span className="text-lg font-semibold text-white">☁️</span>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-lg font-semibold text-white tracking-tight">
              {appName}
            </span>
            <span className="text-xs text-slate-300">
              Real-time weather at a glance
            </span>
          </div>
        </div>

        {/* Desktop search */}
        <form
          onSubmit={handleSubmit}
          className="hidden md:flex flex-1 max-w-md items-center gap-2"
        >
          <div className="relative flex-1">
            <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-slate-400 text-sm">
              🔍
            </span>
            <input
              type="text"
              placeholder="Search city (e.g. Mumbai, London)…"
              className="w-full rounded-xl border border-slate-700 bg-slate-900/80 py-2 pl-9 pr-3 text-sm text-slate-100 placeholder:text-slate-500 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-500/40"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="rounded-xl bg-sky-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-sky-600 active:scale-[0.98] transition"
          >
            Search
          </button>
        </form>

        {/* Right side */}
        <div className="flex items-center gap-2 md:gap-3">
          {/* Unit toggle */}
          <button
            type="button"
            onClick={onToggleUnit}
            className="flex items-center gap-1 rounded-full bg-slate-800/80 px-2 py-1 text-xs font-medium text-slate-100 border border-slate-700 hover:border-sky-400 transition"
          >
            <span
              className={`rounded-full px-2 py-0.5 ${
                isMetric ? "bg-sky-500 text-white" : "text-slate-300"
              }`}
            >
              °C
            </span>
            <span
              className={`rounded-full px-2 py-0.5 ${
                !isMetric ? "bg-sky-500 text-white" : "text-slate-300"
              }`}
            >
              °F
            </span>
          </button>

          {/* Mobile search */}
          <details className="relative md:hidden">
            <summary className="list-none flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 text-slate-100 hover:border-sky-400 transition cursor-pointer">
              🔍
            </summary>
            <div className="absolute right-0 mt-2 w-64 rounded-xl border border-slate-700 bg-slate-900/95 p-3 shadow-lg">
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="text"
                  placeholder="Search city..."
                  className="w-full rounded-lg border border-slate-700 bg-slate-950/80 py-2 px-3 text-sm text-slate-100 placeholder:text-slate-500 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-500/40"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                />
                <button
                  type="submit"
                  className="rounded-lg bg-sky-500 px-3 text-sm font-medium text-white hover:bg-sky-600"
                >
                  Go
                </button>
              </form>
            </div>
          </details>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
