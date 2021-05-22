import COLORS from '../constants/Colors.js';

const extractMatchingColor = (searchVal) => {
    const formattedSearchVal = searchVal.toUpperCase();
    return Object.keys(COLORS)
        .filter((key) => (key.toUpperCase().indexOf(formattedSearchVal) != -1))
}

export default extractMatchingColor;
