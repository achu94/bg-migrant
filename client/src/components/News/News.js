import { Redirect, useHistory } from 'react-router-dom';

const News = ({
    match
}) => {

    const history = useHistory();

    // if(match.params.country === 'bg'){
    //     return <Redirect to="/" />
    // }

    if(match.params.country === 'bg'){
        history.push("/")
        return null;
    }

    console.log(match.params.country)

    return(
        <h1>
            News Page : {match.params.country}
        </h1>
    );
}

export default News;