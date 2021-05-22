import COLORS from '../constants/Colors.js';

const COLORS_DISPLAY_MAX = 5;

export const extractMatchingColors = (searchVal) => {
    const formattedSearchVal = searchVal.toUpperCase();
    return Object.keys(COLORS)
        .filter((key) => (key.toUpperCase().indexOf(formattedSearchVal) != -1))
        .splice(0, COLORS_DISPLAY_MAX);
}
