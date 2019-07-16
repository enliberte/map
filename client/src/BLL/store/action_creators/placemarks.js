import {actions as a, API_KEY} from "../constants";
import * as axios from 'axios';

export const addNewPlacemark = (data) => ({type: a.ADD_PLACEMARK, payload: data});

export const cancelNewPlacemark = () => ({type: a.CANCEL_PLACEMARK});

export const setPlacemarksInStore = (data) => ({type: a.SET_PLACEMARKS, payload: data});

export const editPlacemark = () => ({type: a.EDIT_PLACEMARK});

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
        .then((address) => dispatch(addNewPlacemark({coords: coords.reverse(), address})))
        .catch(() => dispatch(getPlacemarksError))
};

export const getCoordinates = (address) => (dispatch) => {
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
        .then((coordinates) => dispatch(setNewCoordinates(coordinates)))
        .catch(() => dispatch(getPlacemarksError))
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
};
