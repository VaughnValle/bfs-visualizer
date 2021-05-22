import COLORS from '../constants/Colors.js';

const extractMatchingColor = (searchVal) => {
    const matchingColors = [];
    const formattedSearchVal = searchVal.toUpperCase();
    Object.keys(COLORS).forEach(key => {
        if (key.toUpperCase().indexOf(formattedSearchVal) != -1){
            matchingColors.push(key);
        }
    });
    return matchingColors;
}

export default extractMatchingColor;
