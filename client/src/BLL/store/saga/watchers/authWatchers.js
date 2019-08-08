import {takeEvery} from 'redux-saga/effects';
import {actions as a} from "../../constants";
import {isAuthorized, logout, auth, register} from '../workers/authWorkers';


export function *watchIsAuthorized() {
	yield takeEvery(a.IS_AUTHORIZED_SAGA, isAuthorized);
}

export function *watchLogout() {
	yield takeEvery(a.LOGOUT_SAGA, logout);
}

export function *watchAuth() {
	yield takeEvery(a.AUTH_SAGA, auth);
}

export function *watchRegister() {
	yield takeEvery(a.REGISTER_SAGA, register);
}