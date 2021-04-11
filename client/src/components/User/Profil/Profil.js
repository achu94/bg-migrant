import {useContext, useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import { IsAuthContext } from '../../../Context/IsAuthContext';

import * as userServices from '../Services/user';

import './Profil.css';

const Profil = ({history}) => {
    const userInfo = useContext(IsAuthContext);
    if(!userInfo.userData.isAuth) window.location.href = '/login';
    
    const [userAllInfo, setUser] = useState();    
    const [isLoading, setIsLoading] = useState(true);   
    
    useEffect(() => {
        userServices.getUserInfo()
        .then( (user) => {
            setUser(user);
            setIsLoading(false);
            console.log(user);
        })
    }, [isLoading]);
    
    return(
        <div className="main">
            {userAllInfo && !isLoading ? (
                <>
                    <div className="user-info">
                        <span className="user-info-header">{userAllInfo.username}</span> 
                        <span> ИД: {userAllInfo._id}</span>
                        <span> Електронна поща: {userAllInfo.eMail}</span>                
                    </div>
                    <h1>Дейност</h1>
                    <div className="user-activity">
                        <div className="user-questions">
                            <h2>Въпроси</h2>
                            <ul>
                                {userAllInfo.posts.map( post => {
                                    return <li key={post._id}> <Link to={`posts/${post._id}`}> {post.title} </Link></li>
                                })}
                            </ul>
                        </div>
                        <div className="user-comments">
                            <h2>Коментари</h2>
                            <ul>
                            {userAllInfo.topics.map( topic => {
                                    return <li key={topic._id} >{topic.body}</li>
                                })}
                            </ul>
                        </div>
                    </div>
                    </>
                ) : (
                    <div className="loader"></div>
                )
            }
        </div>
    );
}

export default Profil;