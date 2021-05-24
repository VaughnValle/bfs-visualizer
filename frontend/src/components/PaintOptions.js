import React from 'react';
import '../css/PaintOptions.css';
import { PAINT, ERASE, FILL } from '../constants/ActionTypes';

const PaintOptions = ({ actionType, setActionType }) => {
    return (
        <div className="col" id="main-container">
            <div className="row justify-content-center mb-1">
                <button
                    type="button"
                    className={`col-sm-6 btn btn-outline-primary ${
                        actionType === PAINT && 'active'
                    }`}
                    id="paintBtn"
                    onClick={() => setActionType(PAINT)}>PAINT</button>
            </div>
            <div className="row justify-content-center mb-1">
                <button 
                    type="button"
                    className={`col-sm-6 btn btn-outline-primary ${
                        actionType === ERASE && 'active'
                    }`}
                    id="eraseBtn"
                    onClick={() => setActionType(ERASE)}>ERASE</button>
            </div>
            <div className="row justify-content-center">
                <button 
                    type="button"
                    className={`col-sm-6 btn btn-outline-primary ${
                        actionType === FILL && 'active'
                    }`}
                    id="fillBtn"
                    onClick={() => setActionType(FILL)}>FILL</button>    
            </div>
        </div>
    )
}

export default PaintOptions;
