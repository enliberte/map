import {actions as a} from '../constants';


const currentPlacemark = (state='', action) => {
    switch (action.type) {
        case a.SET_CURRENT_PLACEMARK:
            return action.payload;
        default:
            return state;
    }
};


export default currentPlacemark;