import React from 'react'
import Sun from './img/sun.png';
import { UilTemperature, UilWind, UilTear, UilSun, UilSunset, UilArrowUp, UilArrowDown } from '@iconscout/react-unicons';
import WeatherDetailsTop from './WeatherDetailsTop';
import WeatherDetailsBottom from './WeatherDetailsBottom';

const WeatherInformation = () => {

    const weatherDetailsBottomArr = [
        { icon: UilSun, label: "Rise", value: "06:45 AM" },
        { icon: UilSunset, label: "Set", value: "09:45 PM" },
        { icon: UilArrowUp, label: "High", value: "38°" },
        { icon: UilArrowDown, label: "Low", value: "32°" },
    ];

    const weatherDetailsTopArr = [
        { icon: UilTemperature, label: "Real feel", value: "33°" },
        { icon: UilTear, label: "Humidity", value: "34%" },
        { icon: UilWind, label: "Wind", value: "3 km/h" },
    ];

    return (
        <div>
            <div className="flex items-center justify-center py-1 text-xl text-cyan-400">
                Cloudy
            </div>
            <div className="flex flex-row items-center justify-between text-white py-3">
                <img
                    src={Sun}
                    alt="sun"
                    className="w-20"
                />
                <div className="flex flex-col space-y-2">
                    {weatherDetailsTopArr.map((detail, index) => (
                        <WeatherDetailsTop key={index} icon={detail.icon} label={detail.label} value={detail.value} />
                    ))}
                </div>
                <p className="text-4xl">35°</p>
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
