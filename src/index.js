import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import * as serviceWorker from './serviceWorker';

import App from './App';
import reducers from './reducers';

axios.defaults.baseURL = 'http://localhost:5000/';
axios.defaults.proxy = {
    host: 'http://localhost',
    port: 5000,
};

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
