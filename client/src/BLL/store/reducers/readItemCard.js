import {actions as a} from "../constants";

const readItemCard = (state={}, action) => {
    switch (action.type) {
        case a.OPEN_READ_ITEM_CARD:
            return {
                ...state,
                isDisplayed: true
            };
        case a.CLOSE_READ_ITEM_CARD:
            return {
                ...state,
                isDisplayed: false
            };
        default:
            return state;
    }
};

export default readItemCard;