import * as a from "../../constants";


export type OpenAuthPanelAction = {
    type: typeof a.OPEN_AUTH_PANEL
}

export type CloseAuthPanelAction = {
    type: typeof a.CLOSE_AUTH_PANEL
}

export type ShowAuthErrorAction = {
    type: typeof a.SHOW_AUTH_ERROR
}