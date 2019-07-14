import {actions as a} from "../constants";

const authPanel = (state={}, action) => {
    switch (action.type) {
        case a.OPEN_AUTH_PANEL:
            return {
                ...state,
                isDisplayed: true
            };
        case a.CLOSE_AUTH_PANEL:
            return {
                ...state,
                isDisplayed: false
            };
        default:
            return state;
    }
};

export default authPanel;