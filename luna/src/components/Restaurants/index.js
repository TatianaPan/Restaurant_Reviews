import React, { Component } from 'react';
import {connect} from 'react-redux';

import {getRestaurants} from '../../store/reducers/restaurantReducer/action';
import RestaurantCard from './RestaurantCard/index'
import './index.css'

class Restaurants extends Component {

    componentDidMount = () => {
        this.props.dispatch(getRestaurants());
    };

    render() {
        return (
            <div>
                <div className='restaurants'>

                    {   (this.props.restaurants) ?
                        this.props.restaurants.map(restaurant => {
                            
                        return <RestaurantCard 
                        key={restaurant.id}
                        restaurant={restaurant}/>
                    }) : <></>
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    
    return {
        restaurants: state.restaurant_data.restaurants
    }
};

export default connect(mapStateToProps)(Restaurants);
