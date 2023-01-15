// WeatherApp.js
import React, { useState, useEffect } from 'react';
import './WeatherApp.css';

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('');

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY`
        );

        if (response.ok) {
          const data = await response.json();
          setWeatherData(data);
        } else {
          console.error('Error fetching weather data');
        }
      } catch (error) {
        console.error('Error fetching weather data', error);
      }
    };

    if (city) {
      fetchWeatherData();
    }
  }, [city]);

  return (
    <div>
      <h1>Weather App</h1>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      {weatherData && (
        <div>
          <h2>{weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
