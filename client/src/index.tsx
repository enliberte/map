import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './UI/components/App.js';
import store from './BLL/store/store';
import {Provider} from 'react-redux';
import {CookiesProvider} from 'react-cookie';


ReactDOM.render(
    <CookiesProvider>
        <Provider store={store}>
            <App />
        </Provider>
    </CookiesProvider>,
    document.getElementById("root") as HTMLElement
);