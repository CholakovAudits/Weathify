import React from 'react';
import Sun from './img/sun.png';

const hourlyForecastArr = [
  { time: "03:30 PM", temperature: "22°" },
  { time: "03:30 PM", temperature: "22°" },
  { time: "03:30 PM", temperature: "22°" },
  { time: "03:30 PM", temperature: "22°" },
  { time: "03:30 PM", temperature: "22°" },
];

const Forecast = ({ forecastType }) => (
  <div>
    <div className="flex items-center justify-start mt-1">
      <p className="text-white font-medium">{forecastType} FORECAST</p>
    </div>
    <hr className="my-2" />
    <div className="flex flex-row items-center justify-between text-white">
      {hourlyForecastArr.map((forecast, index) => (
        <div key={index} className="flex flex-col items-center justify-center">
          <p className="font-light text-base">{forecast.time}</p>
          <img src={Sun} alt="Sun" className="w-12 my-1" />
          <p className="font-medium">{forecast.temperature}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Forecast;