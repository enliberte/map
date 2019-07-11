import {actions as a} from '../constants';


const placemarks = (state=[], action) => {
    switch (action.type) {
        case a.SAVE_ITEM:
            const item = action.payload;
            const x = item.coordinates[0];
            item.coordinates[0] = item.coordinates[1];
            item.coordinates[1] = x;
            return [
                ...state,
                item
            ];
        default:
            return state;
    }
};


export default placemarks;