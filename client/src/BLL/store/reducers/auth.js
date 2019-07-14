import {actions as a} from "../constants";

const auth = (state={}, action) => {
    switch (action.type) {
        case a.SET_AUTH:
            return {
                ...state,
                login: action.payload.login,
                role: action.payload.role
            };
        default:
            return state;
    }
};

export default auth;