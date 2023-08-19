import TimeAndLocation from "./TimeAndLocation";
import WeatherInformation from "./WeatherInformation";
import Forecast from "./Forecast";

const Information = () => {
  return (
    <div>
      <TimeAndLocation />
      <WeatherInformation />
      <Forecast forecastType="HOURLY" />
      <Forecast forecastType="DAILY" />
    </div>
  )
}

export default Information
