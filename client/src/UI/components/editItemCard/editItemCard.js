import React, {Component} from 'react';
import {connect} from 'react-redux';
import EditItemCardForm from './editItemForm/editItemForm';
import {closeEditItemCard} from "../../../BLL/store/action_creators/editItemCard";
import {updatePlacemark} from "../../../BLL/store/action_creators/placemarks";


class EditItemCard extends Component {
    render() {
        return (
            <section className="modal">
                <div className="wrapper">
                    <div className="form-header">
                        <h3 className="modal__title">
                            Редактирование
                        </h3>

                        <a href="#" onClick={this.props.onClose} rel="nofollow" className="link link--close">
                            <i className="material-icons">close</i>
                        </a>
                    </div>
                </div>
                <EditItemCardForm onSubmit={(data) => this.props.onSubmit(data, this.props.latitude, this.props.longitude)}/>
            </section>
        )
    }
}


const mapStatesToProps = (state) => {
    return {
        latitude: state.editedPlacemark.latitude,
        longitude: state.editedPlacemark.longitude
    }
};


const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit(data, latitude, longitude) {
            data.latitude = latitude;
            data.longitude = longitude;
            dispatch(updatePlacemark(data));
        },
        onClose() {
            dispatch(closeEditItemCard());
        }
    }
};


export default connect(mapStatesToProps, mapDispatchToProps)(EditItemCard);