import * as a from "../constants";
import {AuthActions, AuthState} from "../action_creators/types/auth";

const initialState: AuthState = {
    isAuthorized: false,
    authError: false,
    login: '',
    role: ''
};

const auth = (state: AuthState = initialState, action: any): AuthState => {
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
        case a.SHOW_AUTH_ERROR:
            return {
                ...state,
                authError: true
            };    
        default:
            return state;
    }
};

export default auth;