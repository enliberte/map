import * as a from "../../constants";


export type SetCurrentPlacemarkAction = {
    type: typeof a.SET_CURRENT_PLACEMARK,
    payload: string
}