import React, {Component} from 'react';
import {connect} from 'react-redux';
import {auth, setLogin, setPassword} from "../../../BLL/store/action_creators/auth";


class AuthPanel extends Component {
    render() {
        return (
            <form onSubmit={() => this.props.onSubmit(this.props.login, this.props.password)}>
                <input value={this.props.login} onChange={this.props.onSetLogin} type="text"/>
                <input value={this.props.password} onChange={this.props.onSetPassword} type="password"/>
                <input type="submit"/>
            </form>
        )
    }
}


const mapStatesToProps = (state) => {
    return {
        login: state.auth.login,
        password: state.auth.password
    }
};


const mapDispatchToProps = (dispatch) => {
    return {
        onSetLogin(e) {
            dispatch(setLogin(e.target.value));
        },
        onSetPassword(e) {
            dispatch(setPassword(e.target.value));
        },
        onSubmit(login, password) {
            event.preventDefault();
            dispatch(auth(login, password));
        }
    }
};


export default connect(mapStatesToProps, mapDispatchToProps)(AuthPanel);