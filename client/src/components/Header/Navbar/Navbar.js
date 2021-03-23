import { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

import './Navbar.css';

class Navbar extends Component {
    constructor(props) {
        super(props)
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

                    <ul >
                        <li className="listItem-2"><NavLink to="/register">Регистрация</NavLink></li>
                        <li className="listItem-2"><NavLink to="/login">Вход</NavLink></li>
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