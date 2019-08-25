import { GET_PROFILE } from "../../types";

const initialState = {
    restaurants: []
};

export const profileReducer = (state=initialState, action) => {
    switch (action.type) {    
        case GET_PROFILE:
            return {
                ...state,
                data: action.payload
            };
    
        default:
            return state;
    }
}