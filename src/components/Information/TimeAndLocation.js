import { formatToLocalTime } from "../../services/weatherService";

const TimeAndLocation = ({ weather: { dt, timezone, name, country } }) => {
    return (
        <div>
            <div className="flex items-center justify-center mt-7">
                <p className="text-white text-3xl font-medium">{name}, {country}</p>
            </div>
            <div className="flex items-center justify-center mt-1">
                <p className="text-white text-xl font-extralight">
                    {formatToLocalTime(dt, timezone)}
                </p>
            </div>
        </div>
    )
}

export default TimeAndLocation
