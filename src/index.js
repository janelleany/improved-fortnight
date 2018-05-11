import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import artists from './json/artists';
import canvases from './json/canvases';
import queries from './json/queries';
import submissions from './json/submissions';

import App from './App';

let initialState = {
    isLoggedIn: false,
    currentUser: canvases[3],
    canvasList: canvases,
    artistList: artists,
    queryList: queries,
    submissionList: submissions,
    displayNext: false,
    newQuery: {}
}

let reducer = (state = initialState, action) => {
    switch (action.type) {
        case "CREATE_QUERY": {
            return {
                ...state, newQuery: {...state.newQuery, ...action.payload}
            }
        }

        case "SAVE_QUERY": {
            return {
                ...state, queryList: [...state.queryList, state.newQuery]
            }
        }

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
