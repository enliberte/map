import * as a from "../constants";
import {SetCurrentPlacemarkAction} from "./types/currentPlacemark";


export const setCurrentPlacemark = (id: string): SetCurrentPlacemarkAction => ({type: a.SET_CURRENT_PLACEMARK, payload: id});