import React, {Component} from 'react';
import {connect} from 'react-redux';

import {setFiltersArchive, setFiltersDone, setFiltersInWork, setFiltersNew}
from "../../../BLL/store/action_creators/filtrationPanel";
import {classes, colors as c} from "../../../BLL/store/constants";
import {setPosition} from "../../../BLL/store/action_creators/map";


class FiltrationPanel extends Component {
    render() {
        return (
            <section id="filtration--panel" className="modal">
                <div className="wrapper wrapper--applications">

                    <div className="form-header">
                        <h3 className="modal__title">Заявки</h3>
                    </div>

                    <div className="checkbox">
                        <input type="checkbox"
                               checked={this.props.filters['Новая']}
                               onChange={this.props.onSetFiltersNew}
                               id="checkbox-id-1"
                               className="checkbox__field" />
                        <label htmlFor="checkbox-id-1" className="checkbox__label">Новые</label>
                    </div>

                    <div className="checkbox">
                        <input type="checkbox"
                               checked={this.props.filters['В работе']}
                               onChange={this.props.onSetFiltersInWork}
                               id="checkbox-id-2"
                               className="checkbox__field" />
                        <label htmlFor="checkbox-id-2" className="checkbox__label">В работе</label>
                    </div>

                    <div className="checkbox">
                        <input type="checkbox"
                               checked={this.props.filters['Выполнена']}
                               onChange={this.props.onSetFiltersDone}
                               id="checkbox-id-3"
                               className="checkbox__field" />
                        <label htmlFor="checkbox-id-3" className="checkbox__label">Выполнены</label>
                    </div>

                    <div className="checkbox">
                        <input type="checkbox"
                               name=""
                               checked={this.props.filters['В архиве']}
                               onChange={this.props.onSetFiltersArchive}
                               value=""
                               id="checkbox-id-3"
                               className="checkbox__field" />
                        <label htmlFor="checkbox-id-3" className="checkbox__label">Архив
                        </label>
                    </div>

                    <ul className="list">
                        {this.props.placemarks.map(
                            placemark => (
                                <li
                                    className={`list__item ${classes[placemark.state]}`}
                                    onClick={() => this.props.onSetPosition(placemark.latitude, placemark.longitude)}>
                                    <i className="list__indicator"></i>
                                    <a href="#" className="list__link">{placemark.address}
                                        <i className="material-icons list__item-icon">chevron_right</i>
                                    </a>
                                </li>
                            )
                        )}
                    </ul>

                </div>
            </section>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        filters: state.filters,
        placemarks: state.placemarks.filter(placemark => state.filters[placemark.state])
    }
};


const mapDispatchToProps = (dispatch) => {
    return {
        onSetFiltersNew(event) {
            dispatch(setFiltersNew(event.target.checked));
        },
        onSetFiltersInWork(event) {
            dispatch(setFiltersInWork(event.target.checked));
        },
        onSetFiltersDone(event) {
            dispatch(setFiltersDone(event.target.checked));
        },
        onSetFiltersArchive(event) {
            dispatch(setFiltersArchive(event.target.checked));
        },
        onSetPosition(latitude, longitude) {
            dispatch(setPosition(latitude, longitude));
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(FiltrationPanel);