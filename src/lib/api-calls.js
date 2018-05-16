const url = 'https://cryptic-harbor-57322.herokuapp.com';

export let createAccountFetch = () =>
    fetch()

export let getAllFetch = (token) => {
    fetch(`${url}/pieces`, {
        method: 'GET',
        mode: 'cors',
        headers: new Headers({'authorization': token})
    })
}