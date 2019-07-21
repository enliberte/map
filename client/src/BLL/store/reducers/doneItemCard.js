import {actions as a} from "../constants";

const doneItemCard = (state={}, action) => {
    switch (action.type) {
        case a.OPEN_DONE_ITEM_CARD:
            return {
                ...state,
                isDisplayed: true
            };
        case a.CLOSE_DONE_ITEM_CARD:
            return {
                ...state,
                isDisplayed: false
            };
        default:
            return state;
    }
};

export default doneItemCard;