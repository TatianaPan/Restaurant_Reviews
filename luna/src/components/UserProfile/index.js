import React, { Component } from 'react';
import './index.css';
import profilepic from '../../assets/images/Profile Picture.png';
import reviews from '../../assets/icons/star.svg';
import stars from '../../assets/images/stars.png';
import comments from '../../assets/icons/comment.svg';
import restaurant from '../../assets/icons/restaurant.svg';
import editlogo from '../../assets/icons/edit.svg';


class UserProfile extends Component {

    state = {
        reviews: true,
        comments: false,
        restaurants: false,

    }

    tabsHandler = () => {
        this.setState({
            reviews: false,
            comments: true,
            restaurants: false})
    }

    render() {
        return (
            <div className='user-profile-wrapper'>
                <div className='user-profile-banner'></div>
                <div className='user-ptofile-main'>
                    <div className='profile-sidebar'>
                        <img src={profilepic} alt='profile' />
                        <h3>Laurent's profile</h3>
                        <div onClick={this.handleClick} className='reviews'>
                            <img src={reviews} alt='review-logo' />
                            <span className='sidebar-text'>Reviews</span>
                        </div>
                        <div onClick={this.tabsHandler} className='reviews comments'>
                            <img src={comments} alt='review-logo' />
                            <span className='sidebar-text'>Comments</span>
                        </div>
                        <div className='reviews'>
                            <img src={restaurant} alt='review-logo' />
                            <span className='sidebar-text'>Restaurants</span>
                        </div>
                        <div className='reviews'>
                            <img src={editlogo} alt='review-logo' />
                            <span className='sidebar-text'>Edit profile</span>
                        </div>
                    </div>
                    
                    <div className='user-profile-content'>
                        <h2 className='headings-text'>REVIEWS</h2>
                        <div className='review-card'>
                            <div className='review-name-section'>
                                <div className='review-name'>Läderach Chocolatier Suiesse</div>
                                <div className='review-date'>01.02.2018</div>
                            </div>
                            <img src={stars} width='150px' />
                            <div className='review-text'>This location at the Bahnhofstrasse is quite friendly and easily
                            located across the street from the train station. The people there seem to be quite good and
                            helpful in their service. </div>
                        </div>
                        <div className='review-card'>
                            <div className='review-name-section'>
                                <div className='review-name'>Kindli</div>
                                <div className='review-date'>10.07.2018</div>
                            </div>
                            <img src={stars} width='150px' />
                            <div className='review-text'>Very nice space exuding a high end ambiance.  The outdoor setting in a picturesque 
                            alley makes it ideal for a quiet, romantic dinner. Food and service was excellent, 
                            and costs in line with general Zurich restaurant prices which tend to be high. A great experience indeed. </div>
                        </div>
                    </div>
                    
                    <div className='user-description'>
                        <h3 className='headings-text'>ABOUT LAURENT</h3>
                        <div className='location'>
                            <h3>Location</h3>
                            <p className='description-text'>Zurich, CH</p>
                        </div>
                        <div className='location'>
                            <h3>Luna member since</h3>
                            <p className='description-text'>April 2018</p>
                        </div>
                        <div className='location'>
                            <h3>Things I love</h3>
                            <p className='description-text'>Cats, books, music</p>
                        </div>
                        <div className='location'>
                            <h3>Description</h3>
                            <p className='description-text'>I'm professional photographer with an eye for details in every thing I 
                                do in my live. Every time a pass by a nice restaurant i have to stop and take notes</p>
                        </div>


                    </div>
                </div>

            </div>
        )
    }
}

export default UserProfile;
