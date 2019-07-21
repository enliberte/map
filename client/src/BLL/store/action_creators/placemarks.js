import {actions as a, API_KEY} from "../constants";
import * as axios from 'axios';
import {closeCreateItemCard, openCreateItemCard} from "./createItemCard";
import {change} from "redux-form";
import {closeReadItemCard} from "./readItemCard";
import {setPosition} from "./map";


export const addNewPlacemark = (data) => ({type: a.ADD_PLACEMARK, payload: data});

export const setEditedPlacemark = (data) => ({type: a.EDIT_PLACEMARK, payload: data});

export const setInWorkPlacemark = (data) => ({type: a.SET_IN_WORK_PLACEMARK, payload: data});

export const setDonePlacemark = (data) => ({type: a.SET_DONE_PLACEMARK, payload: data});

export const cancelNewPlacemark = () => ({type: a.CANCEL_PLACEMARK});

export const setPlacemarksInStore = (data) => ({type: a.SET_PLACEMARKS, payload: data});

export const setNewCoordinates = (coords) => ({type: a.SET_NEW_COORDINATES, payload: coords});

export const setEditedCoordinates = (coords) => ({type: a.EDIT_COORDINATES, payload: coords});

export const addPlacemarkToStore = (data) => ({type: a.SAVE_PLACEMARK, payload: data});

export const updatePlacemarkInStore = (data) => ({type: a.UPDATE_PLACEMARK, payload: data});

export const deletePlacemarkFromStore = (id) => ({type: a.DELETE_PLACEMARK, payload: id});

export const savePlacemark = (data) => (dispatch) => {
    axios.post('/', {method: 'SAVE_PLACEMARK', params: data})
        .then((response) => {
            if (response.status !== 200) {
                throw Error(response.statusText);
            }
            return response;
        })
        .then((response) => {
            dispatch(addPlacemarkToStore(response.data));
            dispatch(closeCreateItemCard());
            dispatch(cancelNewPlacemark());
        })
        .catch((err) => console.log(err))
};

export const updatePlacemark = (data) => (dispatch) => {
    axios.post('/', {method: 'UPDATE_PLACEMARK', params: data})
        .then((response) => {
            if (response.status !== 200) {
                throw Error(response.statusText);
            }
            return response;
        })
        .then((response) => {
            dispatch(updatePlacemarkInStore(response.data));
        })
        .catch((err) => console.log(err))
};

export const deletePlacemark = (id) => (dispatch) => {
    axios.post('/', {method: 'DELETE_PLACEMARK', params: {id}})
        .then((response) => {
            if (response.status !== 200) {
                throw Error(response.statusText);
            }
            return response;
        })
        .then((response) => {
            dispatch(closeReadItemCard());
            dispatch(deletePlacemarkFromStore(response.data.id));
        })
        .catch((err) => console.log(err))
};

export const addNewPlacemarkWithAddress = (coords) => (dispatch) => {
    const url = `https://geocode-maps.yandex.ru/1.x/?format=json&apikey=${API_KEY}&geocode=${coords.reverse().join(',')}&results=1`;
    axios.get(url)
        .then((response) => {
            if (response.status !== 200) {
                throw Error(response.statusText);
            }
            return response;
        })
        .then((response) => {
            const {name, description} = response.data.response.GeoObjectCollection.featureMember[0].GeoObject;
            return `${name}, ${description}`;
        })
        .then((address) => {
            dispatch(addNewPlacemark({coords: coords.reverse(), address}));
            dispatch(openCreateItemCard());
        })
        .catch((err) => {console.log(err)})
};

export const setNewAddressAndCoords = (address) => (dispatch) => {
    const url = `https://geocode-maps.yandex.ru/1.x/?format=json&apikey=${API_KEY}&geocode=${address}&results=1`;
    dispatch(change('createItemForm', 'address', address));
    axios.get(url)
        .then((response) => {
            if (response.status !== 200) {
                throw Error(response.statusText);
            }
            return response;
        })
        .then((response) => {
            return response.data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ').map(c => +c);
        })
        .then((coords) => {
            dispatch(setNewCoordinates(coords.reverse()));
            dispatch(setPosition(coords[0], coords[1]));
        })
        .catch((err) => {console.log(err)})
};

export const editCoords = (address) => (dispatch) => {
    const url = `https://geocode-maps.yandex.ru/1.x/?format=json&apikey=${API_KEY}&geocode=${address}&results=1`;
    axios.get(url)
        .then((response) => {
            if (response.status !== 200) {
                throw Error(response.statusText);
            }
            return response;
        })
        .then((response) => {
            return response.data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ').map(c => +c);
        })
        .then((coords) => dispatch(setEditedCoordinates(coords.reverse())))
        .catch((err) => {console.log(err)})
};

export const setPlacemarks = () => (dispatch) => {
    axios.post('/', {method: 'GET_PLACEMARKS_DATA'})
        .then((response) => {
            if (response.status !== 200) {
                throw Error(response.statusText);
            }
            return response;
        })
        .then((response) => {
            dispatch(setPlacemarksInStore(response.data));
        })
        .catch((err) => console.log(err))
};
