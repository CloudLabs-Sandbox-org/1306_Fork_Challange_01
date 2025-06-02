# Generate a weather report based on the current weather conditions
import requests


def get_weather_report(city):
    api_key = "your_api_key_here"  # Replace with your actual API key
    base_url = "http://api.openweathermap.org/data/2.5/weather"
    complete_url = f"{base_url}?q={city}&appid={api_key}&units=metric"
    response = requests.get(complete_url)
    if response.status_code == 200:
        data = response.json()
        main = data['main']
        weather = data['weather'][0]
        temperature = main['temp']
        pressure = main['pressure']
        humidity = main['humidity']
        description = weather['description']
        
        report = (f"Weather Report for {city}:\n"
                  f"Temperature: {temperature}°C\n"
                  f"Pressure: {pressure} hPa\n"
                  f"Humidity: {humidity}%\n"
                  f"Description: {description.capitalize()}")
        return report
    else:
        return "City not found or API request failed."
if __name__ == "__main__":
    city = input("Enter the city name: ")
    weather_report = get_weather_report(city)
    print(weather_report)
# This code fetches the current weather conditions for a specified city using the OpenWeatherMap API.
# It constructs a weather report that includes temperature, pressure, humidity, and a brief description of the weather.
# The report is printed to the console after the user inputs the city name.
# The code is structured to be run as a standalone script, with the main function being called when the script is executed directly.