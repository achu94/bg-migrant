import {useState, useEffect} from 'react';
import {NavLink } from 'react-router-dom';

import './Forum.css';
import * as postSerivces from './postServices';

const Forum = ({
    history,
}) => {

    const [postsData, setPosts] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        postSerivces.getAll()
            .then( (posts) => {
                setPosts(posts);
                setIsLoading(false);
            });
    }, []);

    const newPostHandle = () => {
        history.push('/posts/new');
    }

    return (
        <div className="main">
            <ul className="forum-list" >
            <div className="forum-header">
                <h1>Най-важни въпроси</h1>
                <button onClick={newPostHandle} className="forum-btn-new-post">Задай въпрос</button>
            </div>
                {!isLoading ? (
                    postsData.map( (post) => {
                        return(
                            <li key={post._id} >
                                <NavLink to={`/posts/${post._id}`}> <h3 className="forum-list-header" >{` ${post.title ? post.title : 'TITLE'} `}</h3> </NavLink>
                                <p className="forum-list-user">{` ${post.author ? post.author.username : 'AUTHOR'} `}</p>
                            </li>
                        )
                    })
                ) : (
                    <div className="loader"></div>
                )}
            </ul>
        </div>
    );
}

export default Forum;