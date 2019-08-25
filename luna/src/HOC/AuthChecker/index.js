import React, { Component } from 'react';
import { connect } from 'react-redux';

export default WrappedComponent => {
    class AuthChecker extends Component {
        componentDidMount() {
            if (!this.props.authenticated) {
                this.props.history.push('/')
            }
        }

        componentDidUpdate() {
            if (!this.props.authenticated) {
                this.props.history.push('/')
            }
        }

        componentWillUpdate(nextProps) {
            if (!nextProps.authenticated) {
                this.props.history.push('/')
            }
        }

        render() {
            return <WrappedComponent { ...this.props }/>
        }
    }

    function mapStateToProps(state, lastProps) {
        return {
            authenticated: state.authData.authenticated,
        }
    }

    return connect(mapStateToProps)(AuthChecker);
}
