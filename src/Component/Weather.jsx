import React, { useState, useEffect } from 'react';
import '../Styles/Weather.css';

function Weather() {
    const [weather, setWeather] = useState(null);
    const [city, setCity] = useState('Toronto');

    useEffect(() => {
        fetchWeather();
    }, []);

    const fetchWeather = () => {
        const API_KEY = '493d92cfb6593d724d814cb9661d713c';
        const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

        fetch(API_URL)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                setWeather(data);
            })
            .catch((error) => {
                console.error('Error fetching weather data:', error);
            });
    };

    const handleCityChange = (e) => {
        setCity(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchWeather();
    };

    return (
        <div className="weather">
            <h2>Weather</h2>
            {weather ? (
                <div>
                    <p>Location: {weather.name}</p>
                    <p>Temperature: {Math.round(weather.main.temp)}°C</p>
                    <p>Condition: {weather.weather[0].description}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
            <form onSubmit={handleSubmit}>
                <input type="text" value={city} onChange={handleCityChange} placeholder="Enter city" />
                <button type="submit">Check</button>
            </form>
        </div>
    );
}

export default Weather;
