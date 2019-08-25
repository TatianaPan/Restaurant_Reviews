import {combineReducers} from 'redux';
import {restaurantsReducer} from './restaurantReducer';
import loginReducer from "./loginReducer";
import {profileReducer} from './profileReducer/index';
import {signUpReducer} from "./signupReducer";
import {searchReducer} from "./searchReducer";


export const reducer = combineReducers({
    restaurant_data: restaurantsReducer,
    authData: loginReducer,
    signUpData: signUpReducer,
    searchData: searchReducer,
    profileReducer
});
