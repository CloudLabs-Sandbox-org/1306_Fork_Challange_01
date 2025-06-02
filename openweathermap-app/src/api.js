const API_KEY = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key

export async function getWeatherData(city) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
  
  if (!response.ok) {
    throw new Error('Failed to fetch weather data');
  }

  const data = await response.json();
  return data;
}