import style from './App.module..css';

import Navbar from './components/Header/Navbar';
import NewsList from './components/News/NewsList';

function App() {
  return (
    <div className="app">
      <Navbar />
      <NewsList />
    </div>
  );
}

export default App;
