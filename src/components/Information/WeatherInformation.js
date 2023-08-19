import React from 'react';
import { UilTemperature, UilWind, UilTear, UilSun, UilSunset, UilArrowUp, UilArrowDown } from '@iconscout/react-unicons';
import WeatherDetailsTop from './WeatherDetailsTop';
import WeatherDetailsBottom from './WeatherDetailsBottom';
import DegreeConversion from '../DegreeConversion';
import { formatToLocalTime, iconUrl } from "../../services/weatherService";

const WeatherInformation = ({ weather: { feels_like, humidity, speed, sunrise, sunset, temp_max, temp_min, temp, details, icon, timezone } }) => {

    const weatherDetailsBottomArr = [
        { icon: UilSun, label: "Rise", value: formatToLocalTime(sunrise, timezone, 'hh:mm a') },
        { icon: UilSunset, label: "Set", value: formatToLocalTime(sunset, timezone, 'hh:mm a') },
        { icon: UilArrowUp, label: "Max", value: `${temp_max.toFixed()}°` },
        { icon: UilArrowDown, label: "Min", value: `${temp_min.toFixed()}°` },
    ];

    const weatherDetailsTopArr = [
        { icon: UilTemperature, label: "Real feel", value: feels_like.toFixed() },
        { icon: UilTear, label: "Humidity", value: `${humidity.toFixed()}%` },
        { icon: UilWind, label: "Wind", value: `${speed.toFixed()} km/h` },
    ];

    return (
        <div>
            <div className="flex items-center justify-center py-1 text-xl text-cyan-400">
                {details}
            </div>
            <div className="flex flex-row items-center justify-between text-white py-3">
                <img
                    src={iconUrl(icon)}
                    className="w-20"
                />
                <div className="flex flex-col space-y-2">
                    {weatherDetailsTopArr.map((detail, index) => (
                        <WeatherDetailsTop key={index} icon={detail.icon} label={detail.label} value={detail.value} />
                    ))}
                </div>
                <p className="text-4xl">{`${temp.toFixed()}°`}</p>
                <DegreeConversion />
            </div>
            <div className="flex flex-row items-center justify-center space-x-7 text-white text-sm py-3">
                {weatherDetailsBottomArr.map((detail, index) => (
                    <React.Fragment key={index}>
                        <WeatherDetailsBottom icon={detail.icon} label={detail.label} value={detail.value} />
                        {index < weatherDetailsBottomArr.length - 1 && <p className="font-light">|</p>}
                    </React.Fragment>
                ))}
            </div>
        </div>
    )
}

export default WeatherInformation
