import regeneratorRuntime from 'regenerator-runtime';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import placemarks from  './reducers/placemarks';
import auth from './reducers/auth';
import reg from "./reducers/reg";
import initialState from "./initialState";
import leftPanel from "./reducers/leftPanel";
import {reducer as formReducer} from 'redux-form';
import violationTypes from "./reducers/violationTypes";
import levels from './reducers/levels';
import newPlacemark from "./reducers/newPlacemark";
import filters from "./reducers/filtrationPanel";
import roles from './reducers/roles';
import map from './reducers/map';
import currentPlacemark from "./reducers/currentPlacemark";
import editedPlacemark from './reducers/editedPlacemark';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga/rootSaga';


const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    combineReducers({
        placemarks,
        auth,
        reg,
        leftPanel,
        violationTypes,
        levels,
        newPlacemark,
        filters,
        roles,
        map,
        currentPlacemark,
        editedPlacemark,
        form: formReducer
    }),
    initialState,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);

export default store;