import React from 'react';
import { NavLink, Link } from 'react-router-dom';
// import { React } from 'react';


const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
         <Link className="navbar-brand" to="/">React</Link>
         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
           <span className="navbar-toggler-icon"></span>
         </button>
         <div className="collapse navbar-collapse" id="navbarNav">
    
         <NavLink className="nav-link" to="/movies">Movies <span class="sr-only">(current)</span></NavLink>
       
         <NavLink className="nav-link" to="/customer">Customer</NavLink>
       
         <NavLink className="nav-link" to="/rentals">Rentals</NavLink>


         <NavLink className="nav-link" to="/login">Login</NavLink>

         <NavLink className="nav-link" to="/register">Register</NavLink>
       
        </div>
       </nav>
      );
}
 
export default NavBar;