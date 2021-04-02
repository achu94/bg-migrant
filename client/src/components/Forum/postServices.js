export const newPost = () => {

    // Simple POST request with a JSON body using fetch
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        mode: 'cors',
        credentials: 'include'
    };

    return fetch('http://localhost:5000/posts/new', requestOptions)
        .then(res => res.text())
        .catch(function(error) {
            console.log('Looks like there was a problem: \n', error);
        });
}