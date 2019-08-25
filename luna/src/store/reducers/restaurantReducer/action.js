import axios from 'axios';

const URL = `https://andromeda.propulsion-learn.ch`;

export const get_list = (restaurants) => {
    
    return {
        type: 'GET_RESTOS',
        payload: restaurants
    }
};

export const getRestaurants = () => async (dispatch, getState) => {
    const config = {
        headers: ''
    };
    const response = await axios.get(`${URL}/api/restaurants/`, config);
    const restaurants = response.data;
    await dispatch(get_list(restaurants));
};


export const getRestProfile = (restaurant) => {
    return {
        type: 'GET_RESTPROFILE',
        payload: restaurant
    }
}

export const getRestaurantProfile = (id) => async (dispatch, getState) => {
   
    const config = {
        headers: ''
    };
    const response = await axios.get(`${URL}/api/restaurants/${id}`, config);
    const restaurant = response.data;
    dispatch(getRestProfile(restaurant));
}
