import TimeAndLocation from "./TimeAndLocation";
import WeatherInformation from "./WeatherInformation";
import Forecast from "./Forecast";

const Information = () => {
  return (
    <div>
      <TimeAndLocation />
      <WeatherInformation />
      <Forecast forecastType="HOURLY" />
      <Forecast forecastType="WEEKLY" />
    </div>
  )
}

export default Information
