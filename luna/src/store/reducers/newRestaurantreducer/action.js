import axios from 'axios';


const URL = `https://andromeda.propulsion-learn.ch`;


export const newRestaurant = (data) => async (dispatch, getState) => {
    const token = getState().authData.token;
    const config = {
        headers : {
            Authorization : `Bearer ${token}`,
        }
    };
    // second argument should be DATA, then CONFIG, DATA can be empty string
    const response = await axios.post(`${URL}/api/restaurants/new/`, data, config);
    //await dispatch(getFeed());
    return response;

}