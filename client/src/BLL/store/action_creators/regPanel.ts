import * as a from "../constants";
import {CloseRegPanelAction, OpenRegPanelAction, ShowRegErrorAction} from "./types/regPanel";

export const openRegPanel = (): OpenRegPanelAction => ({type: a.OPEN_REG_PANEL});

export const closeRegPanel = (): CloseRegPanelAction => ({type: a.CLOSE_REG_PANEL});

export const showRegError = (): ShowRegErrorAction => ({type: a.SHOW_REG_ERROR});