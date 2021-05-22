import React, { useState } from 'react'
import '../css/LeftContainer.css'

const LeftContainer = () => {
    return(
        <div class=".container border bg-black" id="left-container">
            <div class=" row justify-content-center align-items-center" id="new-pixel-art">
            <button type="button" class="col-sm-5 btn btn-primary">New Pixel Art</button>
            </div>
            <div class="row justify-content-center align-items-center" id="test">
            <button type="button" class="col-sm-5 btn btn-primary">test</button>
            </div>
            <div class="row justify-content-center align-items-center" id="save-pixel-art">
            <button type="button" class="col-sm-5 btn btn-danger">Save Pixel Art</button>
            </div>
        </div>    
    )
}

export default LeftContainer;
