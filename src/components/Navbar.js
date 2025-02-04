import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">TopPage</Link></li>
        <li><Link to="/210on">皆様と一緒</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;