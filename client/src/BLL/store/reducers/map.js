import {actions as a} from "../constants";

const map = (state={}, action) => {
    switch (action.type) {
        case a.SET_POSITION:
            return {
                latitude: action.payload.latitude,
                longitude: action.payload.longitude
            };
        default:
            return state;
    }
};

export default map;