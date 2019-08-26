import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from "react-router-dom";

import {RestaurantCardStyle, RestaurantHeader, RestaurantName,
    RestaurantSub, RestaurantStars, RestaurantImage} from '../../../styles/cards';
import stars from '../../../assets/images/stars.png';

class RestaurantCard extends Component {
    render() {
        return (
            <RestaurantCardStyle>
                <RestaurantHeader>
                    <RestaurantName>{this.props.restaurant.name}</RestaurantName>
                    <RestaurantSub>{this.props.restaurant.street}</RestaurantSub>
                    <RestaurantSub>{this.props.restaurant.country}, {this.props.restaurant.city}</RestaurantSub>
                    <RestaurantStars src={stars} alt=''/>
                </RestaurantHeader>
                <RestaurantImage src={this.props.restaurant.photo} alt=''/>
            </RestaurantCardStyle>

        // Code without backend
        
        //     <RestaurantCardStyle>
        //     <RestaurantHeader>
        //         <RestaurantName>Name</RestaurantName>
        //         <RestaurantSub>Address</RestaurantSub>
        //         <RestaurantSub>{this.props.restaurant.country}, {this.props.restaurant.city}</RestaurantSub>
        //         <RestaurantStars src={stars} alt=''/>
        //     </RestaurantHeader>
        //     <RestaurantImage src={this.props.restaurant.photo} alt=''/>
        // </RestaurantCardStyle>
        )
    }
}

export default connect()(RestaurantCard); 
