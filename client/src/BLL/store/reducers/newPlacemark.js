import {actions as a} from '../constants';


const newPlacemark = (state={}, action) => {
    switch (action.type) {
        case a.ADD_PLACEMARK:
            return {
                ...state,
                coords: action.payload.coords,
                address: action.payload.address,
                isDisplayed: true
            };
        case a.CANCEL_PLACEMARK:
            return {
                ...state,
                isDisplayed: false
            };
        default:
            return state;
    }
};


export default newPlacemark;