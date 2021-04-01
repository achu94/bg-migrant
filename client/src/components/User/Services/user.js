const loginService = (userData) => {

    // Simple POST request with a JSON body using fetch
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
        mode: 'cors',
        credentials: 'include'
    };

    fetch('http://localhost:5000/user/login', requestOptions)
        .then(res => window.location.href = '/')
        .catch(function(error) {
            console.log('Looks like there was a problem: \n', error);
        });
}

const registerService = (userData) => {

    // Simple POST request with a JSON body using fetch
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
    };

    fetch('http://localhost:5000/user/register', requestOptions)
        .then(res => res.text())
        .then( (res) => {
            return window.location.href = '/login';            
        });
}

export {
    loginService,
    registerService
}