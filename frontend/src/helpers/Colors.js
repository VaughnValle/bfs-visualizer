import COLORS, { COLOR_NOT_FOUND } from '../constants/Colors.js';

const indexOf = (base, query) => {
    for(let baseIndex = 0; baseIndex < base.length; baseIndex++) {
        for(let queryIndex = 0; queryIndex < query.length; queryIndex++) {
          if (base[baseIndex+queryIndex] !== query[queryIndex]) 
            break;
          if (queryIndex === query.length - 1) 
            return baseIndex;
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
