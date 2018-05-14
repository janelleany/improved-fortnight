export let getAllFetch = () => 
    fetch("http://localhost:3001/all", {
        method: "GET",
        mode: "cors"
    })