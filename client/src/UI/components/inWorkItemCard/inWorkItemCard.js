import React, {Component} from 'react';
import {connect} from 'react-redux';
import InWorkItemForm from './inWorkItemForm/inWorkItemForm';
import {updatePlacemark} from "../../../BLL/store/action_creators/placemarks";
import {closeInWorkItemCard} from "../../../BLL/store/action_creators/inWorkItemCard";


class InWorkItemCard extends Component {
    render() {
        return (
            <section className="modal">
                <div className="wrapper">
                    <div className="form-header">
                        <h3 className="modal__title">
                            Взять в работу
                        </h3>

                        <a href="#" onClick={this.props.onClose} rel="nofollow" className="link link--close">
                            <i className="material-icons">close</i>
                        </a>
                    </div>
                </div>
                <InWorkItemForm onSubmit={(data) => this.props.onSubmit(data)}/>
            </section>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit(data) {
            dispatch(updatePlacemark(data));
        },
        onClose() {
            dispatch(closeInWorkItemCard());
        }
    }
};


export default connect(null, mapDispatchToProps)(InWorkItemCard);