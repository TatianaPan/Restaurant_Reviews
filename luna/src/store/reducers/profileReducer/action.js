import axios from 'axios';

import { GET_PROFILE } from "../../types";

const URL = `https://andromeda.propulsion-learn.ch`;

export const get_profile = data => {
    return {
        type: GET_PROFILE,
        payload: data
    }
};

export const getProfile = () => async (dispatch, getState) => {
    // const token = getState().loginReducer.token
    // const config = {
    //   headers: {
    //     Authorization: `Bearer ${token}`
    //   }
    const config = {
        headers: ''
    };

    
    const response = await axios.get(`${URL}/api/users/`, config);
    dispatch(get_profile(response.data));
}