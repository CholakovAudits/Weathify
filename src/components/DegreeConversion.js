import React from 'react';

const DegreeConversion = () => {
    return (
        <div className="flex flex-row w-1/4 items-center justify-center">
            <button
                name="celsius"
                className="text-xl text-white font-medium transition ease-out hover:scale-125"
            >
                °C
            </button>
            <p className="text-xl text-white mx-1 ">|</p>
            <button
                name="fahrenheit"
                className="text-xl text-white font-medium transition ease-out hover:scale-125"
            >
                °F
            </button>
        </div>
    )
}

export default DegreeConversion
