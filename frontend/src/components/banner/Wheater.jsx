"use client";
import React, { useEffect, useState } from 'react';

function Wheater() {

    const [weather, setWeather] = useState(null);

    useEffect(() => {
        const fetchTime = async () => {
            const apiKey = 'cd9cb067e82c1b8ec4872f57d0f5e335';
            const cityUrl = 'Guatape,CO';
            const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityUrl}&appid=${apiKey}&lang=es`;
            
            try {
                const weatherResponse = await fetch(weatherUrl);
                const weatherData = await weatherResponse.json();
                setWeather(weatherData);
            } catch (error) {
                console.error(error);
            }
        };
    fetchTime();
    }, []);
    
    return ( 
        <>
            {weather && <p>{Math.round(weather.main.temp - 273.15)}°C</p>}
            {weather && <p>{weather.weather[0].description.charAt(0).toUpperCase() + weather.weather[0].description.slice(1)}</p>}
        </>
    );
}

export default Wheater;