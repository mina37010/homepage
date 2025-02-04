import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import asaka from '../assets/images/asaka.jpeg';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <a className="a-non" href="/">
        <div className="logo-container">
          <img src={asaka} alt="asaka" width="100px" height="100px" />
          <h1 className="site-name"><font color="red">A</font>saka.party!</h1>
        </div>
      </a>

      {/* ハンバーガーメニュー */}
      <div
        className="hamburger-menu"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        &#9776; {/* 三点リーダーアイコン */}
      </div>

      {/* ナビゲーションリンク */}
      <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <li><Link to="/">TopPage</Link></li>
        <li><Link to="/210on">皆様と一緒!</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
