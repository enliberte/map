import * as a from "../../constants";


export type OpenRegPanelAction = {
    type: typeof a.OPEN_REG_PANEL
}

export type CloseRegPanelAction = {
    type: typeof a.CLOSE_REG_PANEL
}

export type ShowRegErrorAction = {
    type: typeof a.SHOW_REG_ERROR
}