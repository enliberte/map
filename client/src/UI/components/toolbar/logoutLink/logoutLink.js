import React, {Component} from 'react';
import {connect} from 'react-redux';
import {logoutSaga} from "../../../../BLL/store/action_creators/auth";


class LogoutLink extends Component {
    render() {
        return (
            <a href="#" onClick={this.props.onLogout}>Выйти</a>
        )
    }
}


const mapDispathToProps = (dispatch) => {
    return {
        onLogout() {
            dispatch(logoutSaga());
        }
    }
};


export default connect(null, mapDispathToProps)(LogoutLink);