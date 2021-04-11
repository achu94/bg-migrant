import { Component } from 'react';
import {NavLink } from 'react-router-dom';
import { IsAuthContext } from '../../../Context/IsAuthContext';

import * as userServices from '../../User/Services/user';

import './Navbar.css';

class Navbar extends Component {

    static contextType = IsAuthContext;

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
                                to={`${this.context.userData.isAuth ? '/profil' : '/register'}`}
                            >
                                {`${this.context.userData.isAuth ? `Профил, (${this.context.userData.username})`: 'Регистрация'}`}
                            </NavLink>
                        </li>
                        <li className="listItem-2">
                            <a
                                onClick={this.onLogoutHandler} 
                                href={`${this.context.userData.isAuth ? '/' : '/login'}`}
                            > 
                                {`${this.context.userData.isAuth ? 'Изход' : 'Вход'}`}
                            </a>
                        </li>
                    </ul>

                </div>
                <ul>
                    <li className="listItem"><NavLink activeClassName="listItem_active" to="/forum">Фoruм</NavLink></li>
                    <li className="listItem"><NavLink activeClassName="listItem_active" to="/news/bg">Новини</NavLink></li>
                    <li className="listItem"><NavLink activeClassName="listItem_active" to="/work">Работа</NavLink></li>
                    <li className="listItem"><NavLink activeClassName="listItem_active" to="/blog">Блог</NavLink></li>
                    <li className="listItem"><NavLink activeClassName="listItem_active" to="/specpage">Българскo в Германия</NavLink></li>
                </ul>
            </nav>
        )
    }
}

export default Navbar;