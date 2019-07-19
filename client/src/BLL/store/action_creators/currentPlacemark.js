import {actions as a} from "../constants";


export const setCurrentPlacemark = (id) => ({type: a.SET_CURRENT_PLACEMARK, payload: id});