import React, { useState } from 'react';
import COLORS from '../constants/Colors';
import '../css/ColorSearch.css';
import { extractMatchingColors } from '../helpers/Colors';


const ColorSearch = ({
    color,
    setColor,
    setColorPickerState,
}) => {

    const [searchQuery, setSearchQuery] = useState('');

    return (
        <div className="col">
            <div className="row mb-2">
                <div className="col-sm-5">Current color:</div> 
                <div className="col-sm-2 rounded" id="current-color" style={{backgroundColor: color}}></div> 
                <i className="fas fa-eye-dropper col-sm-1 offset-sm-1" onClick={() => setColorPickerState(true)}></i>
            </div>
            <input
                id="color-search"
                className="col-12 mb-2 border mx-0 rounded"
                onChange={e => setSearchQuery(e.target.value)}
                value={searchQuery}
                placeholder="Pick a color"
                name='color'
            />
            <div className="col-12  overflow-auto rounded" style={{height:'150px'}}>
            {
                extractMatchingColors(searchQuery).map(colorName => (
                    <div className="row mx-0 my-2" onClick={() => setColor(COLORS[colorName])}>
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
