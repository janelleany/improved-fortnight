const CREATE_QUERY = "CREATE_QUERY";
const SAVE_QUERY = "SAVE_QUERY";

export let createQuery = (specs) => {
    return {
    type: CREATE_QUERY,
    payload: specs
    }
}

export let saveQuery = () => {
    return {
        type: SAVE_QUERY
    }
}