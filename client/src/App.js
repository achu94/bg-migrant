import {useState, useEffect} from 'react';
import { Route, Link, NavLink, Redirect, Switch } from "react-router-dom";

import * as isAuthServices from './services/isAuthService';

import Navbar from "./components/Header/Navbar";

import Register from "./components/User/Register";
import Login from "./components/User/Login";
import Profil from "./components/User/Profil"

import Forum from "./components/Forum";
import NewPost from "./components/Forum/posts/NewPost";
import News from "./components/News";
import Work from "./components/Work";
import Flat from "./components/Flat";
import Specpage from "./components/Specpage";
import Footer from "./components/Footer";

function App() {

  const [isLogged, setIsLogged] = useState(false);

    useEffect(() => {
        isAuthServices.isAuth()
            .then( (res) => {
                if(res.error){
                    alert('Cannot get cookie.')
                    return;
                }
                setIsLogged(res.isAuth);
            })
            
    }, []);

  return (
    <div className="app">
      <Navbar />
      <Switch>
        <Route path="/" exact />


        <Route path="/login" component={Login} >
          {isLogged ? <Redirect to="/profil" /> : <Login />}
        </Route>

        <Route path="/profil" component={Profil} />
        <Route path="/forum" component={Forum} />
        <Route path="/posts/new" component={NewPost} />
        <Route path="/news/:country" component={News} />
        <Route path="/work" component={Work} />
        <Route path="/flat" component={Flat} />
        <Route path="/specpage" component={Specpage} />
        <Route component={() => <h1> Error Page!</h1>} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
