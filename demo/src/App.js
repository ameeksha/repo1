import React from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';
import Movies from './components/movies';
import MovieForm from './components/movieForm';
import Rentals from './components/rentals';
import Customer from './components/customer';
import NotFound from './components/notFound';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavBar from './components/navBar';
import LoginForm from './components/loginForm';
import './App.css';
import RegisterForm from './components/registerForm';

function App() {
  return (
  <React.Fragment>
    <NavBar ></NavBar>,
   <main className="container">
    <Switch>
    <Route path="/login" component={LoginForm} />
    <Route path="/register" component={RegisterForm} />
    <Route path="/movies/:id" component={MovieForm} />
    <Route path="/movies" component={Movies} />
    <Route path="/customer" component={Customer} />
    <Route path="/rentals" component={Rentals} />
    <Route path="/not-found" component={NotFound} />
    <Redirect from="/" exact to="/movies" />
    <Redirect to="/not-found" />
    </Switch>
   </main>
  </React.Fragment>
  );
}

export default App;
