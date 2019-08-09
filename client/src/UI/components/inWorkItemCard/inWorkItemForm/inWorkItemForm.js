import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {getEditedData, getLevels} from "../../../../BLL/store/selectors/editItemSelectors";


class InWorkItemForm extends Component {
    render() {
        return (
            <form className="form" onSubmit={this.props.handleSubmit}>

                <div className="input">
                    <Field className="input__field" component="input" name="volume" required />
                    <span className="input__bar"></span>
                    <label className="input__label">Объем</label>
                    <i className="text__icon">м3</i>
                </div>

                <div className="input">
                    <Field className="input__field" component="input" name="square" required />
                    <span className="input__bar"></span>
                    <label className="input__label">Площадь</label>
                    <i className="text__icon">м2</i>
                </div>

                <div className="select">
                    <Field className="select__field" component="select" name="level">
                        {this.props.levels.map(
                            (level, index) => <option className="select__option" key={index}>{level}</option>
                        )}
                    </Field>
                    <span className="select__bar"></span>
                    <label className="select__label">Выберите класс опасности</label>
                    <i className="material-icons select__icon">keyboard_arrow_down</i>
                </div>

                <div className="input">
                    <Field className="input__field" component="input" name="price" required />
                    <span className="input__bar"></span>
                    <label className="input__label">Стоимость вывоза</label>
                    <i className="text__icon">руб.</i>
                </div>

                <input type="submit" className="button button--default" placeholder="Отправить"/>

            </form>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        levels: getLevels(state),
        initialValues: getEditedData(state)
    }
};


export default connect(mapStateToProps)(reduxForm({form: 'inWorkItemForm'})(InWorkItemForm));