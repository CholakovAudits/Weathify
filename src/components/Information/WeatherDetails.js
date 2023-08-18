const WeatherDetails = ({ icon: Icon, label, value }) => {
    return (
        <div className="flex font-light text-sm items-center justify-center">
            <Icon size={20} className="mr-1" />
            <p className="text-base">{label}:</p>
            <span className="text-base font-semibold ml-1">{value}</span>
        </div>
    )
}

export default WeatherDetails
