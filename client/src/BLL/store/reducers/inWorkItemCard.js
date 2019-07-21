import {actions as a} from "../constants";

const inWorkItemCard = (state={}, action) => {
    switch (action.type) {
        case a.OPEN_IN_WORK_ITEM_CARD:
            return {
                ...state,
                isDisplayed: true
            };
        case a.CLOSE_IN_WORK_ITEM_CARD:
            return {
                ...state,
                isDisplayed: false
            };
        default:
            return state;
    }
};

export default inWorkItemCard;