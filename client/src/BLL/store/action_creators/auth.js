import {actions as a} from "../constants";
import * as axios from 'axios';
import {closeAuthPanel, showAuthError} from './authPanel';


export const setAuthData = (login, role) => ({type: a.SET_AUTH, payload: {login, role}});

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

export const auth = (login, password) => (dispatch) => {
    axios.post('/', {method: 'AUTH', params: {login, password}})
        .then((response) => {
            console.log(response.status);
            if (response.status !== 200) {
                if (response.status === 401) {
                    dispatch(showAuthError());
                }
                throw Error(response.statusText);
            }
            return response;
        })
        .then((response) => {
            dispatch(setAuthData(response.data.login, response.data.role));
            dispatch(closeAuthPanel());
        })
};
