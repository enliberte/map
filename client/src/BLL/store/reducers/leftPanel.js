import {actions as a} from "../constants";

const getStateWithActivePanel = (state, activePanel) => {
    let newState = {};
    for (let panel in state) {
        newState[panel] = false;
    }
    newState[activePanel] = true;
    return newState;
}

const leftPanel = (state={}, action) => {
    switch (action.type) {
        case a.OPEN_AUTH_PANEL:
            return getStateWithActivePanel('authPanel');
        case a.CLOSE_AUTH_PANEL:
            return {...state, authPanel: false};
        case a.OPEN_REG_PANEL:
            return getStateWithActivePanel('regPanel');
        case a.CLOSE_REG_PANEL:
            return {...state, regPanel: false};   
        case a.OPEN_CREATE_ITEM_CARD:
            return getStateWithActivePanel('createItemCard');
        case a.CLOSE_CREATE_ITEM_CARD:
            return {...state, createItemCard: false};
        case a.OPEN_READ_ITEM_CARD:
            return getStateWithActivePanel('readItemCard');
        case a.CLOSE_READ_ITEM_CARD:
            return {...state, readItemCard: false};   
        case a.OPEN_EDIT_ITEM_CARD:
            return getStateWithActivePanel('editItemCard');
        case a.CLOSE_EDIT_ITEM_CARD:
            return {...state, editItemCard: false};  
        case a.OPEN_DONE_ITEM_CARD:
            return getStateWithActivePanel('doneItemCard');
        case a.CLOSE_DONE_ITEM_CARD:
            return {...state, doneItemCard: false};
        case a.OPEN_IN_WORK_ITEM_CARD:
            return getStateWithActivePanel('inWorkItemCard');
        case a.CLOSE_IN_WORK_ITEM_CARD:
            return {...state, inWorkItemCard: false};   
        default:
            return state;
    }
};

export default leftPanel;