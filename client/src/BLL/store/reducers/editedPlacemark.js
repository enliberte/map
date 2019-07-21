import {actions as a} from '../constants';


const editedPlacemark = (state={}, action) => {
    switch (action.type) {
        case a.EDIT_PLACEMARK:
            return action.payload;
        case a.SET_IN_WORK_PLACEMARK:
            return {
                ...action.payload,
                state: 'В работе'
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