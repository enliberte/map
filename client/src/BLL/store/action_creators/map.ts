import * as a from "../constants";
import {SetPositionAction} from "./types/map";

export const setPosition = (latitude: number, longitude: number): SetPositionAction => ({type: a.SET_POSITION, payload: {latitude, longitude}});