import {actions as a} from "../constants";
import * as axios from 'axios';
import {closeAuthPanel, showAuthError} from './authPanel';
import {closeRegPanel, showRegError} from "./regPanel";


export const setAuthData = (login, role) => ({type: a.SET_AUTH, payload: {login, role}});

export const setLogoutData = () => ({type: a.LOGOUT});

export const isAuthorized = () => (dispatch) => {
    axios.post('/', {method: 'IS_AUTHORIZED'})
        .then((response) => {
            if (response.status !== 200) {
                throw Error(response.statusText);
            }
            return response;
        })
        .then((response) => {
            dispatch(setAuthData(response.data.login, response.data.role));
        })
};

export const logout = () => (dispatch) => {
    axios.post('/', {method: 'LOGOUT'})
        .then((response) => {
            if (response.status !== 200) {
                throw Error(response.statusText);
            }
            return response;
        })
        .then((response) => {
            dispatch(setLogoutData());
        })
};

export const auth = (login, password) => (dispatch) => {
    axios.post('/', {method: 'AUTH', params: {login, password}})
        .then((response) => {
            if (response.status !== 200) {
                dispatch(showAuthError());
            }
            return response;
        })
        .then((response) => {
            dispatch(setAuthData(response.data.login, response.data.role));
            dispatch(closeAuthPanel());
        })
};

export const register = (login, password) => (dispatch) => {
    axios.post('/', {method: 'REGISTER', params: {login, password}})
        .then((response) => {
            if (response.status !== 200) {
                dispatch(showRegError());
            }
            return response;
        })
        .then((response) => {
            dispatch(setAuthData(response.data.login, response.data.role));
            dispatch(closeRegPanel());
        })
};
