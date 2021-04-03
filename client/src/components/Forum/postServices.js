export const newPost = (postData) => {
    // Simple POST request with a JSON body using fetch
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(postData),
        mode: 'cors',
        credentials: 'include'
    };

    return fetch('http://localhost:5000/posts/new', requestOptions)
        .then(res => res.json())
        .catch(function(error) {
            console.log('Looks like there was a problem: \n', error);
        });
}

export const getPost = (id) => {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(),
        mode: 'cors',
        credentials: 'include'
    };

    return fetch('http://localhost:5000/posts/' + id, requestOptions)
        .then(res => res.json())
        .catch(function(error) {
            console.log('Looks like there was a problem: \n', error);
        });
}

export const getAll = () => {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        mode: 'cors',
        credentials: 'include'
    };

    return fetch('http://localhost:5000/posts', requestOptions)
        .then(res => res.json())
        .catch(function(error) {
            console.log('Looks like there was a problem: \n', error);
        });
}