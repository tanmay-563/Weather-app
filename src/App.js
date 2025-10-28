import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import "./styles/App.css";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");

  // Fetch Weather Data
  const getWeatherData = async (city) => {
    const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
    const url = `YOUR API KEY ${city}&appid=${API_KEY}&units=metric`;

    try {
      const response = await axios.get(url);
      setWeatherData(response.data);
      setError("");
    } catch (err) {
      setError("City not found. Please try again.");
      setWeatherData(null);
    }
  };

  return (
    <div className="app">
      <h1>🌤️ Weather Dashboard</h1>
      <SearchBar onSearch={getWeatherData} />
      {error && <p className="error">{error}</p>}
      {weatherData && <WeatherCard data={weatherData} />}
    </div>
  );
};

export default App;
