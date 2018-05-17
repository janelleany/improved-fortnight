const path = 'http://localhost:5000';

//credentials is an object with {email, password, alias, type}
export let createAccountFetch = (credentials) => {
    return fetch(`${path}/users`, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(credentials),
        headers: new Headers( {'Content-Type': 'application/json'} )
    });
}

//credentials is an object with {email, password}
export let processLoginFetch = (credentials) =>
    fetch(`${path}/token`, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(credentials),
        headers: new Headers({'Content-Type': 'application/json'})
});

//token is a JWT string found in localStorage
export let getAllFetch = (token) => {
    console.log(`${path}/pieces`);
    return fetch(`${path}/pieces`, 
    {
        method: 'GET',
        mode: 'cors',
        headers: new Headers({'authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImU2NWZkZDk2LWE2NGMtNDkxOC1iMmIzLWE5YTkxYjRjY2JhOCIsImlhdCI6MTUyNjUzMzA3NSwiZXhwIjoxNTI3MTM3ODc1fQ.f-s-Cn7JDQRuYolKkpJgiyPpEoEQAiNFaLnhlb2wbxM'})
    });
}

//token is a sJWT tring found in localStorage
export let getOneFetch = (token) => 
fetch(`${path}/pieces/:id`, {
    method: 'GET',
    mode: 'cors',
    headers: new Headers({'authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImU2NWZkZDk2LWE2NGMtNDkxOC1iMmIzLWE5YTkxYjRjY2JhOCIsImlhdCI6MTUyNjUzMzA3NSwiZXhwIjoxNTI3MTM3ODc1fQ.f-s-Cn7JDQRuYolKkpJgiyPpEoEQAiNFaLnhlb2wbxM'})
});

//token is a JWT string found in localStorage. specs is an object with {tattooerid, active, caption, style, color, size, price, deposit, zip, img, createddate}
export let createPieceFetch = (specs, token) =>
    fetch(`${path}/pieces`, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(specs),
        headers: new Headers({'Content-Type': 'application/json', 'authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImU2NWZkZDk2LWE2NGMtNDkxOC1iMmIzLWE5YTkxYjRjY2JhOCIsImlhdCI6MTUyNjUzMzA3NSwiZXhwIjoxNTI3MTM3ODc1fQ.f-s-Cn7JDQRuYolKkpJgiyPpEoEQAiNFaLnhlb2wbxM'})
});