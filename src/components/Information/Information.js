import TimeAndLocation from "./TimeAndLocation";
import WeatherInformation from "./WeatherInformation";
import Forecast from "./Forecast";

const Information = ({ weather }) => {
  return (
    <div>
      <TimeAndLocation weather={weather} />
      <WeatherInformation weather={weather} />
      <Forecast forecastType="HOURLY" items={weather.hourly} />
      <Forecast forecastType="DAILY" items={weather.daily} />
    </div>
  )
}

export default Information
