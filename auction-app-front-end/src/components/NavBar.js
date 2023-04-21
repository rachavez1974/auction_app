import '../css/NavBar.css';
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import SignOut from './SignOut.js'
import React, { useState } from 'react';

function NavBar(props) {

  function CustomLink({to, children, ...props}){
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return(
      <li className = { isActive ? "active" : "" }>
        <Link to={to} {...props} className="navbar-item"
          activeClassName="is-active">
          {children}
        </Link>
      </li>
    );
  }

  let signedIn;
  if (props.currUser) {
    signedIn = <CustomLink to="/sign-out">Log Out</CustomLink>
  } else {
    signedIn = <CustomLink to="/sign-in">Sign In</CustomLink>
  }

  return (
    <nav className="navbar">
    <Link
      className="navbar-item"
      activeClassName="is-active"
      to="/"
      exact
    >
      Home
    </Link>

    <div className="dropdown">
      <button className="dropbtn">Auctions
        <i className="fa fa-caret-down" />
      </button>
      <ul>
        <div className="dropdown-content">
          <CustomLink to="/add-an-auction">Add An Auction</CustomLink>
          <CustomLink to="/auctions">Join An Auction</CustomLink>
          <CustomLink to="/auctions">Auctions</CustomLink>
        </div>
      </ul>
    </div>

    <div className="dropdown">
      <button className="dropbtn">Profile
        <i className="fa fa-caret-down" />
      </button>
      <ul>
        <div className="dropdown-content">
          { signedIn }
        </div>
      </ul>
    </div>


    </nav>
  );
}

export default NavBar;
