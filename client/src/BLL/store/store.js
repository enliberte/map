import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import placemarks from  './reducers/placemarks';
import auth from './reducers/auth';
import initialState from "./initialState";
import authPanel from "./reducers/authPanel";
import {reducer as formReducer} from 'redux-form';
import violationTypes from "./reducers/violationTypes";
import levels from './reducers/levels';
import createItemCard from './reducers/createItemCard';
import newPlacemark from "./reducers/newPlacemark";
import filters from "./reducers/filtrationPanel";
import regPanel from "./reducers/regPanel";
import roles from './reducers/roles';
import map from './reducers/map';
import currentPlacemark from "./reducers/currentPlacemark";
import editedPlacemark from './reducers/editedPlacemark';
import readItemCard from "./reducers/readItemCard";
import editItemCard from './reducers/editItemCard';
import inWorkItemCard from './reducers/inWorkItemCard';


const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(
    combineReducers({
        placemarks,
        auth,
        authPanel,
        regPanel,
        createItemCard,
        violationTypes,
        levels,
        newPlacemark,
        filters,
        roles,
        map,
        currentPlacemark,
        editedPlacemark,
        readItemCard,
        editItemCard,
        inWorkItemCard,
        form: formReducer
    }),
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;