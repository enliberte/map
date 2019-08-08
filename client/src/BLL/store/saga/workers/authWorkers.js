import {put, call} from 'redux-saga/effects';
import {fetchIsAuthorized, fetchLogout, fetchAuth, fetchRegister} from "../../../api/authAPI";
import {setAuthData, setLogoutData} from "../../action_creators/auth";
import {closeAuthPanel, showAuthError} from '../../action_creators/authPanel';
import {closeRegPanel, showRegError} from "../../action_creators/regPanel";


export function *isAuthorized(action) {
	try {
		const response = yield call(fetchIsAuthorized);
		yield put(setAuthData(response.data.login, response.data.role));
	} catch (err) {
		console.log(err);
	}
};

export function *logout(action) {
	try {
		const response = yield call(fetchLogout);
		yield put(setLogoutData());
	} catch (err) {
		console.log(err);
	}
};

export function *auth(action) {
	try {
		const {login, password} = action.payload;
		const response = yield call(fetchAuth, login, password);
		yield put(setAuthData(response.data.login, response.data.role));
        yield put(closeAuthPanel());
	} catch (err) {
		console.log(err);
	}
};

export function *register(action) {
	try {
		const {login, password, role} = action.payload;
		const response = yield call(fetchRegister, login, password, role);
		yield put(setAuthData(response.data.login, response.data.role));
        yield put(closeRegPanel());
	} catch (err) {
		console.log(err);
	}
};