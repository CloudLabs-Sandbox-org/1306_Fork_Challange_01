// src/index.js
const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('weather-form');
  const cityInput = document.getElementById('city-input');
  const resultDiv = document.getElementById('result');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const city = cityInput.value;

    if (city) {
      const weatherData = await getWeatherData(city);
      displayWeatherData(weatherData);
      cityInput.value = '';
    }
  });

  function displayWeatherData(data) {
    if (data && data.main) {
      resultDiv.innerHTML = `
        <h3>Weather in ${data.name}</h3>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather: ${data.weather[0].description}</p>
      `;
    } else {
      resultDiv.innerHTML = '<p>City not found or data unavailable.</p>';
    }
  }
});

// Import the getWeatherData function from api.js
import { getWeatherData } from './api.js';

document.getElementById('fetchWeather').addEventListener('click', async () => {
    const city = document.getElementById('city').value.trim();
    const resultDiv = document.getElementById('weatherResult');
    resultDiv.textContent = 'Loading...';

    if (!city) {
        resultDiv.textContent = 'Please enter a city name.';
        return;
    }

    const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('City not found');
        const data = await response.json();

        resultDiv.innerHTML = `
            <h2>${data.name}, ${data.sys.country}</h2>
            <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
            <p><strong>Weather:</strong> ${data.weather[0].main} (${data.weather[0].description})</p>
            <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
            <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
        `;
    } catch (err) {
        resultDiv.textContent = 'Error: ' + err.message;
    }
});