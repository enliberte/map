import {actions as a} from "../constants";

const auth = (state={}, action) => {
    switch (action.type) {
        case a.SET_AUTH:
            return {
                ...state,
                isAuthorized: true,
                login: action.payload.login,
                role: action.payload.role
            };
        case a.LOGOUT:
            return {
                ...state,
                isAuthorized: false,
                login: '',
                role: ''
            };
        default:
            return state;
    }
};

export default auth;