import {all} from 'redux-saga/effects';
import {watchIsAuthorized, watchLogout, watchAuth, watchRegister} from './watchers/authWatchers';
import {watchSetPlacemarks, watchSavePlacemark, watchUpdatePlacemark, watchDeletePlacemark, watchAddNewPlacemarkWithAddress, watchSetNewAddressAndCoords, watchEditCoords} from './watchers/placemarkWatchers';


export default function *rootSaga() {
	yield all([
		watchIsAuthorized(),
		watchLogout(),
		watchAuth(),
		watchRegister(),
		watchSetPlacemarks(),
		watchSavePlacemark(),
		watchUpdatePlacemark(),
		watchDeletePlacemark(),
		watchAddNewPlacemarkWithAddress(),
		watchSetNewAddressAndCoords(),
		watchEditCoords()
	]);
}