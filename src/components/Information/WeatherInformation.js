import Sun from './img/sun.png';
import { UilTemperature, UilWind, UilTear } from '@iconscout/react-unicons';
import WeatherDetails from './WeatherDetails';

const WeatherInformation = () => {

    return (
        <div>
            <div className="flex items-center justify-center py-6 text-xl text-cyan-400">
                Cloudy
            </div>
            <div className="flex flex-row items-center justify-between text-white py-3">
                <img
                    src={Sun}
                    alt="sun"
                    className="w-20"
                />
                <div className="flex flex-col space-y-2">
                    <WeatherDetails icon={UilTemperature} label="Real feel" value="33°" />
                    <WeatherDetails icon={UilTear} label="Humidity" value="34%" />
                    <WeatherDetails icon={UilWind} label="Wind" value="3 km/h" />
                </div>
                <p className="text-4xl">35°</p>
            </div>
            <div></div>
        </div>
    )
}

export default WeatherInformation
