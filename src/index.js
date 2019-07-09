import React from 'react';
import ReactDOM from 'react-dom';
import App from './UI/components/App.js';
import store from './BLL/store/store';
import {Provider} from 'react-redux';


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);