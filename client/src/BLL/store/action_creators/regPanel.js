import {actions as a} from "../constants";

export const openRegPanel = () => ({type: a.OPEN_REG_PANEL});

export const closeRegPanel = () => ({type: a.CLOSE_REG_PANEL});

export const showRegError = () => ({type: a.SHOW_REG_ERROR});