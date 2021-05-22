import React, { useState } from 'react'
import COLORS from '../constants/Colors';
import { extractMatchingColors } from '../helpers/Colors';

const ColorSearch = ({ setColor }) => {

    const [searchQuery, setSearchQuery] = useState('');

    return (
        <div className="col">
            <input
                className="col-12 mb-2 border mx-0"
                onChange={e => setSearchQuery(e.target.value)}
                value={searchQuery}
                placeholder="Search for a Color"
                name='color'
            />
            <div className="col-12 border">
            {
                extractMatchingColors(searchQuery).map(colorName => (
                    <div className="row mx-0" onClick={() => setColor(COLORS[colorName])}>
                        <div className="col" style={{backgroundColor: COLORS[colorName]}}></div>
                        <div className="col">{colorName}</div> 
                    </div>
                ))
            }
            </div>
        </div>
    )
}

export default ColorSearch;
