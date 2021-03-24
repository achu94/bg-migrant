export const getTopNews = (match) => {
    
    return fetch('http://localhost:3000/news')
        .then((resp) => {
            console.log(resp.json);
            return resp.json()
        }) 
        .then((data) => {
            return data;
        })
        .catch((error) => {
            console.log(error, "catch the hoop")
        })
  }