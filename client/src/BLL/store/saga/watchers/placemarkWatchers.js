import {takeEvery} from 'redux-saga/effects';
import {actions as a} from "../../constants";
import {setPlacemarks, savePlacemark, updatePlacemark, deletePlacemark, addNewPlacemarkWithAddress, setNewAddressAndCoords, editCoords} from '../workers/placemarkWorkers';


export function *watchSetPlacemarks() {
	yield takeEvery(a.SET_PLACEMARKS_SAGA, setPlacemarks);
}

export function *watchSavePlacemark() {
	yield takeEvery(a.SAVE_PLACEMARK_SAGA, savePlacemark);
}

export function *watchUpdatePlacemark() {
	yield takeEvery(a.UPDATE_PLACEMARK_SAGA, updatePlacemark);
}

export function *watchDeletePlacemark() {
	yield takeEvery(a.DELETE_PLACEMARK_SAGA, deletePlacemark);
}

export function *watchAddNewPlacemarkWithAddress() {
	yield takeEvery(a.ADD_PLACEMARK_SAGA, addNewPlacemarkWithAddress);
}

export function *watchSetNewAddressAndCoords() {
	yield takeEvery(a.SET_NEW_ADDRESS_SAGA, setNewAddressAndCoords);
}

export function *watchEditCoords() {
	yield takeEvery(a.EDIT_COORDINATES_SAGA, editCoords);
}