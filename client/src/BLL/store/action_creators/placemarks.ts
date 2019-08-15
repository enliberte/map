import * as a from "../constants";
import {
    AddNewPlacemarkAction, AddNewPlacemarkWithAddressSagaAction,
    AddPicturesToNewPlacemarkAction, AddPlacemarkToStoreAction,
    CancelNewPlacemarkAction, DeletePlacemarkFromStoreAction, DeletePlacemarkSagaAction,
    DelPictureFromNewPlacemarkAction, EditCoordsSagaAction,
    NewPlacemarkData,
    PlacemarkData, SavePlacemarkSagaAction,
    SetDonePlacemarkAction, SetEditedCoordinatesAction,
    SetEditedPlacemarkAction,
    SetInWorkPlacemarkAction, SetNewAddressAndCoordsSagaAction,
    SetNewCoordinatesAction,
    SetPlacemarksInStoreAction, SetPlacemarksSagaAction, UpdatePlacemarkInStoreAction, UpdatePlacemarkSagaAction
} from "./types/placemarks";


export const addNewPlacemark = (data: NewPlacemarkData): AddNewPlacemarkAction => ({type: a.ADD_PLACEMARK, payload: data});

export const setEditedPlacemark = (data: PlacemarkData): SetEditedPlacemarkAction => ({type: a.EDIT_PLACEMARK, payload: data});

export const addPicturesToNewPlacemark = (files: any): AddPicturesToNewPlacemarkAction => ({type: a.ADD_PICTURES_TO_NEW_PLACEMARK, payload: files});

export const delPictureFromNewPlacemark = (name: string): DelPictureFromNewPlacemarkAction => ({type: a.DEL_PICTURE_FROM_NEW_PLACEMARK, payload: name});

export const setInWorkPlacemark = (data: PlacemarkData): SetInWorkPlacemarkAction => ({type: a.SET_IN_WORK_PLACEMARK, payload: data});

export const setDonePlacemark = (data: PlacemarkData): SetDonePlacemarkAction => ({type: a.SET_DONE_PLACEMARK, payload: data});

export const cancelNewPlacemark = (): CancelNewPlacemarkAction => ({type: a.CANCEL_PLACEMARK});

export const setPlacemarksInStore = (data: PlacemarkData[]): SetPlacemarksInStoreAction => ({type: a.SET_PLACEMARKS, payload: data});

export const setNewCoordinates = (coords: number[]): SetNewCoordinatesAction => ({type: a.SET_NEW_COORDINATES, payload: coords});

export const setEditedCoordinates = (coords: number[]): SetEditedCoordinatesAction => ({type: a.EDIT_COORDINATES, payload: coords});

export const addPlacemarkToStore = (data: PlacemarkData): AddPlacemarkToStoreAction => ({type: a.SAVE_PLACEMARK, payload: data});

export const updatePlacemarkInStore = (data: PlacemarkData): UpdatePlacemarkInStoreAction => ({type: a.UPDATE_PLACEMARK, payload: data});

export const deletePlacemarkFromStore = (id: string): DeletePlacemarkFromStoreAction => ({type: a.DELETE_PLACEMARK, payload: id});

export const setPlacemarksSaga = (): SetPlacemarksSagaAction => ({type: a.SET_PLACEMARKS_SAGA});

export const addNewPlacemarkWithAddressSaga = (coords: number[]): AddNewPlacemarkWithAddressSagaAction => ({type: a.ADD_PLACEMARK_SAGA, payload: coords});

export const savePlacemarkSaga = (data: PlacemarkData): SavePlacemarkSagaAction => ({type: a.SAVE_PLACEMARK_SAGA, payload: data});

export const updatePlacemarkSaga = (data: PlacemarkData): UpdatePlacemarkSagaAction => ({type: a.UPDATE_PLACEMARK_SAGA, payload: data});

export const deletePlacemarkSaga = (id: string): DeletePlacemarkSagaAction => ({type: a.DELETE_PLACEMARK_SAGA, payload: id});

export const setNewAddressAndCoordsSaga = (address: string): SetNewAddressAndCoordsSagaAction => ({type: a.SET_NEW_ADDRESS_SAGA, payload: address});

export const editCoordsSaga = (address: string): EditCoordsSagaAction => ({type: a.EDIT_COORDINATES_SAGA, payload: address});