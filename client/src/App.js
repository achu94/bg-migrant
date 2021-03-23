import { Route, Link, NavLink, Redirect, Switch } from "react-router-dom";

import Navbar from "./components/Header/Navbar";

import Register from "./components/User/Register";
import Login from "./components/User/Login";

import Forum from "./components/Forum";
import News from "./components/News";
import Work from "./components/Work";
import Flat from "./components/Flat";
import Specpage from "./components/Specpage";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Switch>
        <Route path="/" exact />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />

        <Route path="/forum" component={Forum} />
        <Route path="/news/:country" component={News} />
        <Route path="/work" component={Work} />
        <Route path="/flat" component={Flat} />
        <Route path="/specpage" component={Specpage} />
        <Route component={() => <h1> Error Page!</h1>} />
      </Switch>
    </div>
  );
}

export default App;
