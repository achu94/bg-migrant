import { Component } from 'react';

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
                        <li className="listItem-2"><a href="/register">Регистрация</a></li>
                        <li className="listItem-2"><a href="/login">Вход</a></li>
                    </ul>

                </div>
                <ul>
                    <li className="listItem"><a href="/forum">Фoruм</a></li>
                    <li className="listItem"><a href="/news">Новини</a></li>
                    <li className="listItem"><a href="/work">Работа</a></li>
                    <li className="listItem"><a href="/flat">Kвиртира</a></li>
                    <li className="listItem"><a href="/specpage">Българскo в Германия</a></li>
                </ul>
            </nav>
        )
    }
}

export default Navbar;