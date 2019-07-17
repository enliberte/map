import {actions as a, API_KEY} from "../constants";
import * as axios from 'axios';
import {openCreateItemCard} from "./createItemCard";
import uuid4 from "uuid4";

export const addNewPlacemark = (data) => ({type: a.ADD_PLACEMARK, payload: data});

export const cancelNewPlacemark = () => ({type: a.CANCEL_PLACEMARK});

export const setPlacemarksInStore = (data) => ({type: a.SET_PLACEMARKS, payload: data});

export const setNewCoordinates = (coords) => ({type: a.SET_NEW_COORDINATES, payload: coords});

export const setNewAddress = (address) => ({type: a.SET_NEW_ADDRESS, payload: address});

export const addPlacemarkToStore = (data) => ({type: a.SAVE_PLACEMARK, payload: data});

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
    dispatch(setNewAddress(address));
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
        .then((coords) => dispatch(setNewCoordinates(coords.reverse())))
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
