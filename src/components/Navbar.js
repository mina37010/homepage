import React from 'react';
import { Link } from 'react-router-dom';
import asaka from '../assets/images/asaka.jpeg';

function Navbar() {
  return (
    <nav className="navbar">
      <a className="a-non" href="/">
      <div className="logo-container" >
      <img src={asaka} alt="asaka" width="100px" height="100px" />
        <h1 className="site-name"><font color="red">A</font>saka.party!</h1>
      </div>
      </a>
      <ul className="nav-links">
        <li><Link to="/">TopPage</Link></li>
        <li><Link to="/210on">皆様と一緒</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
