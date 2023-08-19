const WeatherDetailsBottom = ({ icon: Icon, label, value }) => {
    return (
        <div>
            <Icon />
            <p className="font-light">
                {label}: <span className="font-medium ml-2">{value}</span>
            </p>
        </div>
    )
}

export default WeatherDetailsBottom
