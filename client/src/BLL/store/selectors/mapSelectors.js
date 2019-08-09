import {createSelector} from "reselect";


export const getFilters = state => state.filters;

export const getPlacemarks = state => state.placemarks;

export const getFilteredPlacemarks = createSelector(
	[getFilters, getPlacemarks],
	(filters, placemarks) => placemarks.filter(placemark => filters[placemark.state])
);

export const getCurrentPlacemarkId = state => state.currentPlacemark;

export const getCurrentPlacemark = createSelector(
	[getCurrentPlacemarkId, getPlacemarks],
	(id, placemarks) => placemarks.filter(placemark => placemark.id === id)[0]
);

export const getMapLatitude = state => state.map.latitude;

export const getMapLongitude = state => state.map.longitude;

export const getMapCoords = createSelector(
	[getMapLatitude, getMapLongitude],
	(latitude, longitude) => [latitude, longitude]
);