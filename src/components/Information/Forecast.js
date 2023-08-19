import { iconUrl } from "../../services/weatherService";

const Forecast = ({ forecastType, items }) => (
  <div>
    <div className="flex items-center justify-start mt-1">
      <p className="text-white font-medium">{forecastType} FORECAST</p>
    </div>
    <hr className="my-2" />
    <div className="flex flex-row items-center justify-between text-white">
      {items.map((item, index) => (
        <div key={index} className="flex flex-col items-center justify-center">
          <p className="font-light text-base">{item.title}</p>
          <img src={iconUrl(item.icon)}
            alt="Sun" className="w-12" />
          <p className="font-medium">{`${item.temp.toFixed()}°`}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Forecast;