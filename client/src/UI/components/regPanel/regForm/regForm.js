import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';


class RegForm extends Component {
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

                <div className="select">
                    <Field className="select__field" component="select" name="role">
                        {this.props.roles.map(
                            (role, index) => <option className="select__option" key={index}>{role}</option>
                        )}
                    </Field>
                    <span className="select__bar"></span>
                    <label className="select__label">Выберите роль</label>
                    <i className="material-icons select__icon">keyboard_arrow_down</i>
                </div>

                <div className="input">
                    <Field className="input__field" type="password" component="input" name="passwordRepeat" required />
                    <span className="input__bar"></span>
                    <label className="input__label">Введите пароль повторно</label>
                </div>

                <input type="submit" className="button button--default" placeholder="Зарегистрироваться"/>

            </form>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        roles: state.roles
    }
};


export default connect(mapStateToProps)(reduxForm({form: 'regForm'})(RegForm));
