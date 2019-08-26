import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import store from './store';

import Home from './components/Home';
import Users from './components/Users/index'
import LoginForm from './components/Login';
import SignUpForm from './components/SignUp';
import AuthChecker from './HOC/AuthChecker';
import {login} from "./store/reducers/loginReducer/actions";
import Restaurants from "./components/Restaurants"
import NewRestaurant from "./components/Restaurants/NewRestaurant";
import SearchPage from "./components/Search";
import RestaurantProfile from './components/Restaurants/RestaurantProfile';

const token = localStorage.getItem('token');
const refresh = localStorage.getItem('refresh');
if (token && refresh) {
    store.dispatch(login({token: token, refresh: refresh}));
}
// TODO: implement token refresh flow if token has expired

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Home>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/login' component={LoginForm}/>
                    <Route exact path='/signup' component={SignUpForm}/>
                    <Route exact path='/search' component={SearchPage}/>
                    <Route exact path='/users' component={Users}/>
                    <Route exact path='/restaurants/id/:id' component={RestaurantProfile}/>
                    <Route exact path='/restaurants/new' component={AuthChecker(NewRestaurant)}/>
                </Switch>
            </Home>
        </BrowserRouter>
    </Provider>, document.getElementById('root'));

serviceWorker.unregister();
