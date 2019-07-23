import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {
    addPicturesToNewPlacemark,
    delPictureFromNewPlacemark,
    setNewAddressAndCoords
} from "../../../../BLL/store/action_creators/placemarks";


class CreateItemForm extends Component {
    render() {
        return (
            <form className="form" enctype="multipart/form-data" onSubmit={this.props.handleSubmit}>

                <div className="input">
                    <Field className="input__field" component="input" name="address" onChange={this.props.onSetAddress} required />
                    <span className="input__bar"></span>
                    <label className="input__label">Введите адрес</label>
                    <i className="material-icons location__icon">location_on</i>
                </div>

                <div className="select">
                    <Field className="select__field" component="select" name="violationtype">
                        {this.props.violationTypes.map(
                            (violationtype, index) => <option className="select__option" key={index}>{violationtype}</option>
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

                <div className="button button--outline button--upload">
                    <input type="file" className="button__field" onChange={this.props.onAddFiles} multiple />
                    <i className="material-icons button__icon">add_photo_alternate</i>
                    <span className="button__text">Прикрепить файл</span>
                </div>

                <div className="downloaded">
                    {this.props.pictures.map(
                        (picture, index) => (
                            <div className="downloaded-item">
                                <a href="#" className="link" onClick={() => this.props.onDeleteFile(picture.name)}>
                                    <i className="material-icons link__icon">close</i>
                                </a>
                                <span className="downloaded-item__file-name">{picture.name}</span>
                            </div>
                        )
                    )}
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
        pictures: state.newPlacemark.pictures,
        initialValues: {address: state.newPlacemark.address, pictures: null}
    }
};


const mapDispatchToProps = (dispatch) => {
    return {
        onSetAddress(event) {
            dispatch(setNewAddressAndCoords(event.target.value));
        },
        onAddFiles(event) {
            dispatch(addPicturesToNewPlacemark(event.target.files));
        },
        onDeleteFile(name) {
            dispatch(delPictureFromNewPlacemark(name))
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({form: 'createItemForm'})(CreateItemForm));