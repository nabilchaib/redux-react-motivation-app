import React, { useState, useEffect } from "react";
import { WEATHER_API_KEY, WEATHER_API_URL } from "../Api";
import "./Weather.css";


const CurrentWeather = () => {
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        const fetchWeather = async () => {
            const response = await fetch(
                `${WEATHER_API_URL}/current.json?key=${WEATHER_API_KEY}&q=Québec`
            );
            const data = await response.json();

            setWeather(data);
        };
        fetchWeather();
    }, []);

    if (!weather) {
        return <p>Loading weather...</p>;
    }

    const { condition, temp_c, wind_kph } = weather.current;
    const iconUrl = `https:${condition.icon}`

    return (
        <div className="weather">
            <div className="top-right">
                <div>
                    <img src={iconUrl} alt={condition.text} />
                    <p className="weather-description">{condition.text}</p>
                    <p className="temperature">{temp_c}°C</p>
                    <p className="vent">Vent: {wind_kph}km/h</p>

                </div>
            </div>
        </div>
    );
};

export default CurrentWeather;
