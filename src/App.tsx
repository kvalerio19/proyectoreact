import React from "react";
import Home from "./Home";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PostMovie from "./PostMovie";
import Profile from "./Profile";



const App: React.FC = () => {

    return<>
    <BrowserRouter>
              <Switch>
              <Route path='/' exact >
                 <Home/>
              </Route>


                  <Route path='/post' exact>
                      <PostMovie/>

                  </Route>
                  <Route path='/profile' exact>
                      <Profile/>

                  </Route>
              </Switch>
              
              </BrowserRouter>

    </>
}

export default App