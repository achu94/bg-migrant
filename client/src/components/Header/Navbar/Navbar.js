import { Component } from 'react';
import {NavLink } from 'react-router-dom';

import * as isAuthService from '../../../services/isAuthService';
import * as userServices from '../../User/Services/user';

import './Navbar.css';

class Navbar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isAuth : false,
            username : '',
            userId : ''
        }
    }

    componentDidMount() {
        isAuthService.isAuth()
        .then((res) => {
            if(res.error){
                alert('Cannot get cookie.')
            } else {
                this.setState( {
                    isAuth : res.isAuth,
                    username: res.username,
                    userId: res.user_id
                })
            }     
        })
    }

    onLogoutHandler(){
        userServices.logout()
            .then((res) => {
                if(res.error){
                    alert('Logout Error !');
                } else {
                    
                }
            })
    }

    render() {
        return (

            <nav className="navigation" >
                <div className="nav-header-1" >
                    <span className="logo">
                        <a tabIndex="-1" href="/">
                            BG-MIGRANT
                        </a>
                    </span>

                    <form action="/q" id="search-form" method="get" style={{ width: "50%" }} >
                        <input className="search-bar" type="text" style={{ width: "100%" }} />
                    </form>

                    <ul>
                        <li className="listItem-2">
                            <NavLink
                                to={`${this.state.isAuth ? '/profil' : '/register'}`}
                            >
                                {`${this.state.isAuth ? `Профил, (${this.state.username})`: 'Регистрация'}`}
                            </NavLink>
                        </li>
                        <li className="listItem-2">
                            <a
                                onClick={this.onLogoutHandler} 
                                href={`${this.state.isAuth ? '/' : '/login'}`}
                            > 
                                {`${this.state.isAuth ? 'Изход' : 'Вход'}`}
                            </a>
                        </li>
                    </ul>

                </div>
                <ul>
                    <li className="listItem"><NavLink activeClassName="listItem_active" to="/forum">Фoruм</NavLink></li>
                    <li className="listItem"><NavLink activeClassName="listItem_active" to="/news/bg">Новини</NavLink></li>
                    <li className="listItem"><NavLink activeClassName="listItem_active" to="/work">Работа</NavLink></li>
                    <li className="listItem"><NavLink activeClassName="listItem_active" to="/flat">Kвиртира</NavLink></li>
                    <li className="listItem"><NavLink activeClassName="listItem_active" to="/specpage">Българскo в Германия</NavLink></li>
                </ul>
            </nav>
        )
    }
}

export default Navbar;