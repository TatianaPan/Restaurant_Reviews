import {SIGNUP, ACTIVATE, SIGNUP_ERROR, ACTIVATION_ERROR} from '../../types';

const initialSignUpData = {
    activated: false,
};

export const signUpReducer = (signUpData = initialSignUpData, action) => {
    switch (action.type) {
        case SIGNUP:
            return {
                ...signUpData,
                sign_up_error: null,
            };
        case SIGNUP_ERROR:
            return {
                ...signUpData,
                sign_up_error: action.payload.error
            };
        case ACTIVATE:
            return {
                ...signUpData,
                activated: true,
            };
        case ACTIVATION_ERROR:
            return {
                ...signUpData,
                activation_error: action.payload.error,
                activated: false,
            };
        default:
            return signUpData;
    }
};
