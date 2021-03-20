import style from './App.module..css';

function App() {
  return (
    <div className={style.app}>
      <nav className="navigation" >
        <div class="logo">
          <a tabindex="-1" href="/">
            BG-MIGRANT
          </a>
          </div>
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
