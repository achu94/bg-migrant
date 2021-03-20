import style from './App.module..css';

function App() {
  return (
    <div className={style.app}>
      <div id="logo">
      <a tabindex="-1" href="/">
        BG-MIGRANT
      </a>
    </div>
      <nav className="navigation" >
        <ul>
          <li className="listItem"><a href="#">Документи</a></li>
          <li className="listItem"><a href="#">Новини</a></li>
          <li className="listItem"><a href="#">Вход</a></li>
          <li className="listItem"><a href="#">Регистрация</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
