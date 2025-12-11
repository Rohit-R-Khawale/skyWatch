// src/components/ForecastList.jsx
import React from "react";

const ForecastList = ({ items, unit }) => {
  if (!items || items.length === 0) return null;

  const unitSymbol = unit === "metric" ? "°C" : "°F";

  const formatDate = (dtTxt) => {
    const date = new Date(dtTxt);
    return date.toLocaleDateString(undefined, {
      weekday: "short",
      day: "numeric",
      month: "short",
    });
  };

  return (
    <section className="mt-2">
      <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-300">
        5-Day Forecast
      </h2>
      <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-5">
        {items.map((item) => {
          const temp = Math.round(item.main.temp);
          const description = item.weather?.[0]?.description || "";
          const icon = item.weather?.[0]?.icon;
          return (
            <div
              key={item.dt}
              className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4 shadow-md flex flex-col items-center text-center space-y-2"
            >
              <p className="text-xs text-slate-400">
                {formatDate(item.dt_txt)}
              </p>
              {icon && (
                <img
                  src={`https://openweathermap.org/img/wn/${icon}.png`}
                  alt={description}
                  className="h-10 w-10"
                />
              )}
              <p className="text-lg font-semibold">
                {temp}{unitSymbol}
              </p>
              <p className="text-xs text-slate-300 capitalize">
                {description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ForecastList;
