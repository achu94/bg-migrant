import React, { useState } from 'react';
import * as userServices from '../Services/user';

import './Register.css';

const Register = ({
    history,
}) => {

    const [isValid, setValidation] = useState(true);
    const [email, setEmail] = useState('абв@абв.бг');
    const [password, setPassword] = useState('');


    const [userNameErrorMessage, setUserNameErrorMessage] = useState('');
    const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
    const [passwordRepErrorMessage, setPasswordRepErrorMessage] = useState('');
    const [emailErrorMessage, setEmailErrorMessage] = useState('');

    const hideWarning = (set_state_func) => {
        setTimeout(() => {
            set_state_func('');
        }, 3000)
    }

    const userNameValidate = (username) => {

        if (username.length < 3) {
            setUserNameErrorMessage('Потребителското име е твърде кратко');
            return true;
        }

        if (!(/^[a-zA-Z0-9_]+$/.test(username))) {
            setUserNameErrorMessage('Потребителското име е невалиден');
            return true;
        }

        hideWarning(setUserNameErrorMessage);
        return false;
    }

    const passwordValidate = (password) => {
        if (password.length < 4) {
            setPasswordErrorMessage('Паролaтa е невалиден');
            return true;
        }

        hideWarning(setPasswordErrorMessage);
        return false;
    }

    const passwordRepValidate = (passwordRep) => {
        if (passwordRep != password) {
            setPasswordRepErrorMessage('Паролите не съвпадат');
            return true;
        }

        hideWarning(setPasswordRepErrorMessage);
        return false;
    }

    const emailValidate = (email) => {

        if (!(/^[^@\s]+@[^@\s\.]+\.[^@\.\s]+$/.test(email))) {
            setEmailErrorMessage('Email адресът е невалиден');
            return true;
        }

        hideWarning(setEmailErrorMessage);
        return false;
    }

    const OnBLurErrorHandle = (e) => {
        let userInputValue = e.target.value;

        let validate = '';

        setValidation(true);

        if (!e.target.value) {
            return;
        }

        switch (e.target.id) {
            case 'username':
                validate = userNameValidate(userInputValue);
                break;
            case 'password':
                validate = passwordValidate(userInputValue);
                break;
            case 'password-rep':
                validate = passwordRepValidate(userInputValue);
                break;
            case 'register-email':
                validate = emailValidate(userInputValue);
                break;

            default:
                break;
        }

        if (!validate) {
            setValidation(false);
        }
    }


    const onSubmitRegisterHandler = (e) => {
        e.preventDefault();

        const userData = {
            "username": e.target.username.value,
            "password": e.target.password.value,
            "repaePassword": e.target["password-rep"].value,
            "eMail": e.target["register-email"].value
        };

        let validate = {
            "username" : true,
            "password" : true,
            "repaePassword" : true,
            "eMail" : true
        };

        validate.username = userNameValidate(userData.username);
        validate.password = passwordValidate(userData.password);
        validate.repaePassword = passwordRepValidate(userData.repaePassword);
        validate.eMail = emailValidate(userData.eMail);

        let falseCounter = 0;
        Object.values(validate).map(function(value) {
            if(!value){
                falseCounter++;
            }
        });

        if (falseCounter < 4) {
            return;            
        }

        setValidation(false);

        userServices.register(userData)
            .then((res) => {

                if(res.error){
                    if(res.error.input === 'username'){
                        setUserNameErrorMessage(res.error.message);
                        return;
                    } 
                    if(res.error.input === 'eMail'){
                        setEmailErrorMessage(res.error.message);
                        return;
                    }
                }
                else {
                    history.push('/login');
                }                
            });
    }

    const onEmailChangeHandler = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
    };

    const onPasswordChangeHandler = (e) => {
        e.preventDefault();
        setPassword(e.target.value);
    };

    return (
        <div className="main">
            <form onSubmit={onSubmitRegisterHandler} className="user-form" >
                <label htmlFor="username">Потребителско име*</label>
                <input onBlur={OnBLurErrorHandle} type="text" id="username" name="username" />
                <div className={`register_warning_username ${userNameErrorMessage ? "register_warning_show" : ''}`} >{userNameErrorMessage}</div>


                <label htmlFor="password">Парола*</label>
                <input onBlur={OnBLurErrorHandle} type="password" id="password" name="password" onChange={onPasswordChangeHandler} />
                <div className={`register_warning_password ${passwordErrorMessage ? "register_warning_show" : ''}`} >{passwordErrorMessage}</div>


                <label htmlFor="password_rep">Повторете паролата*</label>
                <input onBlur={OnBLurErrorHandle} type="password" id="password-rep" name="password-rep" />
                <div className={`register_warning_password_rep ${passwordRepErrorMessage ? "register_warning_show" : ''}`} >{passwordRepErrorMessage}</div>


                <label htmlFor="register_email">Електронна поща*</label>
                <input onBlur={OnBLurErrorHandle} type="email" id="register-email" name="register-email" placeholder={email} onChange={onEmailChangeHandler} />
                <div className={`register_warning_email ${emailErrorMessage ? "register_warning_show" : ''}`} >{emailErrorMessage}</div>

                <input disabled={isValid} type="submit" className={`user-send ${isValid ? "disabled" : ""}`} value="изпрати" />
            </form>
        </div>
    );
}

export default Register;