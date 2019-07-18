import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';


class AuthForm extends Component {
    render() {
        return (
            <form className="form" onSubmit={this.props.handleSubmit}>

                <div className="input">
                    <Field className="input__field" component="input" name="login" required />
                    <span className="input__bar"></span>
                    <label className="input__label">Введите логин</label>
                </div>

                <div className="input">
                    <Field className="input__field" type="password" component="input" name="password" required />
                    <span className="input__bar"></span>
                    <label className="input__label">Введите пароль</label>
                </div>

                <button className="button button--default">Войти</button>

            </form>
        )
    }
}


export default (reduxForm({form: 'authForm'})(AuthForm));
