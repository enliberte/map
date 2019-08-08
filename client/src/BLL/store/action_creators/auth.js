import {actions as a} from "../constants";


export const setAuthData = (login, role) => ({type: a.SET_AUTH, payload: {login, role}});

export const setLogoutData = () => ({type: a.LOGOUT});

export const isAuthorizedSaga = () => ({type: a.IS_AUTHORIZED_SAGA});

export const logoutSaga = () => ({type: a.LOGOUT_SAGA});

export const authSaga = (login, password) => ({type: a.AUTH_SAGA, payload: {login, password}});

export const registerSaga = (login, password, role) => ({type: a.REGISTER_SAGA, payload: {login, password, role}});
