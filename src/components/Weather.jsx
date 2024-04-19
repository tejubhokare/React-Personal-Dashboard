import React, { useState, useEffect } from 'react';
import useWeather from '../hooks/useWeather';
import '../styles/Weather.css';

function Weather() {
    const defaultCity = 'Toronto';
    const [city, setCity] = useState(defaultCity);
    const [inputCity, setInputCity] = useState('');
    const [shouldFetch, setShouldFetch] = useState(false);
    const weather = useWeather(city, shouldFetch);

    useEffect(() => {
        setShouldFetch(true);
    }, []);

    const handleCityChange = (e) => {
        setInputCity(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputCity.trim() !== '') {
            setCity(inputCity); // Update city only if input is not empty
            setShouldFetch(true); // Trigger weather update
        }
    };

    return (
        <div className="weather">
            <h2>Today's Weather</h2>
            {weather ? (
                <div>
                    <p>{weather.name}, {Math.round(weather.main.temp)}°C</p>
                    <p>{weather.weather[0].description}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
            <form onSubmit={handleSubmit}>
                <input type="text" value={inputCity} onChange={handleCityChange} placeholder="Enter city" />
                <button type="submit" className='checkButton'>Check Weather</button>
            </form>
        </div>
    );
}

export default Weather;