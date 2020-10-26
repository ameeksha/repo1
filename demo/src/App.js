import React from 'react';
// import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Movies from './components/movies';
// import '../node_modules/font-awesome/css/font-awesome.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App() {
  return (
   <main className="container">
    <Movies></Movies>
   </main>
  );
}

export default App;
