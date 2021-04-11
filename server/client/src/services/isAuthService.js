export const isAuth = (token) => {

    // Simple POST request with a JSON body using fetch
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        // body: JSON.stringify(token),
        mode: 'cors',
        credentials: 'include'
    };

    return fetch(document.location.origin, requestOptions)
        .then( res => res.json())
        .catch(function(error) {
            console.log('Looks like there was a problem: \n', error);
        });
}