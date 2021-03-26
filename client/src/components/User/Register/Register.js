import React, { useState } from 'react';

import './Register.css';

const Register = () => {

    const [{isValid}, setValidation] = useState(false);
    const [email, setEmail] = useState('абв@абв.бг')

    const onSubmitRegisterHandler = (e) => {
        e.preventDefault();
    
        console.log(e.target.username.value);
        console.log(e.target.password.value);
        console.log(e.target["password-rep"].value);
        console.log(e.target["register-email"].value);
    
        if(e.target["register-email"].value){
            setValidation( {isValid: true});
        }
    }

    const onEmailChangeHandler = (e) => {
        e.preventDefault();
        setEmail(e.target.value);        
    };

    return(
        <div className="main">
            <form onSubmit={onSubmitRegisterHandler}  className="user-form" >
                <label htmlFor="username">Потребителско име</label>
                <input type="text" id="username" name="username" />

                <label htmlFor="password">Парола</label>
                <input type="password" id="password" name="password" />

                <label htmlFor="password-rep">Повторете паролата</label>
                <input type="password" id="password-rep" name="password-rep" />

                <label htmlFor="register-email">Електронна поща</label>
                <input type="email" id="register-email" name="register-email" placeholder={email} onChange={onEmailChangeHandler} />

                <input type="submit" className="user-send" value="изпрати" />
            </form>
        </div>
    );
}

export default Register;