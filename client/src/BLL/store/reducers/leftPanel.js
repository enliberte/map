import {actions as a} from "../constants";

const initState = () => ({
    authPanel: false,
    regPanel: false,
    createItemCard: false,
    readItemCard: false,
    editItemCard: false,
    inWorkItemCard: false,
    doneItemCard: false,
})

const leftPanel = (state={}, action) => {
    switch (action.type) {
        case a.OPEN_AUTH_PANEL:
            return {...initState, authPanel: true};
        case a.CLOSE_AUTH_PANEL:
            return {...state, authPanel: false};
        case a.OPEN_REG_PANEL:
            return {...initState, regPanel: true};
        case a.CLOSE_REG_PANEL:
            return {...state, regPanel: false};   
        case a.OPEN_CREATE_ITEM_CARD:
            return {...initState, createItemCard: true};
        case a.CLOSE_CREATE_ITEM_CARD:
            return {...state, createItemCard: false};
        case a.OPEN_READ_ITEM_CARD:
            return {...initState, readItemCard: true};
        case a.CLOSE_READ_ITEM_CARD:
            return {...state, readItemCard: false};   
        case a.OPEN_EDIT_ITEM_CARD:
            return {...state, editItemCard: true}; 
        case a.CLOSE_EDIT_ITEM_CARD:
            return {...state, editItemCard: false};  
        case a.OPEN_DONE_ITEM_CARD:
            return {...state, doneItemCard: true}; 
        case a.CLOSE_DONE_ITEM_CARD:
            return {...state, doneItemCard: false};
        case a.OPEN_IN_WORK_ITEM_CARD:
            return {...state, inWorkItemCard: true}; 
        case a.CLOSE_IN_WORK_ITEM_CARD:
            return {...state, inWorkItemCard: false};   
        default:
            return state;
    }
};

export default leftPanel;