const DegreeConversion = ({ units, setUnits }) => {

    const handleUnitsChange = (e) => {
        const selectedUnit = e.currentTarget.name;
        if (units !== selectedUnit) setUnits(selectedUnit);
    }

    return (
        <div className="flex flex-row justify-center my-9">
            <button
                name="metric"
                className="text-xl text-white font-medium transition ease-out hover:scale-125 hover:text-cyan-200"
                onClick={handleUnitsChange}
            >
                °C
            </button>
            <p className="text-xl text-white mx-1 ">|</p>
            <button
                name="imperial"
                className="text-xl text-white font-medium transition ease-out hover:scale-125 hover:text-cyan-200"
                onClick={handleUnitsChange}
            >
                °F
            </button>
        </div>
    )
}

export default DegreeConversion