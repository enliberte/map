import React, {Component} from 'react';
import {connect} from 'react-redux';
import {registerSaga} from "../../../BLL/store/action_creators/auth";
import {closeRegPanel, showRegError} from "../../../BLL/store/action_creators/regPanel";
import {regError} from "../../../BLL/store/selectors/regSelectors";
import RegForm from './regForm/regForm';


class RegPanel extends Component {
    render() {
        return (
            <section className="modal">
                <div className="wrapper">
                    <div className="form-header">
                        <h3 className="modal__title">
                            Регистрация
                        </h3>

                        <a href="#" onClick={this.props.onClose} rel="nofollow" className="link link--close">
                            <i className="material-icons">close</i>
                        </a>
                    </div>
                </div>
                <RegForm onSubmit={(data) => this.props.onSubmit(data)}/>
                {this.props.regError && <span>Ошибка при регистрации</span>}
            </section>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        regError: regError(state)
    }
};


const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit(regData) {
            const {login, password, passwordRepeat, role} = {...regData};
            if (password === passwordRepeat) {
                dispatch(registerSaga(login, password, role));
            } else {
                dispatch(showRegError());
            }
        },
        onClose() {
            dispatch(closeRegPanel());
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(RegPanel);