import axios from 'axios';
import {SEARCH} from '../../types';

const base_URL = 'https://andromeda.propulsion-learn.ch/api/';

export const search = search => {
    return {
        type: SEARCH,
        payload: search
    }
};

export const getRestaurantSearchResults = (dispatch, getState, searchText) => {
    return async dispatch => {
        let url = `${base_URL}restaurants/?search=${searchText}`;
        try {
            const response = await axios({
                method: 'get',
                url: url,
            });
            return response.data;
        } catch (e) {
            let errorMessage = 'Error while fetching restaurants';
            // check where to show error message
            console.log('UNHANDLED error in getRestaurantSearchResults:', errorMessage, e);
            return null;
        }
    }
};

export const getUserSearchResults = (dispatch, getState, searchText) => {
    return async dispatch => {
        let url = `${base_URL}users/?search=${searchText}`;
        try {
            const response = await axios({
                method: 'get',
                url: url,
            });
            return response.data.results;
        } catch (e) {
            let errorMessage = 'Error while fetching users';
            // check where to show error message
            console.log('UNHANDLED error in getUserSearchResults:', errorMessage, e);
            return null;
        }
    }
};
