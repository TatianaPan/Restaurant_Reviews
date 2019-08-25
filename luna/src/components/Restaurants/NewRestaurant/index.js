import React, { Component } from 'react';
import {connect} from 'react-redux';

import {newRestaurant} from '../../../store/reducers/newRestaurantreducer/action';
import './index.css'

class NewRestaurant extends Component {

    state = {
        name: '',
        country: '',
        street: '',
        city: '',
        zip: '',
        website: '',
        phone: '',
        email: '',
        hours: '',
        price: '',
       

    }

    create = (e) => {
        e.preventDefault();
        this.props.dispatch(newRestaurant(this.state));
        //this.setState({content: ''})
    }

    handleUserInput = e => {
        const { name, value } = e.target;
        this.setState({
          [name]: value
        })
    };
    

    render() {
        return (
            <div className='new_rest'>
                <div className='text_rest'>CREATE NEW RESTAURANT</div>
                <form className='new_rest_form' onSubmit={this.create}>
                    
                    <input 
                    className='input'
                    type='text'
                    id='name'
                    placeholder="Name"
                    name='name'
                    value={this.state.name}
                    onChange={this.handleUserInput} />

                    {/* <input 
                    className='input'
                    type='text'
                    placeholder="Category"
                    name='category'
                    value={this.state.category}
                    onChange={this.handleUserInput} /> */}

                    <input 
                    className='input'
                    type='text'
                    placeholder="Country"
                    name='country'
                    value={this.state.country}
                    onChange={this.handleUserInput} />

                    <input 
                    className='input'
                    type='text'
                    placeholder="Street"
                    name='street'
                    value={this.state.street}
                    onChange={this.handleUserInput} />

                    <input 
                    className='input'
                    type='text'
                    placeholder="City"
                    name='city'
                    value={this.state.city}
                    onChange={this.handleUserInput} />

                    <input 
                    className='input'
                    type='text'
                    placeholder="Zip"
                    name='zip'
                    value={this.state.zip}
                    onChange={this.handleUserInput} />

                    <input 
                    className='input'
                    type='text'
                    placeholder="Website"
                    name='website'
                    value={this.state.website}
                    onChange={this.handleUserInput} />

                    <input 
                    className='input'
                    type='tel'
                    placeholder="Phone"
                    name='phone'
                    // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                    value={this.state.phone}
                    onChange={this.handleUserInput} />

                    <input 
                    className='input'
                    type='email'
                    placeholder="Email"
                    name='email'
                    value={this.state.email}
                    onChange={this.handleUserInput} />

                    <input 
                    className='input'
                    type='text'
                    placeholder="Opening hours"
                    name='hours'
                    value={this.state.hours}
                    onChange={this.handleUserInput} />

                    <input 
                    className='input'
                    type='text'
                    placeholder="Price level"
                    name='price'
                    value={this.state.price}
                    onChange={this.handleUserInput} />
                    <button className='create-button'>Create</button>
                </form>
            </div>
        )
    }
}

export default connect()(NewRestaurant);
