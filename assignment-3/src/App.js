import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import {Route, Switch, Redirect} from 'react-router-dom';
import NavBar from './components/navBar';
import Users from './components/users';
import Albums from './components/albums';
import Photos from './components/photos';
import UserData from './components/userData';
import AlbumData from './components/albumData';

function App() { 
  return (
   <React.Fragment>
      <NavBar></NavBar>
      <main className="container">
       <Switch>
        <Route path="/users/:id" component={UserData} />
        <Route path="/users" component={Users} />
        <Route path="/albums/:id" component={AlbumData} />
        <Route path="/albums" component={Albums} />
        <Route path="/photos" component={Photos} />
        <Redirect from="/" exact to="/users" />
       </Switch>
      </main>
   </React.Fragment>
  );
}

export default App;
