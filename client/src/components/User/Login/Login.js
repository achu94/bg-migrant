import React, {useState} from 'react';

// import '../Register/Register.css';
import '../Login/Login.css';
import * as userServices from '../Services/user';

const Login = ({
    history,
}) => {

    const [userNameErrorMessage, setUserNameErrorMessage] = useState('');
    const [passwordErrorMessage, setPasswordErrorMessage] = useState('');

    const hideWarning = (set_state_func) => {
        setTimeout(() => {
            set_state_func('');
        }, 3000)
    }

    const onSubmitLoginHandler = (e) => {
        e.preventDefault();
    
        const UserData = {
            username: e.target.username.value,
            password: e.target.password.value
        };
    
        userServices.login(UserData)
            .then((res) => {
                if(res.error){
                    if(res.error.input === 'username'){
                        setUserNameErrorMessage(res.error.message)
                        hideWarning(setUserNameErrorMessage);
                        return;
                    }
                    if(res.error.input === 'password'){
                        setPasswordErrorMessage(res.error.message);
                        hideWarning(setPasswordErrorMessage);
                        return;
                    } 
                }
                else {
                    history.push('/');
                }     
            })
    }

    return(
        <div className="main">
            <form onSubmit={onSubmitLoginHandler}  className="user-form" >
                <label htmlFor="username">Потребителско име</label>
                <input type="text" id="username" name="username" />
                <div className={`login_warning_username ${userNameErrorMessage ? "register_warning_show" : ''}`} >{userNameErrorMessage}</div>

                <label htmlFor="password">Парола</label>
                <input type="password" id="password" name="password" />
                <div className={`login_warning_password ${passwordErrorMessage ? "register_warning_show" : ''}`} >{passwordErrorMessage}</div>

                <input type="submit" className="user-send" value="изпрати" />
            </form>
        </div>
    );
}

export default Login;