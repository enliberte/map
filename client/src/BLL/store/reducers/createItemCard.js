import {actions as a} from "../constants";

const createItemCard = (state={}, action) => {
    switch (action.type) {
        case a.OPEN_CREATE_ITEM_CARD:
            return {
                ...state,
                isDisplayed: true
            };
        case a.CLOSE_CREATE_ITEM_CARD:
            return {
                ...state,
                isDisplayed: false
            };
        default:
            return state;
    }
};

export default createItemCard;