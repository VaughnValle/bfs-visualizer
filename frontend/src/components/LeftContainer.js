import React from 'react'
import '../css/LeftContainer.css'
import ColorSearch from './ColorSearch';

const LeftContainer = ({ setColor }) => {
    return(
        <div class=".container border bg-black" id="left-container">
            <div class=" row justify-content-center align-items-center" id="new-pixel-art">
            <button 
                type="button"
                class="col-sm-5 btn btn-primary"
                onClick={() => window.location.reload()}> New Pixel Art</button>
            </div>
            <div class="row justify-content-center align-items-center" id="test">
                <ColorSearch setColor={setColor}/>
            </div>
            <div class="row justify-content-center align-items-center" id="save-pixel-art">
            <button type="button" class="col-sm-5 btn btn-danger">Save Pixel Art</button>
            </div>
        </div>    
    )
}

export default LeftContainer;
