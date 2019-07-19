import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import placemarks from  './reducers/placemarks';
import auth from './reducers/auth';
import initialState from "./initialState";
import authPanel from "./reducers/authPanel";
import {reducer as formReducer} from 'redux-form';
import violationTypes from "./reducers/violationTypes";
import createItemCard from './reducers/createItemCard';
import newPlacemark from "./reducers/newPlacemark";
import filters from "./reducers/filtrationPanel";
import regPanel from "./reducers/regPanel";
import roles from './reducers/roles';
import map from './reducers/map';


const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(
    combineReducers({
        placemarks,
        auth,
        authPanel,
        regPanel,
        createItemCard,
        violationTypes,
        newPlacemark,
        filters,
        roles,
        map,
        form: formReducer
    }),
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;