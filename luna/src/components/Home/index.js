import React from 'react';
import {Link, withRouter} from "react-router-dom";
import {connect} from "react-redux";

import Header from '../Header';
import SearchBar from '../SearchBar';
import {SearchBanner, SubHeader, Underline} from '../../styles/home_layout';
import Restaurants from '../Restaurants';
import facebookLogo from '../../assets/icons/facebook.svg';
import twitterLogo from '../../assets/icons/twitter.svg';
import googleLogo from '../../assets/icons/googleplus.svg';
import instagramLogo from '../../assets/icons/instagram.svg';
import './index.css';

const Home = ({children, location}) => {
    return (
        <div className="Home">
            <Header/>
            
                
                <SearchBanner>
                    <SearchBar/>
                </SearchBanner>

                    <SubHeader>
                        <span>BEST RATED RESTAURANTS</span>
                        <Underline/>
                    </SubHeader>
            
            <div>
                <Restaurants />
            </div>
            <div className='footer'>
                <div className='footer-upper'>
                    <div className='footer_left'>
                        <Link className='text' to='/'>About Us</Link>
                        <Link className='text' to='/'>Press</Link>
                        <Link className='text' to='/'>Blog</Link>
                        <Link className='text' to='/'>iOS</Link>
                        <Link className='text' to='/'>Android</Link>
                    </div>
                    <div className='footer_right'>
                        <img className='logos' src={facebookLogo} height="24px" alt="fb"/>
                        <img className='logos' src={twitterLogo} height="24px" alt="twitter"/>
                        <img className='logos' src={googleLogo} height="24px" alt="google"/>
                        <img className='logos' src={instagramLogo} height="24px" alt="instagram"/>
                    </div>
                </div>
                <div className='footer-lower'>
                    <span>© Copyright Luna 2018</span>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state, lastProps) => {
    return {
        children: lastProps.children,
    };
};

export default withRouter(connect(mapStateToProps, null)(Home));

