import * as a from "../../constants";


export type NewPlacemarkData = {
    coords: number[],
    address: string
}

export type PlacemarkData = {
    id: string,
    address: string,
    latitude: number,
    longitude: number,
    comment: string,
    construction: boolean,
    glass: boolean,
    household: boolean,
    metal: boolean,
    other: boolean,
    paper: boolean,
    plastic: boolean,
    violationtype: string,
    state: string,
    administration: string,
    price: number,
    level: number,
    author: string,
    volume: number,
    square: number
}

export type AddNewPlacemarkAction = {
    type: typeof a.ADD_PLACEMARK,
    payload: NewPlacemarkData
}

export type SetEditedPlacemarkAction = {
    type: typeof a.EDIT_PLACEMARK,
    payload: PlacemarkData
}

export type AddPicturesToNewPlacemarkAction = {
    type: typeof a.ADD_PICTURES_TO_NEW_PLACEMARK,
    payload: any
}

export type DelPictureFromNewPlacemarkAction = {
    type: typeof a.DEL_PICTURE_FROM_NEW_PLACEMARK,
    payload: string
}

export type SetInWorkPlacemarkAction = {
    type: typeof a.SET_IN_WORK_PLACEMARK,
    payload: PlacemarkData
}

export type SetDonePlacemarkAction = {
    type: typeof a.SET_DONE_PLACEMARK,
    payload: PlacemarkData
}

export type CancelNewPlacemarkAction = {
    type: typeof a.CANCEL_PLACEMARK
}

export type SetPlacemarksInStoreAction = {
    type: typeof a.SET_PLACEMARKS,
    payload: PlacemarkData[]
}

export type SetNewCoordinatesAction = {
    type: typeof a.SET_NEW_COORDINATES,
    payload: number[]
}

export type SetEditedCoordinatesAction = {
    type: typeof a.EDIT_COORDINATES,
    payload: number[]
}

export type AddPlacemarkToStoreAction = {
    type: typeof a.SAVE_PLACEMARK,
    payload: PlacemarkData
}

export type UpdatePlacemarkInStoreAction = {
    type: typeof a.UPDATE_PLACEMARK,
    payload: PlacemarkData
}

export type DeletePlacemarkFromStoreAction = {
    type: typeof a.DELETE_PLACEMARK,
    payload: string
}

export type SetPlacemarksSagaAction = {
    type: typeof a.SET_PLACEMARKS_SAGA,
}

export type AddNewPlacemarkWithAddressSagaAction = {
    type: typeof a.ADD_PLACEMARK_SAGA,
    payload: number[]
}

export type SavePlacemarkSagaAction = {
    type: typeof a.SAVE_PLACEMARK_SAGA,
    payload: PlacemarkData
}

export type UpdatePlacemarkSagaAction = {
    type: typeof a.UPDATE_PLACEMARK_SAGA,
    payload: PlacemarkData
}

export type DeletePlacemarkSagaAction = {
    type: typeof a.DELETE_PLACEMARK_SAGA,
    payload: string
}

export type SetNewAddressAndCoordsSagaAction = {
    type: typeof a.SET_NEW_ADDRESS_SAGA,
    payload: string
}

export type EditCoordsSagaAction = {
    type: typeof a.EDIT_COORDINATES_SAGA,
    payload: string
}

export type EditActions = SetEditedPlacemarkAction | SetInWorkPlacemarkAction | SetDonePlacemarkAction | SetEditedCoordinatesAction;