import React from "react";
import "../styles/App.css";

const WeatherCard = ({ data }) => {
  const { name, main, weather } = data;

  return (
    <div className="weather-card">
      <h2>{name}</h2>
      <p>🌡️ Temp: {main.temp}°C</p>
      <p>💧 Humidity: {main.humidity}%</p>
      <p>🌥️ Condition: {weather[0].description}</p>
    </div>
  );
};

export default WeatherCard;
