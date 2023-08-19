import TimeAndLocation from "./TimeAndLocation";
import WeatherInformation from "./WeatherInformation";
import Forecast from "./Forecast";

const Information = ({ weather, units, setUnits }) => {
  return (
    <div>
      <TimeAndLocation weather={weather} />
      <WeatherInformation weather={weather} units={units} setUnits={setUnits} />
      <Forecast forecastType="HOURLY" items={weather.hourly} />
      <Forecast forecastType="DAILY" items={weather.daily} />
    </div>
  )
}

export default Information
