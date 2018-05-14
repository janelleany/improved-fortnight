import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import canvases from './json/canvases';

import App from './App';

let initialState = {
    isLoggedIn: false,
    currentUser: canvases[3],
    canvasList: [],
    artistList: [],
    queryList: [],
    submissionList: [],
    displayNext: false,
    newQuery: {}
}

let reducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOAD_ALL": {
            return {
                ...state, queryList: action.payload
            }
        }
        
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
