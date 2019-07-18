import React, {Component} from 'react';
import {connect} from 'react-redux';
import {openAuthPanel} from "../../../../BLL/store/action_creators/authPanel";


class AuthLink extends Component {
    render() {
        return (
            <a href="#" onClick={this.props.onOpenAuthPanel}>Войти</a>
        )
    }
}


const mapDispathToProps = (dispatch) => {
    return {
        onOpenAuthPanel() {
            dispatch(openAuthPanel());
        }
    }
};


export default connect(null, mapDispathToProps)(AuthLink);