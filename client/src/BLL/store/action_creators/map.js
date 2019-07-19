import {actions as a} from "../constants";

export const setPosition = (latitude, longitude) => ({type: a.SET_POSITION, payload: {latitude, longitude}});