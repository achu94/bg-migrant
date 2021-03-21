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
                    <span class="logo">
                        <a tabindex="-1" href="/">
                            BG-MIGRANT
                        </a>
                    </span>

                    <form action="/" id="search-form" method="get" style={{ width: "50%" }} >
                        <input className="search-bar" type="text" style={{ width: "100%" }} />
                    </form>

                    <ul >
                        <li className="listItem-2"><a href="#">Регистрация</a></li>
                        <li className="listItem-2"><a href="#">Вход</a></li>
                    </ul>

                </div>
                <ul>
                    <li className="listItem"><a href="#">Фoruм</a></li>
                    <li className="listItem"><a href="#">Новини</a></li>
                    <li className="listItem"><a href="#">Работа</a></li>
                    <li className="listItem"><a href="#">Kвиртира</a></li>
                    <li className="listItem"><a href="#">Българскo в Германия</a></li>
                </ul>
            </nav>
        )
    }
}

export default Navbar;