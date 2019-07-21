import {actions as a} from '../constants';


const editedPlacemark = (state={}, action) => {
    switch (action.type) {
        case a.EDIT_PLACEMARK:
            return action.payload;
        case a.EDIT_COORDINATES:
            return {
                ...state,
                latitude: action.payload.coords[0],
                longitude: action.payload.coords[1]
            };
        default:
            return state;
    }
};


export default editedPlacemark;