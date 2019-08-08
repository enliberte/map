import {put, call} from 'redux-saga/effects';
import {API_KEY} from "../../constants";
import {fetchSavePlacemark, fetchUpdatePlacemark, fetchDeletePlacemark, fetchAddress, fetchCoords, fetchPlacemarks} from "../../../api/placemarksAPI";
import {addNewPlacemark, addPlacemarkToStore, cancelNewPlacemark, updatePlacemarkInStore, deletePlacemarkFromStore, setNewCoordinates, setEditedCoordinates, setPlacemarksInStore} from "../../action_creators/placemarks";
import {closeReadItemCard} from "../../action_creators/readItemCard";
import {closeCreateItemCard, openCreateItemCard} from "../../action_creators/createItemCard";
import {setPosition} from "../../action_creators/map";
import {change} from "redux-form";


const getCoords = (response) => response.data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ').map(c => +c);


export function *setPlacemarks(action) {
	try {
		const response = yield call(fetchPlacemarks);
		yield put(setPlacemarksInStore(response.data));
	} catch (err) {
		console.log(err);
	}
};

export function *savePlacemark(action) {
	try {
		const response = yield call(fetchSavePlacemark, action.payload);
		yield put(addPlacemarkToStore(response.data));
		yield put(closeCreateItemCard());
		yield put(cancelNewPlacemark());
	} catch (err) {
		console.log(err);
	}
};

export function *updatePlacemark(action) {
	try {
		const response = yield call(fetchUpdatePlacemark, action.payload);
		yield put(updatePlacemarkInStore(response.data));
	} catch (err) {
		console.log(err);
	}
};

export function *deletePlacemark(action) {
	try {
		const response = yield call(fetchDeletePlacemark, action.payload);
		yield put(closeReadItemCard());
		yield put(deletePlacemarkFromStore(response.data.id));
	} catch (err) {
		console.log(err);
	}
};

export function *addNewPlacemarkWithAddress(action) {
	try {
		const response = yield call(fetchAddress, action.payload, API_KEY);
		const {name, description} = response.data.response.GeoObjectCollection.featureMember[0].GeoObject;
		const coords = getCoords(response);
		const address = `${name}, ${description}`;
		yield put(addNewPlacemark({coords: coords.reverse(), address}));
		yield put(change('createItemForm', 'address', address));
		yield put(openCreateItemCard());
	} catch (err) {
		console.log(err);
	}
};

export function *setNewAddressAndCoords(action) {
	try {
		yield put(change('createItemForm', 'address', action.payload));
		const response = yield call(fetchCoords, action.payload, API_KEY);
		const coords = getCoords(response);
		yield put(setNewCoordinates(coords.reverse()));
        yield put(setPosition(coords[0], coords[1]));
	} catch (err) {
		console.log(err);
	}
};

export function *editCoords(action) {
	try {
		const response = yield call(fetchCoords, action.payload, API_KEY);
		const coords = getCoords(response);
		yield put(setEditedCoordinates(coords.reverse()));
        yield put(setPosition(coords[0], coords[1]));
	} catch (err) {
		console.log(err);
	}
};