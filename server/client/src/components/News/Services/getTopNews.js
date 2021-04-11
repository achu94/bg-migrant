export const getTopNews = (match) => {
    
    return fetch('http://localhost:3000/news')
        .then((resp) => {
            return resp.json()
        }) 
        .then((data) => {
            return data;
        })
        .catch((error) => {
            console.log(error, "catch the hoop")
        })
  }