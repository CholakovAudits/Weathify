import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoApiOptions } from "../services/weatherService";
import Refresh from './Refresh';

const Search = ({ onSearchChange, setRefresh }) => {
    const [search, setSearch] = useState(null);

    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
    };

    const loadOptions = async (inputValue) => {
        try {
            const res = await fetch(`${GEO_API_URL}?minPopulation=100000&namePrefix=${inputValue}`, geoApiOptions);
            const res_1 = await res.json();
            return {
                options: res_1.data.map((city) => {
                    return {
                        value: `${city.latitude} ${city.longitude}`,
                        label: `${city.name}, ${city.countryCode}`,
                    };
                }),
            };
        } catch (err) {
            return console.error(err);
        }
    }

    return (
        <div className="flex flex-row justify-center my-5">
            <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
                <AsyncPaginate
                    className="text-xl font-light p-2 w-full focus:outline-none"
                    placeholder="Search for city..."
                    debounceTimeout={600}
                    value={search}
                    onChange={handleOnChange}
                    loadOptions={loadOptions}
                />
                <Refresh setRefresh={setRefresh} />
            </div>
        </div >
    );
};

export default Search;