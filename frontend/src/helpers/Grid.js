import { GRID_DIMS } from '../constants/Grid';

const createRowStates = () => {
    let states = [];
    for (let i = 0; i < GRID_DIMS; i++) {
        states.push(null);
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

export const initialGridState = createColStates();
