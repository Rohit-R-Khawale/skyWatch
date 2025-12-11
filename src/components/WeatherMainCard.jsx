// src/components/WeatherMainCard.jsx
import React from "react";

const WeatherMainCard = ({ data, unit, city }) => {
  if (!data) return null;

  const temp = Math.round(data.main.temp);
  const feelsLike = Math.round(data.main.feels_like);
  const humidity = data.main.humidity;
  const windSpeed = data.wind.speed;
  const description = data.weather?.[0]?.description || "";
  const icon = data.weather?.[0]?.icon;

  const unitSymbol = unit === "metric" ? "°C" : "°F";
  const windUnit = unit === "metric" ? "m/s" : "mph";

  return (
    <section className="grid gap-4 md:grid-cols-3">
      <div className="md:col-span-2 rounded-2xl border border-slate-800 bg-slate-900/80 p-5 shadow-lg flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">
              {data.name || city}
            </h1>
            <p className="text-sm text-slate-400 capitalize">
              {description}
            </p>
          </div>
          {icon && (
            <img
              src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
              alt={description}
              className="h-16 w-16"
            />
          )}
        </div>

        <div className="mt-6 flex flex-wrap items-end gap-4">
          <div className="flex items-baseline gap-2">
            <span className="text-5xl font-semibold">
              {temp}
            </span>
            <span className="text-2xl text-slate-300">{unitSymbol}</span>
          </div>
          <div className="space-y-1 text-sm text-slate-300">
            <p>
              Feels like <span className="font-medium">{feelsLike}{unitSymbol}</span>
            </p>
            <p>
              Humidity <span className="font-medium">{humidity}%</span>
            </p>
            <p>
              Wind <span className="font-medium">{windSpeed} {windUnit}</span>
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 shadow-lg space-y-3">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-300">
          Details
        </h2>
        <div className="space-y-2 text-sm text-slate-200">
          <div className="flex justify-between">
            <span>Pressure</span>
            <span className="font-medium">{data.main.pressure} hPa</span>
          </div>
          <div className="flex justify-between">
            <span>Visibility</span>
            <span className="font-medium">{(data.visibility / 1000).toFixed(1)} km</span>
          </div>
          {data.clouds && (
            <div className="flex justify-between">
              <span>Cloudiness</span>
              <span className="font-medium">{data.clouds.all}%</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WeatherMainCard;
