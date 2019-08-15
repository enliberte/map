import * as a from "../constants";
import {CloseAuthPanelAction, OpenAuthPanelAction, ShowAuthErrorAction} from "./types/authPanel";

export const openAuthPanel = (): OpenAuthPanelAction => ({type: a.OPEN_REG_PANEL});

export const closeRegPanel = (): CloseAuthPanelAction => ({type: a.CLOSE_REG_PANEL});

export const showRegError = (): ShowAuthErrorAction => ({type: a.SHOW_REG_ERROR});
