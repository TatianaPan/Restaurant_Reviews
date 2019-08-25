import axios from 'axios';
import {SIGNUP, ACTIVATE, SIGNUP_ERROR, ACTIVATION_ERROR} from '../../types';

const base_URL = 'https://andromeda.propulsion-learn.ch/api/';

export const signup = () => {
    return {
        type: SIGNUP,
    }
};

const activate = () => {
    return {
        type: ACTIVATE,
    }
};

const signUpError = error => {
    return {
        type: SIGNUP_ERROR,
        payload: error
    }
};

const activationError = error => {
    return {
        type: ACTIVATION_ERROR,
        payload: error
    }
};


export const userSignUp = (dispatch, getState, email, first, last, phone, location, profile_description, password) => {
    return async dispatch => {
        if (email && first && last && password) {
            const url = `${base_URL}users/registration/`;
            const headers = new Headers({
                'Content-type': 'application/json',
            });
            const data = {    // TODO: replace with corresponding parameters
                password: password,
                first_name: first,
                last_name: last,
                email: email,
                phone: phone,
                location: location,
                profile_description: profile_description,
            };
            let config = {
                headers,
                data
            };
            try {
                await axios.post(url, null, config);
                dispatch(signup());
                return true;
            } catch (e) {
                let errorMessage = 'Invalid sign-up data';
                dispatch(signUpError({error: errorMessage}));
                return false;
            }
        } else {
            let errorMessage = 'Email, First/Name and Password fields required';
            dispatch(signUpError({error: errorMessage}));
            return false;
        }
    }
};

export const userActivation = (dispatch, getState, activationCode) => {
    return async dispatch => {
        if (activationCode !== '') {
            const url = `${base_URL}users/activate/${activationCode}/`;
            const headers = new Headers({
                'Content-type': 'application/json',
            });
            const config = {
                headers,
            };
            try {
                await axios.post(url, null, config);
                dispatch(activate());
                return true;
            } catch (e) {
                let errorMessage = 'Invalid activation code';
                dispatch(activationError({error: errorMessage}));
                return false;
            }
        }
    }
};
