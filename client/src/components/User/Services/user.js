export const login = (userData) => {

    // Simple POST request with a JSON body using fetch
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
        mode: 'cors',
        credentials: 'include'
    };

    return fetch('http://localhost:5000/user/login', requestOptions)
        .then( res => res.json())
        .catch(function(error) {
            console.log('Looks like there was a problem: \n', error);
        });
}

export const register = (userData) => {

    // Simple POST request with a JSON body using fetch
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
    };

    return fetch('http://localhost:5000/user/register', requestOptions)
        .then(res => res.json())
        .catch(function(error) {
            console.log('Looks like there was a problem: \n', error);
        });
}