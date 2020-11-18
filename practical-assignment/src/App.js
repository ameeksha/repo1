import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './components/navBar';
import Users from './components/users';
import Photos from './components/photos';
import Albums from './components/albums';
import UserData from './components/userData';
import AlbumData from './components/albumData';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
