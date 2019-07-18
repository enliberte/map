import React, {Component} from 'react';
import {connect} from 'react-redux';
import {openRegPanel} from "../../../../BLL/store/action_creators/regPanel";


class RegLink extends Component {
    render() {
        return (
            <a href="#" onClick={this.props.onOpenRegPanel}>Регистрация</a>
        )
    }
}


const mapDispathToProps = (dispatch) => {
    return {
        onOpenRegPanel() {
            dispatch(openRegPanel());
        }
    }
};


export default connect(null, mapDispathToProps)(RegLink);