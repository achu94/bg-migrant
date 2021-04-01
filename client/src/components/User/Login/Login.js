import '../Register/Register.css';
import { loginService } from '../Services/user';

const onSubmitLoginHandler = (e) => {
    e.preventDefault();

    const UserData = {
        username: e.target.username.value,
        password: e.target.password.value
    };

    loginService(UserData);
}

const Login = () => {
    return(
        <div className="main">
            <form onSubmit={onSubmitLoginHandler}  className="user-form" >
                <label htmlFor="username">Потребителско име</label>
                <input type="text" id="username" name="username" />

                <label htmlFor="password">Парола</label>
                <input type="password" id="password" name="password" />

                <input type="submit" className="user-send" value="изпрати" />
            </form>
        </div>
    );
}

export default Login;