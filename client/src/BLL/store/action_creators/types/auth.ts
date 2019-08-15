import {ShowAuthErrorAction} from "./authPanel";
import * as a from "../../constants";


export type AuthState = {
    isAuthorized: boolean,
    authError: boolean,
    login: string,
    role: string
}

export type SetAuthData = {
    login: string,
    role: string
}

export type AuthData = {
    login: string
    password: string
}

export type RegisterData = {
    login: string,
    password: string,
    role: string
}

export type SetAuthDataAction = {
    type: typeof a.SET_AUTH,
    payload: SetAuthData
}

export type SetLogoutDataAction = {
    type: typeof a.LOGOUT
}

export type AuthAction = {
    type: typeof a.AUTH_SAGA,
    payload: AuthData
}

export type LogoutAction = {
    type: typeof a.LOGOUT_SAGA
}

export type IsAuthorizedAction = {
    type: typeof a.IS_AUTHORIZED_SAGA
}

export type RegisterAction = {
    type: typeof a.REGISTER_SAGA,
    payload: RegisterData
}
export type AuthActions = SetAuthDataAction | SetLogoutDataAction | ShowAuthErrorAction;