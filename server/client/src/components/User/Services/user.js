export const login = (userData) => {

    // Simple POST request with a JSON body using fetch
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
        mode: 'cors',
        credentials: 'include'
    };

    return fetch(document.location.origin + '/user/login', requestOptions)
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

    return fetch(document.location.origin + '/user/register', requestOptions)
        .then(res => res.json())
        .catch(function(error) {
            console.log('Looks like there was a problem: \n', error);
        });
}

export const logout = () => {

    // Simple POST request with a JSON body using fetch
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        mode: 'cors',
        credentials: 'include'
    };

    return fetch(document.location.origin + '/user/logout', requestOptions)
        .then(res => res.text())
        .catch(function(error) {
            console.log('Looks like there was a problem: \n', error);
        });
}

export const getUserInfo = () => {
    // Simple POST request with a JSON body using fetch
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        mode: 'cors',
        credentials: 'include'
    };

    return fetch(document.location.origin + '/user/', requestOptions)
        .then(res => res.json())
        .catch(function(error) {
            console.log('Looks like there was a problem: \n', error);
        });
}