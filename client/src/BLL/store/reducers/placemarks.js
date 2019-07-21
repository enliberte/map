import {actions as a} from '../constants';


const placemarks = (state=[], action) => {
    switch (action.type) {
        case a.SET_PLACEMARKS:
            return action.payload;
        case a.SAVE_PLACEMARK:
            return [
                ...state,
                action.payload
            ];
        case a.DELETE_PLACEMARK:
            return state.filter(placemark => placemark.id !== action.payload);
        default:
            return state;
    }
};


export default placemarks;