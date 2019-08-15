import * as a from "../constants";
import {AuthAction, IsAuthorizedAction, LogoutAction, RegisterAction, SetAuthDataAction, SetLogoutDataAction} from "./types/auth";


export const setAuthData = (login: string, role: string): SetAuthDataAction => ({type: a.SET_AUTH, payload: {login, role}});

export const setLogoutData = (): SetLogoutDataAction => ({type: a.LOGOUT});

export const isAuthorizedSaga = (): IsAuthorizedAction => ({type: a.IS_AUTHORIZED_SAGA});

export const logoutSaga = (): LogoutAction => ({type: a.LOGOUT_SAGA});

export const authSaga = (login: string, password: string): AuthAction => ({type: a.AUTH_SAGA, payload: {login, password}});

export const registerSaga = (login: string, password: string, role: string): RegisterAction => ({type: a.REGISTER_SAGA, payload: {login, password, role}});
