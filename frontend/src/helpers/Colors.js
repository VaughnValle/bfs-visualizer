import COLORS from '../constants/Colors.js';

export const extractMatchingColors = (searchVal) => {
    const formattedSearchVal = searchVal.toUpperCase();
    return Object.keys(COLORS)
        .filter((key) => (key.toUpperCase().indexOf(formattedSearchVal) != -1))
}
