const initialState = {
    restaurants: [],
    restaurant: {}
};

export const restaurantsReducer = (state=initialState, action) => {
    switch (action.type) {    
        case 'GET_RESTOS':
            return {
                ...state,
                restaurants: action.payload
            };

        case 'GET_RESTPROFILE':
            
            return {
                ...state,
                restaurant: action.payload
            }
        default:
            return state;
    }
};
