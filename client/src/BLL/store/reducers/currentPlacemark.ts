import * as a from '../constants';
import {SetCurrentPlacemarkAction} from "../action_creators/types/currentPlacemark";


const currentPlacemark = (state: string = '', action: SetCurrentPlacemarkAction): string => {
    switch (action.type) {
        case a.SET_CURRENT_PLACEMARK:
            return action.payload;
        default:
            return state;
    }
};


export default currentPlacemark;