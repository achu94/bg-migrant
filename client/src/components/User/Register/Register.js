import React, { useState } from 'react';
import {Post} from './Services/registerPost';

import './Register.css';

const Register = () => {

    const [{ isValid }, setValidation] = useState(false);
    const [email, setEmail] = useState('абв@абв.бг');

    // const [userNameValidation, setUserNameValidation]               = useState(false);
    // const [userPasswordValidation, setUserPasswordValidation]       = useState(false);
    // const [userPasswordRepValidation, setUPasswordRepameValidation] = useState(false);
    // const [userEmailValidation, setUEmailameValidation]             = useState(false);

    const [sendDisabled, setSendDisabled] = useState(false);

    const onBlurErrorHandler = (e) => {

    }

    const onSubmitRegisterHandler = (e) => {
        e.preventDefault();

        // console.log(e.target.username.value);
        // console.log(e.target.password.value);
        // console.log(e.target["password-rep"].value);
        // console.log(e.target["register-email"].value);

        const userData = {
            "username" : e.target.username.value,
            "password" : e.target.password.value,
            "repaePassword" : e.target["password-rep"].value,
            "eMail" : e.target["register-email"].value
        };
        
        Post(userData);
    }

    const onEmailChangeHandler = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
    };

    return (
        <div className="main">
            <form onSubmit={onSubmitRegisterHandler} className="user-form" >
                <label htmlFor="username">Потребителско име*</label>
                <input onBlur={onBlurErrorHandler} type="text" id="username" name="username" />

                <label htmlFor="password">Парола*</label>
                <input onBlur={onBlurErrorHandler} type="password" id="password" name="password" />

                <label htmlFor="password_rep">Повторете паролата*</label>
                <input onBlur={onBlurErrorHandler} type="password" id="password-rep" name="password-rep" />

                <label htmlFor="register_email">Електронна поща*</label>
                <input onBlur={onBlurErrorHandler} type="email" id="register-email" name="register-email" placeholder={email} onChange={onEmailChangeHandler} />

                <input disabled={sendDisabled} type="submit" className="user-send" value="изпрати" />
            </form>
        </div>
    );
}

export default Register;