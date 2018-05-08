import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import artists from './json/artists';
import canvases from './json/canvases';
import contests from './json/contests';
import submissions from './json/submissions';

let initialState = {
    isLoggedIn: false,
    currentUser: {},
    canvasList: canvases,
    artistList: artists,
    contestList: contests,
    submissionList: submissions
}

let reducer = (state = initialState, action) => {
    switch (action.type) {
        default: return state; 
    }
}

let store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

let UI = 
    <Provider store={store}>
        <App/>
    </Provider>;

ReactDOM.render(UI, document.getElementById('root'));

registerServiceWorker();
