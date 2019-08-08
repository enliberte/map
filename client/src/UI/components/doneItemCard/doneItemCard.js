import React, {Component} from 'react';
import {connect} from 'react-redux';
import DoneItemForm from './doneItemForm/doneItemForm';
import {updatePlacemarkSaga} from "../../../BLL/store/action_creators/placemarks";
import {closeDoneItemCard} from "../../../BLL/store/action_creators/doneItemCard";


class DoneItemCard extends Component {
    render() {
        return (
            <section className="modal">
                <div className="wrapper">
                    <div className="form-header">
                        <h3 className="modal__title">
                            Выполнить заказ
                        </h3>

                        <a href="#" onClick={this.props.onClose} rel="nofollow" className="link link--close">
                            <i className="material-icons">close</i>
                        </a>
                    </div>
                </div>
                <DoneItemForm onSubmit={(data) => this.props.onSubmit(data)}/>
            </section>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit(data) {
            dispatch(updatePlacemarkSaga(data));
            dispatch(closeDoneItemCard());
        },
        onClose() {
            dispatch(closeDoneItemCard());
        }
    }
};


export default connect(null, mapDispatchToProps)(DoneItemCard);