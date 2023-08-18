import React from 'react';
import Search from './Search';
import DegreeConversion from './DegreeConversion';

const Inputs = () => {
    return (
        <div className="flex flex-row justify-center my-6">
            <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
                <Search />
                <DegreeConversion />
            </div>
        </div>
    )
}

export default Inputs
