import React, {Component} from 'react';
import {withRouter, Link} from "react-router-dom";
import {connect} from 'react-redux';
import {StrongButtonLeft, StrongButtonRight} from "../../styles/base_components";

import lunaLogo from '../../assets/logo.svg';
import './index.css';


class Header extends Component {

    render() {
        const loginHandler = () => {
            this.props.history.push('/login')
        };

        const signupHandler = () => {
            this.props.history.push('/signup')
        };

        return (<div className='header-wrapper'>
                <div className="header">
                    <div className='luna_logo'>
                        <img src={lunaLogo} height="24px" alt="Luna logo"/>
                    </div>
                    <nav className='header_right'>
                        <div className='link-div'><Link className='link' to='/'>Home</Link></div>
                        <div className='link-div'><Link className='link' to='/search'>Search</Link></div>
                        <div className='link-div'><Link className='link' to='/me/'>Profile</Link></div>
                        <StrongButtonLeft onClick={signupHandler}>SIGNUP</StrongButtonLeft>
                        <StrongButtonRight onClick={loginHandler}>LOGIN</StrongButtonRight>
                    </nav>
                </div>
            </div>
        )
    }
}

export default withRouter(connect()(Header));
