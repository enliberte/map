import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import placemarks from  './reducers/placemarks';
import auth from './reducers/auth';
import initialState from "./initialState";
import authPanel from "./reducers/authPanel";
import {reducer as formReducer} from 'redux-form';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(
    combineReducers({
        placemarks,
        auth,
        authPanel,
        form: formReducer
    }),
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;