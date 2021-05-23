import React, { useState } from 'react'
import COLORS from '../constants/Colors';
import { extractMatchingColors } from '../helpers/Colors';

const ColorSearch = ({ color, setColor }) => {

    const [searchQuery, setSearchQuery] = useState('');

    return (
        <div className="col">
            <div className="row mb-2">
                <div className="col-6">Current color:</div> 
                <div className="col-2 rounded border" style={{backgroundColor: color}}></div> 
            </div>
            <input
                id="color-search"
                className="col-12 mb-2 border mx-0 rounded"
                onChange={e => setSearchQuery(e.target.value)}
                value={searchQuery}
                placeholder="Pick a color"
                name='color'
            />
            <div className="col-12 border overflow-auto rounded" style={{height:'150px'}}>
            {
                extractMatchingColors(searchQuery).map(colorName => (
                    <div className="row mx-0 border" onClick={() => setColor(COLORS[colorName])}>
                        <div className="col-2 rounded" style={{backgroundColor: COLORS[colorName]}}></div>
                        <div className="col m-0">{colorName}</div> 
                    </div>
                ))
            }
            </div>
        </div>
    )
}

export default ColorSearch;
