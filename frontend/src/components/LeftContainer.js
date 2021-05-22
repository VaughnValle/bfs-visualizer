import React from 'react'
import '../css/LeftContainer.css'
import ColorSearch from './ColorSearch';

const LeftContainer = ({ setColor }) => {
    return(
        <div className="col border" id="left-container">
            <div className="row m-4 my-0" id="new-pixel-art">
            <button 
                type="button"
                className="col btn btn-primary"
                onClick={() => window.location.reload()}>New Pixel Art</button>
            </div>
            <div className="row" id="color-search-container">
                <ColorSearch setColor={setColor}/>
            </div>
            <div className="row" id="save-pixel-art">
                <button type="button" className="col btn btn-success m-4 my-0">Save Pixel Art</button>
            </div>
        </div>    
    )
}

export default LeftContainer;
