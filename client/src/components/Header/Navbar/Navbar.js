import { Component } from 'react';
import { Link } from 'react-router-dom';

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
                        <li className="listItem-2"><Link to="/register">Регистрация</Link></li>
                        <li className="listItem-2"><Link to="/login">Вход</Link></li>
                    </ul>

                </div>
                <ul>
                    <li className="listItem"><Link to="/forum">Фoruм</Link></li>
                    <li className="listItem"><Link to="/news">Новини</Link></li>
                    <li className="listItem"><Link to="/work">Работа</Link></li>
                    <li className="listItem"><Link to="/flat">Kвиртира</Link></li>
                    <li className="listItem"><Link to="/specpage">Българскo в Германия</Link></li>
                </ul>
            </nav>
        )
    }
}

export default Navbar;