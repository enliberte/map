import * as a from '../constants';
import {FilterActions, Filters} from "../action_creators/types/filtrationPanel";

const initialState = {
    'Новая': true,
    'В работе': true,
    'Выполнена': true,
    'В архиве': true
};

const filters = (state: Filters = initialState, action: FilterActions): Filters => {
    switch (action.type) {
        case a.SET_FILTERS_ARCHIVE:
            return {
                ...state,
                'В архиве': action.payload
            };
        case a.SET_FILTERS_NEW:
            return {
                ...state,
                'Новая': action.payload
            };
        case a.SET_FILTERS_DONE:
            return {
                ...state,
                'Выполнена': action.payload
            };
        case a.SET_FILTERS_IN_WORK:
            return {
                ...state,
                'В работе': action.payload
            };
        default:
            return state;
    }
};


export default filters;