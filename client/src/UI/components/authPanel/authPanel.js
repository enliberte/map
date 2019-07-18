import React, {Component} from 'react';
import {connect} from 'react-redux';
import {auth} from "../../../BLL/store/action_creators/auth";
import {closeAuthPanel} from "../../../BLL/store/action_creators/authPanel";
import AuthForm from './authForm/authForm';


class AuthPanel extends Component {
    render() {
        return (
            <section className="modal">
                <div className="wrapper">
                    <div className="form-header">
                        <h3 className="modal__title">
                            Авторизация
                        </h3>

                        <a href="#" onClick={this.props.onClose} rel="nofollow" className="link link--close">
                            <i className="material-icons">close</i>
                        </a>
                    </div>
                </div>
                <AuthForm onSubmit={(data) => this.props.onSubmit(data)}/>
            </section>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit(authData) {
            const {login, password} = {...authData};
            dispatch(auth(login, password));
        },
        onClose() {
            dispatch(closeAuthPanel());
        }
    }
};


export default connect(null, mapDispatchToProps)(AuthPanel);