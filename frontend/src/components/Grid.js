import React, { useState } from 'react'
import { initialGridState, floodFill } from '../helpers/Grid';
import Colors, { TRANSPARENT } from '../constants/Colors';
import '../css/Grid.css';
import { PAINT, ERASE } from '../constants/ActionTypes';

const Grid = ({ actionType, gridState, setGridState }) => {

    const [mouseDown, setMouseDown] = useState(false);

    const onCellHover = ({
        rowInd,
        colInd,
        fromCellClick = false
    }) => {
        if (!mouseDown && !fromCellClick) return;
        let newGridState;
        let colorHex;
        switch (actionType) {
            case PAINT: 
                colorHex = Colors['black'];
                newGridState = [...gridState];
                newGridState[rowInd][colInd] = colorHex;
                break;
            case ERASE: 
                colorHex = Colors[TRANSPARENT];
                newGridState = [...gridState];
                newGridState[rowInd][colInd] = colorHex;
                break;
            default: 
                colorHex = Colors['black'];
                newGridState = floodFill({
                    gridState: [ ...gridState ],
                    colorHex,
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
        <table className="grid">
            {
                renderedGrid
            }        
        </table>
    )
}

export default Grid;
