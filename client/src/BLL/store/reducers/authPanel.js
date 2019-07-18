import {actions as a} from "../constants";

const authPanel = (state={}, action) => {
    switch (action.type) {
        case a.OPEN_AUTH_PANEL:
            return {
                ...state,
                authError: false,
                isDisplayed: true
            };
        case a.CLOSE_AUTH_PANEL:
            return {
                ...state,
                isDisplayed: false
            };
        case a.SHOW_AUTH_ERROR:
            return {
                ...state,
                authError: true
            };
        default:
            return state;
    }
};

export default authPanel;