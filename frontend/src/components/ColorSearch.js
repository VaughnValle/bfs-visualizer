import React, { useState } from 'react'
import COLORS from '../constants/Colors';

const ColorSearch = ({ setColor }) => {

    const [searchQuery, setSearchQuery] = useState('');
    const extractMatchingColors = () => {
        return ["black", "yellow", "green", "blue"];
    }

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
                extractMatchingColors().map(colorName => (
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
