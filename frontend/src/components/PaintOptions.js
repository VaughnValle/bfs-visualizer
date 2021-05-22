import React from 'react';
import '../css/PaintOptions.css';
import { PAINT, ERASE, FILL } from '../constants/ActionTypes';

const PaintOptions = ({ setActionType }) => {
    return (
        <div className="col">
            <div onClick={() => setActionType(PAINT)}>
                Paint
            </div>
            <div onClick={() => setActionType(ERASE)}>
                Erase
            </div>
            <div onClick={() => setActionType(FILL)}>
                Fill
            </div>    
        </div>
    )
}

export default PaintOptions;
