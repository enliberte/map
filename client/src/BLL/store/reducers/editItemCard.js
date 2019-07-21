import {actions as a} from "../constants";

const editItemCard = (state={}, action) => {
    switch (action.type) {
        case a.OPEN_EDIT_ITEM_CARD:
            return {
                ...state,
                isDisplayed: true
            };
        case a.CLOSE_EDIT_ITEM_CARD:
            return {
                ...state,
                isDisplayed: false
            };
        default:
            return state;
    }
};

export default editItemCard;