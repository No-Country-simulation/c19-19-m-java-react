"use client";
import React, { useEffect, useState } from 'react';

function Weather() {
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchWeather = async () => {
            const apiKey = process.env.NEXT_PUBLIC_WEATHER_APIKEY;
            const cityUrl = 'Guatape,CO';
            const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityUrl}&appid=${apiKey}&lang=es`;
            
            try {
                const weatherResponse = await fetch(weatherUrl);
                if (!weatherResponse.ok) {
                    throw new Error(`HTTP error! status: ${weatherResponse.status}`);
                }
                const weatherData = await weatherResponse.json();
                setWeather(weatherData);
            } catch (error) {
                console.error("Error fetching weather data:", error);
                setError("No se pudo cargar la información del clima");
            }
        };
        fetchWeather();
    }, []);
    
    if (error) {
        return <p>{error}</p>;
    }

    if (!weather || !weather.main || !weather.weather) {
        return <p>Cargando información del clima...</p>;
    }
    
    return ( 
        <>
            <p>{Math.round(weather.main.temp - 273.15)}°C</p>
            <p>{weather.weather[0].description.charAt(0).toUpperCase() + weather.weather[0].description.slice(1)}</p>
        </>
    );
}

export default Weather;