# OpenWeatherMap API Weather App

This project is a simple weather application that retrieves weather data from the OpenWeatherMap API. Users can enter a city name and fetch the current weather information.

## Project Structure

```
openweathermap-app
├── src
│   ├── index.js        # Main JavaScript file for initializing the app and handling user input
│   └── api.js          # Contains functions for making API requests to OpenWeatherMap
├── public
│   └── index.html      # Main HTML file for the user interface
├── package.json        # Configuration file for npm
└── README.md           # Documentation for the project
```

## Getting Started

### Prerequisites

- Node.js installed on your machine.
- An API key from OpenWeatherMap. You can sign up for a free account at [OpenWeatherMap](https://openweathermap.org/).

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd openweathermap-app
   ```

3. Install the dependencies:
   ```
   npm install
   ```

### Usage

1. Open `public/index.html` in your web browser.
2. Enter the name of the city you want to get the weather for.
3. Click the "Get Weather" button to fetch the weather data.
4. The weather information will be displayed on the page.

### API Key Configuration

Make sure to replace the placeholder in `src/api.js` with your actual OpenWeatherMap API key.

### License

This project is licensed under the MIT License.