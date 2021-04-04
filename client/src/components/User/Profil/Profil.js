import {useContext, useEffect, useState} from 'react';
import {Link } from "react-router-dom";
import { IsAuthContext } from '../../../Context/IsAuthContext';

import * as userServices from '../Services/user';

import './Profil.css';

const Profil = (props) => {
    const [userAllInfo, setUser] = useState();
    const userInfo = useContext(IsAuthContext);
    const [isLoading, setIsLoading] = useState(true);
    
    
    
    useEffect(() => {
        userServices.getUserInfo()
        .then( (user) => {
            setUser(user);
            setIsLoading(false);
            console.log(user);
        })
    }, [userInfo]);
    // if(!userInfo.userData.isAuth) return history.push('/login')>

    return(
        <div className="main">
            {userAllInfo && !isLoading ? (
                <>
                    <div className="user-info">
                        <span className="user-info-header">{userAllInfo.username}</span> 
                        <span> ID: {userAllInfo._id}</span>
                        <span> E-Mail: {userAllInfo.eMail}</span>                
                    </div>
                    <h1>Activity</h1>
                    <div className="user-activity">
                        <div className="user-questions">
                            <h2>Questions</h2>
                            <ul>
                                {userAllInfo.posts.map( post => {
                                    return <li> <Link to={`posts/${post._id}`}> {post.title} </Link></li>
                                })}
                            </ul>
                        </div>
                        <div className="user-comments">
                            <h2>Comments</h2>
                            <ul>
                            {userAllInfo.topics.map( topic => {
                                    return <li>{topic.body}</li>
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