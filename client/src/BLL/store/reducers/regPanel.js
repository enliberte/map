import {actions as a} from "../constants";

const regPanel = (state={}, action) => {
    switch (action.type) {
        case a.OPEN_REG_PANEL:
            return {
                ...state,
                isDisplayed: true
            };
        case a.CLOSE_REG_PANEL:
            return {
                ...state,
                isDisplayed: false
            };
        case a.SHOW_REG_ERROR:
            return {
                ...state,
                regError: true
            };
        default:
            return state;
    }
};

export default regPanel;