import Sun from './img/sun.png'

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

                </div>
            </div>
        </div>
    )
}

export default WeatherInformation
