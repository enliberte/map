import {actions as a} from '../constants';


const filters = (state='', action) => {
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
                'Завершенная': action.payload
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