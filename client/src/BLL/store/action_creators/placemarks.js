import {actions as a} from "../constants";


export const addNewPlacemark = (data) => ({type: a.ADD_PLACEMARK, payload: data});

export const setEditedPlacemark = (data) => ({type: a.EDIT_PLACEMARK, payload: data});

export const addPicturesToNewPlacemark = (files) => ({type: a.ADD_PICTURES_TO_NEW_PLACEMARK, payload: files});

export const delPictureFromNewPlacemark = (name) => ({type: a.DEL_PICTURE_FROM_NEW_PLACEMARK, payload: name});

export const setInWorkPlacemark = (data) => ({type: a.SET_IN_WORK_PLACEMARK, payload: data});

export const setDonePlacemark = (data) => ({type: a.SET_DONE_PLACEMARK, payload: data});

export const cancelNewPlacemark = () => ({type: a.CANCEL_PLACEMARK});

export const setPlacemarksInStore = (data) => ({type: a.SET_PLACEMARKS, payload: data});

export const setNewCoordinates = (coords) => ({type: a.SET_NEW_COORDINATES, payload: coords});

export const setEditedCoordinates = (coords) => ({type: a.EDIT_COORDINATES, payload: coords});

export const addPlacemarkToStore = (data) => ({type: a.SAVE_PLACEMARK, payload: data});

export const updatePlacemarkInStore = (data) => ({type: a.UPDATE_PLACEMARK, payload: data});

export const deletePlacemarkFromStore = (id) => ({type: a.DELETE_PLACEMARK, payload: id});

export const setPlacemarksSaga = () => ({type: a.SET_PLACEMARKS_SAGA});

export const addNewPlacemarkWithAddressSaga = (coords) => ({type: a.ADD_PLACEMARK_SAGA, payload: coords})

export const savePlacemarkSaga = (data) => ({type: a.SAVE_PLACEMARK_SAGA, payload: data});

export const updatePlacemarkSaga = (data) => ({type: a.UPDATE_PLACEMARK_SAGA, payload: data});

export const deletePlacemarkSaga = (id) => ({type: a.DELETE_PLACEMARK_SAGA, payload: id});

export const setNewAddressAndCoordsSaga = (address) => ({type: a.SET_NEW_ADDRESS_SAGA, payload: address});

export const editCoordsSaga = (address) => ({type: a.EDIT_COORDINATES_SAGA, payload: address});