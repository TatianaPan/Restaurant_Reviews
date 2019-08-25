import axios from 'axios'
import {LOGIN, LOGOUT, ERROR} from "../../types";

const base_URL = 'https://andromeda.propulsion-learn.ch/api/';

export const login = token_data => {
    return {
        type: LOGIN,
        payload: token_data
    }
};

export const error = error => {
    return {
        type: ERROR,
        payload: error
    }
};

export const logout = () => {
    return {
        type: LOGOUT
    }
};

export const userLogin = (dispatch, getState, username, password) => {
    return async dispatch => {

        if (username && password) {
            const url = `${base_URL}token/`;
            const headers = new Headers({
                'Content-type': 'application/json',
            });
            const data = {
                username: username,
                password: password
            };
            let config = {
                headers,
                data
            };
            try {
                const response = await axios.post(url, null, config);
                let token = response.data.access;
                let refresh = response.data.refresh;
                localStorage.setItem('token', token);
                localStorage.setItem('refresh', refresh);
                dispatch(login({token, refresh}));
            } catch (e) {
                let errorMessage = 'Wrong email or password';
                localStorage.clear();
                dispatch(error({error: errorMessage}));
            }
        } else {
            let errorMessage = "Email or password not provided";
            localStorage.clear();
            dispatch(error({error: errorMessage}));
        }
    }
};

export const userLogout = (dispatch) => {   // getState also available here
    localStorage.clear();
    return dispatch(logout());
};

