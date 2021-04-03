import {useContext} from 'react';
import {Redirect } from "react-router-dom";
import { IsAuthContext } from '../../../Context/IsAuthContext';

const Profil = ({
    history,
}) => {

    const userInfo = useContext(IsAuthContext);
    if(!userInfo.userData.isAuth) return <Redirect to="/login" />

    return(
        <h1>
            Profil Page {userInfo.userData.username}
        </h1>
    );
}

export default Profil;