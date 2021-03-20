import style from './App.module..css';

function App() {
  return (
    <div className="app">
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
            <li className=""><a href="#">Вход</a></li>
            <li className=""><a href="#">Регистрация</a></li>
          </ul>

        </div>
        <ul>
          <li className="listItem"><a href="#">Документи</a></li>
          <li className="listItem"><a href="#">Новини</a></li>
          <li className="listItem"><a href="#">Работа</a></li>
          <li className="listItem"><a href="#">Aпартамент</a></li>
          <li className="listItem"><a href="#">Български в Германия</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
