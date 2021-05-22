import React, { useState } from 'react'
import { floodFill } from '../helpers/Grid';
import COLORS, { TRANSPARENT } from '../constants/Colors';
import '../css/Grid.css';
import { PAINT, ERASE } from '../constants/ActionTypes';

const Grid = ({
    actionType,
    gridState,
    setGridState,
    color,
}) => {

    const [mouseDown, setMouseDown] = useState(false);

    const onCellHover = ({
        rowInd,
        colInd,
        fromCellClick = false
    }) => {
        if (!mouseDown && !fromCellClick) return;
        let newGridState;
        switch (actionType) {
            case PAINT: 
                newGridState = [...gridState];
                newGridState[rowInd][colInd] = color
                break;
            case ERASE: 
                newGridState = [...gridState];
                newGridState[rowInd][colInd] = COLORS[TRANSPARENT]
                break;
            default: 
                newGridState = floodFill({
                    gridState: [ ...gridState ],
                    color,
                    rowInd,
                    colInd,
                })
        }
        setGridState(newGridState);
    }

    const renderedGrid = ( 
        <>
        {gridState.map((row, rowInd) => <tr key={rowInd}>{
            row.map((hex, colInd) => {
            return (
            <td className="grid-cell" 
                style={{backgroundColor: hex}}
                onMouseDown={() => {
                    setMouseDown(true);
                    onCellHover({
                        rowInd,
                        colInd,
                        fromCellClick: true,
                    });
                }}
                onMouseUp={() => setMouseDown(false)}
                onMouseOver={() => onCellHover({rowInd, colInd})}
                key={colInd}>
            </td>
            )
        })
        }</tr>)}
        </>
    )

    return (
        <table className="grid col border">
            {
                renderedGrid
            }        
        </table>
    )
}

export default Grid;
