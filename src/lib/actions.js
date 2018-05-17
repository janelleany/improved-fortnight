const LOAD_ALL = 'LOAD_ALL';
const CREATE_PIECE = 'CREATE_PIECE';
const SAVE_PIECE = 'SAVE_PIECE';
const LOGIN = 'LOGIN';

export let loadAll = (all) => {
    return {
        type: LOAD_ALL,
        payload: all
    }
}

export let login = (credentials) => {
    return {
        type: LOGIN,
        payload: credentials
    }
}

export let createPiece = (specs) => {
    return {
    type: CREATE_PIECE,
    payload: specs
    }
}

export let savePiece = (data) => {
    return {
        type: SAVE_PIECE,
        payload: data
    }
}