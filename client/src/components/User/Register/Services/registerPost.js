const Post = (userData) => {

    // Simple POST request with a JSON body using fetch
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
    };

    fetch('http://localhost:5000/user/register', requestOptions)
        .then(res => res.text())
        .then( (res) => {
            console.log(res);
            return window.location.href = '/login';            
        });
}

export {
    Post,
}