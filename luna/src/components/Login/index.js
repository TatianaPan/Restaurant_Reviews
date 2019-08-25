import React, {useState} from 'react';
import {userLogin, userLogout} from "../../store/reducers/loginReducer/actions";
import {connect} from "react-redux";

const LoginForm = ({authenticated, userLogin, userLogout, error}) => {
    const [currentUsername, currentUsernameHandler] = useState('');
    const [currentPassword, currentPasswordHandler] = useState('');

    const loginHandler = (e) => {
        e.preventDefault();
        userLogin(currentUsername, currentPassword);
        currentUsernameHandler('');
        currentPasswordHandler('');
    };

    const logoutHandler = (e) => {
        e.preventDefault();
        userLogout();
    };

    return <>
        {(!authenticated)
            ? <form onSubmit={loginHandler}>
                <input
                    type='text'
                    placeholder='Email address'
                    value={currentUsername}
                    onChange={(e) => currentUsernameHandler(e.currentTarget.value)}/>
                <input type='password'
                       placeholder='Password'
                       value={currentPassword}
                       onChange={(e) => currentPasswordHandler(e.currentTarget.value)}/>
                <button>Sign In</button>
                {(error)
                    ? <span>{error}</span>
                    : <></>
                }
            </form>
            : <button onClick={logoutHandler}>Logout</button>
        }
    </>
};

const mapStateToProps = (state) => {    // lastProps also available here
    return {
        error: state.authData.error,
        authenticated: state.authData.authenticated,
    }
};

const mapDispatchToProps = (dispatch, getState) => {
    return {
        userLogin: (currentUsername, currentPassword) =>
            dispatch(userLogin(dispatch, getState, currentUsername, currentPassword)),
        userLogout: () => dispatch(userLogout(dispatch, getState)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
