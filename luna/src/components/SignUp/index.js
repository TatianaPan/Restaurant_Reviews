import React, {useState} from 'react';
import {connect} from "react-redux";
import {userSignUp, userActivation} from "../../store/reducers/signupReducer/actions";
import {StrongButton} from "../../styles/base_components";

const SignUpForm = ({userSignUp, userActivation, sign_up_error, activation_error}) => {
    const [currentEmail, currentEmailHandler] = useState('');
    const [currentFirst, currentFirstHandler] = useState('');
    const [currentLast, currentLastHandler] = useState('');
    const [currentPhone, currentPhoneHandler] = useState('');
    const [currentLocation, currentLocationHandler] = useState('');
    const [currentDescription, currentDescriptionHandler] = useState('');
    const [currentPassword, currentPasswordHandler] = useState('');
    const [currentRepeat, currentRepeatHandler] = useState('');

    const [hasCode, hasCodeHandler] = useState(false);
    const [currentCode, currentCodeHandler] = useState('');

    const signUpHandler = (e) => {
        e.preventDefault();
        userSignUp(currentEmail, currentFirst, currentLast, currentPhone, currentLocation, currentDescription, currentPassword);
        if (!sign_up_error) {
            currentEmailHandler('');
            currentFirstHandler('');
            currentLastHandler('');
            currentPhoneHandler('');
            currentLocationHandler('');
            currentDescriptionHandler('');
            currentPasswordHandler('');
            currentRepeatHandler('');
            hasCodeHandler(true);
        } else {
            currentPasswordHandler('');
            currentRepeatHandler('');
        }
    };

    const activationHandler = (e) => {
        e.preventDefault();
        userActivation(currentCode);
        if (activation_error) {
            currentCodeHandler('');
        }
    };

    return <>
        {(!hasCode || sign_up_error)
            ? <>
                <form onSubmit={signUpHandler}>
                    <input
                        type='email'
                        placeholder='Email Address'     // Will be used as username
                        value={currentEmail}
                        onChange={(e) => currentEmailHandler(e.currentTarget.value)}/>
                    <input
                        type='text'
                        placeholder='First Name'
                        value={currentFirst}
                        onChange={(e) => currentFirstHandler(e.currentTarget.value)}/>
                    <input
                        type='text'
                        placeholder='Last Name'
                        value={currentLast}
                        onChange={(e) => currentLastHandler(e.currentTarget.value)}/>
                    <input
                        type='text'
                        placeholder='Phone Number'
                        value={currentPhone}
                        onChange={(e) => currentPhoneHandler(e.currentTarget.value)}/>
                    <input
                        type='text'
                        placeholder='Location'
                        value={currentLocation}
                        onChange={(e) => currentLocationHandler(e.currentTarget.value)}/>
                    <input
                        type='text'
                        placeholder='Short Profile Description'
                        value={currentDescription}
                        onChange={(e) => currentDescriptionHandler(e.currentTarget.value)}/>
                    <input type='password'
                           placeholder='Password'
                           value={currentPassword}
                           onChange={(e) => currentPasswordHandler(e.currentTarget.value)}/>
                    <input type='password'
                           placeholder='Repeat password'
                           value={currentRepeat}
                           onChange={(e) => currentRepeatHandler(e.currentTarget.value)}/>
                    <StrongButton>Finish Registration</StrongButton>
                </form>
                <button onClick={() => hasCodeHandler(true)}>Already got your activation code?</button>
            </>
            : <>
                <form onSubmit={activationHandler}>
                    <input
                        type='text'
                        placeholder='Activation Code'
                        value={currentCode}
                        onChange={(e) => currentCodeHandler(e.currentTarget.value)}/>
                    <StrongButton>Activate</StrongButton>
                </form>
                <button onClick={() => hasCodeHandler(false)}>Back</button>
            </>
        }
        {(sign_up_error)
            ? <span>{sign_up_error}</span>
            : <></>
        }
        {(activation_error)
            ? <span>{activation_error}</span>
            : <></>
        }
    </>
};

const mapStateToProps = (state ) => {  // lastProps also available here
    let sign_up_error = null;
    let activation_error = null;
    if(state.signUpData) {
        sign_up_error = state.signUpData.sign_up_error;
        activation_error = state.signUpData.activation_error;
    }
    return {
        sign_up_error: sign_up_error,
        activation_error: activation_error,
    }
};


const mapDispatchToProps = (dispatch, getState) => {
    return {
        userSignUp: (email, first, last, phone, location, description, password) =>
            dispatch(userSignUp(dispatch, getState, email, first, last, phone, location, description, password)),
        userActivation: (activationCode) => dispatch(userActivation(dispatch, getState, activationCode)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
