import * as axios from 'axios';

export const fetchSavePlacemark = (data) => axios.post('/', {method: 'SAVE_PLACEMARK', params: data});

export const fetchUpdatePlacemark = (data) => axios.post('/', {method: 'UPDATE_PLACEMARK', params: data});

export const fetchDeletePlacemark = (id) => axios.post('/', {method: 'DELETE_PLACEMARK', params: {id}});

export const fetchAddress = (coords, API_KEY) => {
	const url = `https://geocode-maps.yandex.ru/1.x/?format=json&apikey=${API_KEY}&geocode=${coords.reverse().join(',')}&results=1`;
	return axios.get(url);
};

export const fetchCoords = (address, API_KEY) => {
	const url = `https://geocode-maps.yandex.ru/1.x/?format=json&apikey=${API_KEY}&geocode=${address}&results=1`;
	return axios.get(url);
}

export const fetchPlacemarks = () => axios.post('/', {method: 'GET_PLACEMARKS_DATA'});