import React, {Component} from 'react';
import {connect} from 'react-redux';


class AuthLink extends Component {
    render() {
        return (
            <a href="#">{this.props.text}</a>
        )
    }
}


const mapStatesToProps = (state) => {
    return {
        text: state.auth.isAuthorized ? state.auth.login : 'Войти'
    }
};


const mapDispathToProps = (dispatch) => {
    return {}
};


export default connect(mapStatesToProps, mapDispathToProps)(AuthLink);