import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {setNewAddressAndCoords} from "../../../../BLL/store/action_creators/placemarks";


class CreateItemForm extends Component {
    render() {
        return (
            <form className="form" onSubmit={this.props.handleSubmit}>

                <div className="input">
                    <Field className="input__field" component="input" name="address" onChange={this.props.onSetAddress} required />
                    <span className="input__bar"></span>
                    <label className="input__label">Введите адрес</label>
                    <i className="material-icons location__icon">location_on</i>
                </div>

                <div className="select">
                    <Field className="select__field" component="select" name="violationType">
                        {this.props.violationTypes.map(
                            (violationType, index) => <option className="select__option" key={index}>{violationType}</option>
                        )}
                    </Field>
                    <span className="select__bar"></span>
                    <label className="select__label">Выберите нарушения</label>
                    <i className="material-icons select__icon">keyboard_arrow_down</i>
                </div>

                <h3 className="modal__sub-title">Выберите вид мусора:</h3>
                <div className="checkbox">
                    <Field component="input" type="checkbox" name="plastic" id="checkbox-id-1" className="checkbox__field" />
                    <label htmlFor="checkbox-id-1" className="checkbox__label">Пластик</label>
                </div>

                <div className="checkbox">
                    <Field component="input" type="checkbox" name="metal" id="checkbox-id-2" className="checkbox__field" />
                    <label htmlFor="checkbox-id-2" className="checkbox__label">Металл</label>
                </div>

                <div className="checkbox">
                    <Field component="input" type="checkbox" name="glass" id="checkbox-id-3" className="checkbox__field" />
                    <label htmlFor="checkbox-id-3" className="checkbox__label">Стекло</label>
                </div>

                <div className="checkbox">
                    <Field component="input" type="checkbox" name="paper" id="checkbox-id-4" className="checkbox__field" />
                    <label htmlFor="checkbox-id-4" className="checkbox__label">Бумага</label>
                </div>

                <div className="checkbox">
                    <Field component="input" type="checkbox" name="household" id="checkbox-id-5" className="checkbox__field" />
                    <label htmlFor="checkbox-id-5" className="checkbox__label">Бытовые отходы</label>
                </div>

                <div className="checkbox">
                    <Field component="input" type="checkbox" name="construction" id="checkbox-id-6" className="checkbox__field" />
                    <label htmlFor="checkbox-id-6" className="checkbox__label">Строительный мусор</label>
                </div>

                <div className="checkbox">
                    <Field component="input" type="checkbox" name="other" id="checkbox-id-7" className="checkbox__field" />
                    <label htmlFor="checkbox-id-7" className="checkbox__label">Прочее</label>
                </div>

                <div className="textarea">
                    <Field component="textarea" name="comment" className="textarea__field" placeholder="Введите комментарий" />
                    <span className="textarea__bar"></span>
                </div>

                <input type="submit" className="button button--default" placeholder="Отправить"/>

            </form>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        violationTypes: state.violationTypes,
        initialValues: {coords: state.newPlacemark.coords, address: state.newPlacemark.address}
    }
};


const mapDispatchToProps = (dispatch) => {
    return {
        onSetAddress(event) {
            dispatch(setNewAddressAndCoords(event.target.value));
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({form: 'createItemForm'})(CreateItemForm));