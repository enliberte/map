import {actions as a} from "../constants";

const auth = (state={}, action) => {
    switch (action.type) {
        case a.SET_LOGIN:
            return {
                ...state,
                login: action.payload
            };
        case a.SET_PASSWORD:
            return {
                ...state,
                password: action.payload
            };
        case a.SET_AUTH:
            return {
                ...state,
                isAuthorized: true,
                login: action.payload.login,
                role: action.payload.role
            };
        default:
            return state;
    }
};

export default auth;