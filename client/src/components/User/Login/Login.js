import '../Register/Register.css';

const onSubmitLoginHandler = (e) => {
    e.preventDefault();

    console.log(e.target.username.value);
    console.log(e.target.password.value);
}

const Login = () => {
    return(
        <div className="main">
            <form onSubmit={onSubmitLoginHandler}  className="register-form" >
                <label htmlFor="username">Потребителско име</label>
                <input type="text" id="username" name="username" />

                <label htmlFor="password">Парола</label>
                <input type="password" id="password" name="password" />

                <input type="submit" className="register-send" value="изпрати" />
            </form>
        </div>
    );
}

export default Login;