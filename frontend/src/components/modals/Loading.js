import React from 'react'
import loadGIF from '../../images/wait.gif';
import '../../css/Modal.css'

export const Loading = (props) => {
    if (!props.show) {
        return null;
    } 
    return (
        <div className="modal-div">
            <img src={loadGIF} className="popup"></img>
        </div>
    )
}

export default Loading;
