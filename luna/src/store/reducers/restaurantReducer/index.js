import photo1 from '../../../assets/images/bar-buffet-12-1.png';
import photo2 from '../../../assets/images/bar-buffet-12-2.png';
import photo3 from '../../../assets/images/bar-buffet-12-3.png';
import photo4 from '../../../assets/images/bar-buffet-12-4.png';



// const initialState = {
//     restaurants: [],
//     restaurant: {}
// };

const initialState = {
    restaurants: [{id: '1', name: 'Gustav', country: 'Switzerland', city: 'Zurich', price: '$$ - $$$', photo: `${photo1}`}, 
    {id: '2', name: 'Sternen', country: 'Switzerland', city: 'Zurich', price: '$$ - $$$', photo: `${photo2}`}, 
    {id: '3', name: 'Haus zum Rueden', country: 'Switzerland', city: 'Zurich', price: '$$ - $$$', photo: `${photo3}`},
    {id: '4', name: 'Tremondi', country: 'Switzerland', city: 'Zurich', price: '$$ - $$$', photo: `${photo4}`}],
    restaurant: {}
};

// export const restaurantsReducer = (state=initialState, action) => {
//     switch (action.type) {    
//         case 'GET_RESTOS':
//             return {
//                 ...state,
//                 restaurants: action.payload
//             };

//         case 'GET_RESTPROFILE':
            
//             return {
//                 ...state,
//                 restaurant: action.payload
//             }
//         default:
//             return state;
//     }
// };

export const restaurantsReducer = (state=initialState, action) => {
    switch (action.type) {    
        case 'GET_RESTOS':
            return {
                ...state,
                restaurants: [{id: '1', name: 'Samurai', country: 'Switzerland', city: 'Zurich', price: '$ - $$'}, 
                {id: '1', name: 'Samurai', country: 'Switzerland', city: 'Zurich', price: '$ - $$'}, 
                {id: '1', name: 'Samurai', country: 'Switzerland', city: 'Zurich', price: '$ - $$'}]
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
