import React, { Component } from 'react'
import {connect} from 'react-redux'

import {getProfile} from '../../store/reducers/profileReducer/action'
import UserCard from '../Users/UserCard'

class Users extends Component {

    componentDidMount = () => {
        this.props.dispatch(getProfile());          
    };

    render() {              
        return (
            <div className='main'>
                <div className='user-card-list'>
                {
                    this.props.data ?
                    this.props.data.results.map(user_data => {
                        return <UserCard 
                        key={user_data.id}
                        firstName={user_data.first_name}
                        lastName={user_data.last_name}

                        />
                    })
                : null
                }
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
  return {
    data: state.profileReducer.data,
  }
}


export default connect(mapStateToProps)(Users)

               
