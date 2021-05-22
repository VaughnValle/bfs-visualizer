import COLORS, { COLOR_NOT_FOUND } from '../constants/Colors.js';

const indexOf = (string, query) => {
    for(let stringIndex = 0; stringIndex < string.length; stringIndex++) {
        for(let queryIndex = 0; queryIndex < query.length; queryIndex++) {
          if (string[stringIndex+queryIndex] !== query[queryIndex]) 
            break;
          if (queryIndex === query.length - 1) 
            return stringIndex;
        }
    }
    return COLOR_NOT_FOUND;
}

export const extractMatchingColors = (searchVal) => {
    const formattedSearchVal = searchVal.toUpperCase();
    return searchVal ? Object.keys(COLORS)
      .filter(key => indexOf(key.toUpperCase(), formattedSearchVal) !== COLOR_NOT_FOUND) :
      Object.keys(COLORS);
}
