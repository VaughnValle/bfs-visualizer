import React, { useState } from 'react'
import { initialGridState } from '../helpers/Grid';
import '../css/Grid.css';

const Grid = () => {
    const [gridState, setGridState] = useState(initialGridState);
    const renderedGrid = ( 
        <>
        {gridState.map(row => <tr>{
            row.map(cell => <td className="grid-cell"></td>)
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
