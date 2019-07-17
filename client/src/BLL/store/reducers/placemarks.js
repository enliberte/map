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
        default:
            return state;
    }
};


export default placemarks;