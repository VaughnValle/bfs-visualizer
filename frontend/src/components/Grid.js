import React, { useState, useEffect } from 'react'
import { initialGridState } from '../helpers/Grid';
import Colors from '../constants/Colors';
import '../css/Grid.css';

const Grid = (props) => {

    const [gridState, setGridState] = useState(initialGridState);
    const [mouseDown, setMouseDown] = useState(false);

    const onCellHover = (rowInd, colInd) => {
        if (!mouseDown) return;
        const colorHex = Colors['black'];
        let newGridState = [...gridState];
        newGridState[rowInd][colInd] = colorHex;
        setGridState(newGridState);
    }

    const renderedGrid = ( 
        <>
        {gridState.map((row, rowInd) => <tr>{
            row.map((hex, colInd) => {
            return (
            <td className="grid-cell" 
                style={{backgroundColor: hex}} 
                onMouseOver={() => onCellHover(rowInd, colInd)}>
            </td>
            )
        })
        }</tr>)}
        </>
    )

    return (
        <table className="grid"
            onMouseDown={() => setMouseDown(true)}
            onMouseUp={() => setMouseDown(false)}>
            {
                renderedGrid
            }        
        </table>
    )
}

export default Grid;
