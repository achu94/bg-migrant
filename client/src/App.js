import {useState, useEffect} from 'react';
import { Route, Switch } from "react-router-dom";
import { IsAuthContext } from './Context/IsAuthContext';

import * as isAuthServices from './services/isAuthService';

import Navbar from "./components/Header/Navbar";

import Register from "./components/User/Register";
import Login from "./components/User/Login";
import Profil from "./components/User/Profil"

import Forum from "./components/Forum";
import NewPost from "./components/Forum/posts/NewPost";
import Post from "./components/Forum/posts/Post";


import News from "./components/News";
import Work from "./components/Work";
import Blog from "./components/Blog";
import Specpage from "./components/Specpage";
import Footer from "./components/Footer";

function App() {

  const [userData, setUserData] = useState({
    isAuth : false,
    user_id : '',
    username : '',
  });

    useEffect(() => {
        isAuthServices.isAuth()
            .then( (res) => {
                if(res.error){
                    alert('Cannot get cookie.')
                    return;
                }

                setUserData(res);
            })
            
    }, []);

  return (
    

    <div className="app">
        
          <IsAuthContext.Provider value={{userData, setUserData}}>
            <Navbar />
            <Switch>
              <Route path="/" exact />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/profil" component={Profil} />

              <Route path="/posts/new" exact component={NewPost} />
              <Route path="/posts/:id" component={Post} />

              <Route path="/forum" component={Forum} />
              <Route path="/news/:country" component={News} />
              <Route path="/work" component={Work} />
              <Route path="/blog" component={Blog} />
              <Route path="/specpage" component={Specpage} />
              <Route component={() => <h1> Error Page!</h1>} />
            </Switch>
          </IsAuthContext.Provider>

      <Footer />
    </div>
  );
}

export default App;
