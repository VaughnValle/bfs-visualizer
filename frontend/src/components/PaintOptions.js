import React from 'react';
import '../css/PaintOptions.css';
import { PAINT, ERASE, FILL } from '../constants/ActionTypes';

const PaintOptions = ({ setActionType }) => {
    return (
        <div className="col border" id="main-container">
            <div className="row justify-content-center py-3">
                <button
                    type="button"
                    className="col-sm-4 btn btn-outline-primary"
                    onClick={() => setActionType(PAINT)}>Paint</button>
            </div>
            <div className="row justify-content-center py-3">
                <button 
                    type="button"
                    className="col-sm-4 btn btn-outline-primary"
                    onClick={() => setActionType(ERASE)}>Erase</button>
            </div>
            <div className="row justify-content-center py-3">
                <button 
                    type="button"
                    className="col-sm-4 btn btn-outline-primary"
                    onClick={() => setActionType(FILL)}>Fill</button>    
            </div>
        </div>
    )
}

export default PaintOptions;
