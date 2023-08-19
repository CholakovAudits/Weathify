import TimeAndLocation from "./TimeAndLocation";
import WeatherInformation from "./WeatherInformation";
import Forecast from "./Forecast";

const Information = ({ weather }) => {
  return (
    <div>
      <TimeAndLocation weather={weather} />
      <WeatherInformation weather={weather} />
      <Forecast forecastType="HOURLY" />
      <Forecast forecastType="DAILY" />
    </div>
  )
}

export default Information
