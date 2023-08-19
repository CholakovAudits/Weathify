const DegreeButton = ({ name, text }) => {
    return (
        <button
            name={name}
            className="text-xl text-white font-medium transition ease-out hover:scale-125 hover:text-cyan-400"
        >
            {text}
        </button>
    );
};

const DegreeConversion = () => {
    return (
        <div className="flex flex-row justify-center my-9">
            <DegreeButton name="celsius" text="°C" />
            <p className="text-xl text-white mx-1 ">|</p>
            <DegreeButton name="fahrenheit" text="°F" />
        </div>
    );
};

export default DegreeConversion;