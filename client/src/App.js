import React, {Suspense, lazy} from "react";
import {Route, Switch} from "react-router-dom";
import {Router} from "react-router";
import {BrowserRouter} from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from '@apollo/react-hooks';
import customHistory from './history';
import NavBar from './Components/NavBar';
const Home = lazy(() => import ("./Components/Home"));
const Weapons = lazy(() => import ("./Components/Weapons"));

export const client = new ApolloClient({uri: 'http://localhost:4000/'});

const App = () => (
  <ApolloProvider client={client}>
    <Router history={customHistory}>
      <BrowserRouter>
        <NavBar/>
        <Switch>
          <Suspense fallback={"...loading"}>
            <Route exact path="/" component={Home}/>
            <Route exact path="/weapons" component={Weapons}/>
          </Suspense>
        </Switch>
      </BrowserRouter>
    </Router>
  </ApolloProvider>
);

export default App;
