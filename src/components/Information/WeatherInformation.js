import Sun from './img/sun.png';
import { UilTemperature, UilWind, UilTear } from '@iconscout/react-unicons'

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
                <p className="text-4xl">35°</p>
                <div className="flex flex-col space-y-2">
                    <div className="flex font-light text-sm items-center justify-center">
                        <UilTemperature size={20} className="mr-1" />
                        <p className="text-base">Real feel:</p>
                        <span className="text-base font-semibold ml-1">33°</span>
                    </div>
                    <div className="flex font-light text-sm items-center justify-center">
                        <UilTear size={20} className="mr-1" />
                        <p className="text-base">Humidity:</p>
                        <span className="text-base font-semibold ml-1">34%</span>
                    </div>
                    <div className="flex font-light text-sm items-center justify-center">
                        <UilWind size={20} className="mr-1" />
                        <p className="text-base">Wind:</p>
                        <span className="text-base font-semibold ml-1">3 km/h</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherInformation
