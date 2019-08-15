import * as a from "../../constants";


export type PositionData = {
    latitude: number,
    longitude: number
}

export type SetPositionAction = {
    type: typeof a.SET_POSITION,
    payload: PositionData
}