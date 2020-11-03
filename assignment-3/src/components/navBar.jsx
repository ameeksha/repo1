import React from 'react';

// import { NavLink, Link } from 'react-router-dom';


const NavBar = () => {
    return (


<nav className="navbar navbar-expand-sm bg-dark navbar-dark" style={{height:100}}>
  <a className="navbar-brand" href='#' style={{fontWeight:600}} >Bestpeers</a>
  

  <ul className="navbar-nav ml-5">
    <li className="nav-item">
      <a className="nav-link" href="/users">Users</a>
    </li>
    <li className="nav-item ml-2">
      <a className="nav-link" href="albums">Albums</a>
    </li>
    <li className="nav-item ml-2">
      <a className="nav-link" href="photos">Photos</a>
    </li>
  </ul>
</nav>

      );
}
 
export default NavBar;