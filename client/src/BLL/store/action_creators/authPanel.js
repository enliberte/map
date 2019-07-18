import {actions as a} from "../constants";

export const openAuthPanel = () => ({type: a.OPEN_AUTH_PANEL});

export const closeAuthPanel = () => ({type: a.CLOSE_AUTH_PANEL});

export const showAuthError = () => ({type: a.SHOW_AUTH_ERROR});