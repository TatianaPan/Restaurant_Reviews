import {SEARCH} from '../../types';

const initialSearchData = {
    search: '',
};

export const searchReducer = (searchData = initialSearchData, action) => {
    switch (action.type) {
        case SEARCH:
            return {
                ...searchData,
                search: action.payload.search
            };
        default:
            return searchData;
    }
};
