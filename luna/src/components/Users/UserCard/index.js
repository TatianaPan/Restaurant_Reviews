import React, { Component } from 'react';
import { connect } from 'react-redux';

import './index.css'
const profilePic = require('../../../styles/profile.png')

class UserCard extends Component {
    render() {
        return (
            <div className='card'>
                <div className='card-header'>
                    <div className="picture">
                    <img src={profilePic} width="50px" height='50px'/>
                    </div>
                    {this.props.firstName}{' '}
                    {this.props.lastName}
                </div>
                <div className='card-main main-description'>
                    <p>“In your life you only get to do so many things and right now we’ve chosen to do this,
                        so let’s make it great.” ― Steve Jobs
                </p>
                </div>
            </div>
        )
    }
}



export default connect()(UserCard); 