import {actions as a} from "../constants";


export const setPlacemarks = (data) => ({type: a.SET_PLACEMARKS, payload: data});

export const editPlacemark = () => ({type: a.EDIT_PLACEMARK});