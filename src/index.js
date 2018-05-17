import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';


import App from './App';

let initialState = {
    isLoggedIn: false,
    currentUser: {
        "email": "john@jane.com",
        "password": "greg",
        "alias": "countrymouse",
        "type": "tattooers"
    },
    pieces: [],
    // displayNext: false,
    newPiece: {}
}

let reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD_ALL': {
            return {
                ...state, pieces: action.payload
            }
        }
        
        case 'CREATE_PIECE': {
            return {
                ...state, newPiece: {...state.newPiece, ...action.payload}
            }
        }

        case 'SAVE_PIECE': {
            return {
                ...state, pieces: [...state.pieces, state.newPiece]
            }
        }

        case 'LOGIN': {
            return {
                ...state, currentUser: action.payload, isLoggedIn: true
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
