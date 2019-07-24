import {actions as a} from '../constants';


const newPlacemark = (state={}, action) => {
    switch (action.type) {
        case a.ADD_PLACEMARK:
            return {
                ...state,
                coords: action.payload.coords,
                address: action.payload.address,
                pictures: [],
                isDisplayed: true
            };
        case a.CANCEL_PLACEMARK:
            return {
                ...state,
                isDisplayed: false
            };
        case a.SET_NEW_ADDRESS:
            return {
                ...state,
                address: action.payload
            };
        case a.SET_NEW_COORDINATES:
            return {
                ...state,
                coords: action.payload
            };
        case a.ADD_PICTURES_TO_NEW_PLACEMARK:
            return {
                ...state,
                pictures: [...state.pictures, ...action.payload]
            };
        case a.DEL_PICTURE_FROM_NEW_PLACEMARK:
            return {
                ...state,
                pictures: state.pictures.filter(picture => picture.name !== action.payload)
            };
        default:
            return state;
    }
};


export default newPlacemark;