import { TRANSPARENT } from '../constants/Colors';
import { GRID_DIMS } from '../constants/Grid';

const createRowStates = () => {
    let states = [];
    for (let i = 0; i < GRID_DIMS; i++) {
        states.push(TRANSPARENT);
    }
    return states;
}

const createColStates = () => {
    let states = [];
    for (let i = 0; i < GRID_DIMS; i++) {
        states.push(createRowStates());
    }
    return states;
}

const gridMotion = {
    up: { offsetX: -1, offsetY: 0 },
    down: { offsetX: 1, offsetY: 0 },
    left: { offsetX: 0, offsetY: -1 },
    right: { offsetX: 0, offsetY: 1 },
}

const isFillableGridPosition = ({ currentX, currentY }, coloredCells, gridState) => {
    if (currentX < 0 || currentX >= GRID_DIMS) return false;
    if (currentY < 0 || currentY >= GRID_DIMS) return false;
    if (gridState[currentX][currentY] !== TRANSPARENT) return false;
    return !coloredCells.some(cell => currentX === cell.x && currentY === cell.y);
}

export const floodFill = ({
    gridState,
    colorHex,
    rowInd,
    colInd,
}) => {
    const queue = [{ currentX: rowInd, currentY: colInd }];
    const coloredCells = [{ x: rowInd, y: colInd }];
    gridState[rowInd][colInd] = colorHex;
    while (queue.length > 0) {
        const { currentX, currentY } = queue.pop();
        Object.keys(gridMotion).forEach(direction => {
            const { offsetX, offsetY } = gridMotion[direction];
            const newPosition = { currentX: currentX + offsetX, currentY: currentY + offsetY };
            if (isFillableGridPosition(newPosition, coloredCells, gridState)) {
                queue.unshift(newPosition);
                coloredCells.push({ x: newPosition.currentX, y: newPosition.currentY });
                gridState[newPosition.currentX][newPosition.currentY] = colorHex;
            }
        })
    } 
    return gridState;
}

export const initialGridState = createColStates();
