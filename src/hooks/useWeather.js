import { useState, useEffect } from 'react';

function useWeather(city, shouldFetch) {
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        if (shouldFetch) {
            const fetchWeather = () => {
                const API_KEY = process.env.REACT_APP_API_KEY;
                const API_URL = `${process.env.REACT_APP_API_URL}?q=${city}&units=metric&appid=${API_KEY}`;

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

            fetchWeather();
        }
    }, [city, shouldFetch]);

    return weather;
}

export default useWeather;
