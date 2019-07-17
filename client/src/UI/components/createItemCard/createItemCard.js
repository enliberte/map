import React, {Component} from 'react';
import {connect} from 'react-redux';
import CreateItemCardForm from './createItemForm/createItemForm';
import {closeCreateItemCard} from "../../../BLL/store/action_creators/createItemCard";
import {cancelNewPlacemark, savePlacemark} from "../../../BLL/store/action_creators/placemarks";


class CreateItemCard extends Component {
    render() {
        return (
            <section className="modal">
                <div className="wrapper">
                    <div className="form-header">
                        <h3 className="modal__title">
                            Сообщить
                            <br />о нарушении
                        </h3>

                        <a href="#" onClick={this.props.onClose} rel="nofollow" className="link link--close">
                            <i className="material-icons">close</i>
                        </a>
                    </div>
                </div>
                <CreateItemCardForm onSubmit={(data) => this.props.onSubmit(data, this.props.coords)}/>
            </section>
        )
    }
}


const mapStatesToProps = (state) => {
    return {
        coords: state.newPlacemark.coords
    }
};


const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit(data, coords) {
            data.coords = coords;
            dispatch(savePlacemark(data));
        },
        onClose() {
            dispatch(cancelNewPlacemark());
            dispatch(closeCreateItemCard());
        }
    }
};


export default connect(mapStatesToProps, mapDispatchToProps)(CreateItemCard);