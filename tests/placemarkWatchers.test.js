import regeneratorRuntime from 'regenerator-runtime';
import {watchAddNewPlacemarkWithAddress} from "../client/src/BLL/store/saga/watchers/placemarkWatchers";
import {takeEvery} from "@redux-saga/core/effects";
import {actions as a} from "../client/src/BLL/store/constants";
import {addNewPlacemarkWithAddress} from "../client/src/BLL/store/saga/workers/placemarkWorkers";

test('saga watcher: watchAddNewPlacemarkWithAddress', () => {
    const gen = watchAddNewPlacemarkWithAddress();
    expect(gen.next().value).toEqual(takeEvery(a.ADD_PLACEMARK_SAGA, addNewPlacemarkWithAddress));
    expect(gen.next().done).toBeTruthy();
});