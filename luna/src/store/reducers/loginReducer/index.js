import {
    LOGIN,
    LOGOUT,
    ERROR,
} from '../../types';

const initialAuthData = {
    authenticated: false,
    error: null,
};

const loginReducer = (authData = initialAuthData, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...initialAuthData,
                token: action.payload.token,
                refresh: action.payload.refresh,
                authenticated: true,
            };
        case ERROR:
            return {
                ...authData,
                error: action.payload.error
            };
        case LOGOUT:
            return {
                ...initialAuthData
            };
        default:
            return authData;
    }
};

export default loginReducer;
