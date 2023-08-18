import Sun from './img/sun.png';
import { UilTemperature, UilWind, UilTear, UilSun, UilSunset, UilArrowUp, UilArrowDown } from '@iconscout/react-unicons';
import WeatherDetailsTop from './WeatherDetailsTop';
import WeatherDetailsBottom from './WeatherDetailsBottom';

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
                    <WeatherDetailsTop icon={UilTemperature} label="Real feel" value="33°" />
                    <WeatherDetailsTop icon={UilTear} label="Humidity" value="34%" />
                    <WeatherDetailsTop icon={UilWind} label="Wind" value="3 km/h" />
                </div>
                <p className="text-4xl">35°</p>
            </div>
            <div className="flex flex-row items-center justify-center space-x-7 text-white text-sm py-3">
                <WeatherDetailsBottom icon={UilSun} label="Rise" value="06:45 AM" />
                <p className="font-light">|</p>
                <WeatherDetailsBottom icon={UilSunset} label="Set" value="09:45 PM" />
                <p className="font-light">|</p>
                <WeatherDetailsBottom icon={UilArrowUp} label="High" value="38°" />
                <p className="font-light">|</p>
                <WeatherDetailsBottom icon={UilArrowDown} label="Low" value="32°" />
            </div>
        </div>
    )
}

export default WeatherInformation
