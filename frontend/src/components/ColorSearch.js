import React, { useState } from 'react'
import COLORS from '../constants/Colors';
import { extractMatchingColors } from '../helpers/Colors';

const ColorSearch = ({ setColor }) => {

    const [searchQuery, setSearchQuery] = useState('');

    return (
        <div>
            <input
                className="row"
                onChange={e => setSearchQuery(e.target.value)}
                value={searchQuery}
                name='color'
            />
            <>
            {
                extractMatchingColors(searchQuery).map(colorName => (
                    <div className="row" onClick={() => setColor(COLORS[colorName])}>
                        <div className="col-2" style={{backgroundColor: COLORS[colorName]}}></div>
                        <div className="col">{colorName}</div> 
                    </div>
                ))
            }
            </>
        </div>
    )
}

export default ColorSearch;
