import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import artists from './json/artists';
import canvases from './json/canvases';
import contests from './json/contests';
import submissions from './json/submissions';

import App from './App';

let initialState = {
    isLoggedIn: false,
    currentUser: canvases[3],
    canvasList: canvases,
    artistList: artists,
    contestList: contests,
    submissionList: submissions,
    displayNext: false,
    editingContest: false,
    newContest: {}
}

let reducer = (state = initialState, action) => {
    switch (action.type) {
        case "CREATE_NEW_CONTEST": {
            return {
                ...state, newContest: {...state.newContest, ...action.payload}
            }
        }

        case "TOGGLE_DISPLAY_NEXT": {
            return {
                ...state, displayNext: !state.displayNext
            }
        }

        case "TOGGLE_EDITING_CONTEST": {
            return {
                ...state, editingContest: !state.editingContest
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
