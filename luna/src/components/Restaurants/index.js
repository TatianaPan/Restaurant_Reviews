import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getRestaurants } from '../../store/reducers/restaurantReducer/action';
import RestaurantCard from './RestaurantCard/index'
import './index.css'

class Restaurants extends Component {

    componentDidMount = () => {
        this.props.dispatch(getRestaurants());
    };

    addNewRestHandler = () => {
        this.props.history.push('/restaurants/new')
    };

    render() {
        return (
            <div className='main-wrapper'>
                <div className='restaurants'>
                    {/* {   (this.props.restaurants) ?
                        this.props.restaurants.map(restaurant => {
                            
                        return <RestaurantCard 
                        key={restaurant.id}
                        restaurant={restaurant}/>
                    }) : <></>
                    } */}

                    {(this.props.restaurants) ?
                        this.props.restaurants.map(restaurant => {

                            return <RestaurantCard
                                key={restaurant.id}
                                restaurant={restaurant} />
                        }) : <></>
                    }
                </div>
                <div className='center-button'>
                    <button onClick={this.addNewRestHandler} className='add-new-button'>Add new</button>
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
