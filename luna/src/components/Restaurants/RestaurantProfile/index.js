import React, { Component } from 'react';
import {connect} from 'react-redux';

import {getRestaurantProfile} from '../../../store/reducers/restaurantReducer/action';
import './index.css';
// import restBanner from '../../../assets/images/DSC_0213.png';
import {RestaurantBanner} from '../../../styles/restProfile';
import {RestaurantAddress} from '../../../styles/restProfile';
import addressLogo from '../../../assets/icons/pin.svg';
import hoursLogo from '../../../assets/icons/clock.svg';
import mapImage from '../../../assets/images/map.png';
import phoneLogo from '../../../assets/icons/phone.svg';
import priceLogo from '../../../assets/icons/money.svg'

class RestaurantProfile extends Component {

    componentDidMount = () => {
        const id = this.props.match.params.id;
        this.props.dispatch(getRestaurantProfile(id));
            
    }

    render() {
        return (
           
            <div className='rest_profile'>
                <RestaurantBanner>
                    <div className='description'>{this.props.restaurant.name}</div>
                    <RestaurantAddress>
                        <div className='map'>
                            <img className='mapImage' src={mapImage} alt="address"/>
                        </div>
                        <div className='address'>
                            <p className='text_rest'> <img className='small_logo' src={addressLogo} height='24px' alt="address"/>{this.props.restaurant.street}, {this.props.restaurant.city} </p>
                            <p className='text_rest'> <img className='small_logo' src={phoneLogo} height='24px' alt="phone"/>{this.props.restaurant.phone} </p>
                        </div>
                    
                    </RestaurantAddress>
                </RestaurantBanner>
                <div className='rest_page'>
                    <div className='leftColumn'></div>
                    <div className='rightColumn'>
                        <div className='hours'>
                            <img className='small_logo' src={hoursLogo} alt="time"/>
                            {this.props.restaurant.hours}
                        </div>
                        <div className='price'>
                            <img className='small_logo' src={priceLogo} alt="price"/>
                            Price level: {this.props.restaurant.price}
                            
                        </div>
                    </div>
                </div>
              
            </div>
        )
    }
}

const mapStateToProps = state => {
    
    return {
        restaurant: state.restaurant_data.restaurant
    }
}

export default connect(mapStateToProps)(RestaurantProfile);
