import React, { useState } from "react";
import { floodFill } from "../helpers/Grid";
import COLORS, { TRANSPARENT } from "../constants/Colors";
import "../css/Grid.css";
import { PAINT, ERASE } from "../constants/ActionTypes";

const Grid = ({
  actionType,
  gridState,
  setGridState,
  color,
  setColor,
  colorPickerState,
  setColorPickerState,
}) => {
  const [mouseDown, setMouseDown] = useState(false);

  const onCellHover = ({ rowInd, colInd, fromCellClick = false }) => {
    if (!mouseDown && !fromCellClick) return;
    let newGridState = [...gridState];
    switch (actionType) {
      case PAINT:
        newGridState[rowInd][colInd] = color;
        break;
      case ERASE:
        newGridState[rowInd][colInd] = COLORS[TRANSPARENT];
        break;
      default:
        newGridState = floodFill({
          gridState: [...gridState],
          color,
          rowInd,
          colInd,
        });
    }
    setGridState([...newGridState]);
  };

  const handleMouseDown = (rowInd, colInd) => {
    if (colorPickerState) {
      setColor(gridState[rowInd][colInd]);
      setColorPickerState(false);
      return;
    }
    setMouseDown(true);
    onCellHover({
      rowInd,
      colInd,
      fromCellClick: true,
    });
  };

  const renderedGrid = (
    <>
      {gridState.map((row, rowInd) => (
        <tr key={rowInd}>
          {row.map((hex, colInd) => {
            return (
              <td
                className="grid-cell"
                style={{ backgroundColor: hex }}
                onMouseDown={() => handleMouseDown(rowInd, colInd)}
                onMouseUp={() => setMouseDown(false)}
                onMouseOver={() => onCellHover({ rowInd, colInd })}
                key={colInd}
              ></td>
            );
          })}
        </tr>
      ))}
    </>
  );

  return (
    <table id="canvas" className="grid col border my-5">
      {renderedGrid}
    </table>
  );
};

export default Grid;
