import regeneratorRuntime from 'regenerator-runtime';
import {addNewPlacemarkWithAddress} from "../client/src/BLL/store/saga/workers/placemarkWorkers";
import {call, put} from "@redux-saga/core/effects";
import {fetchAddress} from "../client/src/BLL/api/placemarksAPI";
import {API_KEY, actions as a} from "../client/src/BLL/store/constants";
import {change} from "redux-form";

const name = 'Советская площадь';
const desc = 'Ярославль, Россия';
const fullAddress = `${name}, ${desc}`;
const latitude = 57.626578;
const longitude = 39.893858;

const response = {
    data: {
        response: {
            GeoObjectCollection: {
                featureMember: [
                    {
                        GeoObject: {
                            name: name,
                            description: desc,
                            Point: {
                                pos: `${latitude} ${longitude}`
                            }
                        }
                    }
                ]
            }
        }
    }
};

const actionFetchData = {
    payload: [latitude, longitude]
};
const actionSetData = {
    type: a.ADD_PLACEMARK,
    payload: {coords:  [longitude, latitude], address: fullAddress}
};

const actionSetAddressInForm = change('createItemForm', 'address', fullAddress);

const actionOpenCard = {type: a.OPEN_CREATE_ITEM_CARD};


test('worker saga: addNewPlacemarkWithAddress', () => {
    const gen = addNewPlacemarkWithAddress(actionFetchData);
    expect(gen.next().value).toEqual(call(fetchAddress, actionFetchData.payload, API_KEY));
    expect(gen.next(response).value).toEqual(put(actionSetData));
    expect(gen.next().value).toEqual(put(actionSetAddressInForm));
    expect(gen.next().value).toEqual(put(actionOpenCard));
    expect(gen.next().done).toBeTruthy();
});