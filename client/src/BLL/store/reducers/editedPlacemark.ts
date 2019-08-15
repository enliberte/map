import * as a from '../constants';
import {EditActions, PlacemarkData} from "../action_creators/types/placemarks";

const initialState: PlacemarkData = {
    id: '',
    address: '',
    latitude: 0,
    longitude: 0,
    comment: '',
    construction: false,
    glass: false,
    household: false,
    metal: false,
    other: false,
    paper: false,
    plastic: false,
    violationtype: '',
    state: 'Новая',
    administration: '',
    price: 0,
    level: 0,
    author: '',
    volume: 0,
    square: 0
};


const editedPlacemark = (state: PlacemarkData = initialState, action: any): PlacemarkData => {
    switch (action.type) {
        case a.EDIT_PLACEMARK:
            return action.payload;
        case a.SET_IN_WORK_PLACEMARK:
            return {
                ...action.payload,
                state: 'В работе'
            };
        case a.SET_DONE_PLACEMARK:
            return {
                ...action.payload,
                state: 'Выполнена'
            };
        case a.EDIT_COORDINATES:
            return {
                ...state,
                latitude: action.payload[0],
                longitude: action.payload[1]
            };
        default:
            return state;
    }
};


export default editedPlacemark;