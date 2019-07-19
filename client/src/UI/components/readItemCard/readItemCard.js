import React, {Component} from 'react';
import {connect} from 'react-redux';

import {setFiltersArchive, setFiltersDone, setFiltersInWork, setFiltersNew}
from "../../../BLL/store/action_creators/filtrationPanel";
import {classes, colors as c} from "../../../BLL/store/constants";
import {setPosition} from "../../../BLL/store/action_creators/map";
import {closeReadItemCard} from "../../../BLL/store/action_creators/readItemCard";


class ReadItemCard extends Component {
    getTrashTypesStr(placemark) {
        let trashTypes = [];
        trashTypes.push(placemark.construction ? 'Строительный мусор': false);
        trashTypes.push(placemark.glass ? 'Стекло': false);
        trashTypes.push(placemark.household ? 'Бытовые отходы': false);
        trashTypes.push(placemark.paper ? 'Бумага': false);
        trashTypes.push(placemark.paper ? 'Пластик': false);
        trashTypes.push(placemark.household ? 'Металл': false);
        trashTypes.push(placemark.other ? 'Прочее': false);
        return trashTypes.filter(trashType => trashType).join(', ');
    }

    render() {
        return (
            <section id="" className="modal">
                <div className="form form--application application">

                    <div className="form-header">
                        <h3 className="modal__title">
                            Заявка от {this.props.placemark.author}
                        </h3>
                        <a href="#" rel="nofollow" className="link link--close" onClick={this.props.onClose}>
                            <i className="material-icons">close</i>
                        </a>
                    </div>

                    <h3 className="application__title">
                        {this.props.placemark.address}
                    </h3>

                    <ul className="list list--information">
                        <li>Тип нарушения: {this.props.placemark.violationtype}</li>
                        {this.getTrashTypesStr(this.props.placemark) && <li>Типы отходов: {this.getTrashTypesStr(this.props.placemark)}</li>}
                        {this.props.placemark.administration && <li>Администрация: {this.props.placemark.administration}</li>}
                        {this.props.placemark.level && <li>Угроза: {this.props.placemark.level}</li>}
                        {this.props.placemark.price && <li>Стоимость вывоза: {this.props.placemark.price}</li>}
                    </ul>

                    {this.props.placemark.comment &&
                    <div className="application__comments">
                        <p className="application__comments-label">Комментарий</p>
                        <p className="application__comments-text">{this.props.placemark.comment}</p>
                    </div>}

                    {this.props.auth.isAuthorized &&
                    <div className="form-information">
                        <button className="button button--info">
                            Редактировать
                        </button>
                    </div>}

                    {this.props.auth.role === 'Оператор' &&
                    <button className="button button--default button--success">
                        Взять в работу
                    </button>}


                </div>
            </section>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        placemark: state.placemarks.filter(placemark => placemark.id === state.currentPlacemark)[0]
    }
};


const mapDispatchToProps = (dispatch) => {
    return {
        onClose() {
            dispatch(closeReadItemCard());
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(ReadItemCard);