import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import kiroro1 from '../assets/images/kiroro1.webp';
import kiroro2 from '../assets/images/kiroro2.webp';
import kotoha1 from '../assets/images/kotoha1.webp';
import kotoha2 from '../assets/images/kotoha2.webp';

import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [hovered, setHovered] = useState(false);
  const [hovered2, setHovered2] = useState(false);

  return (
    <nav className="navbar">
      <div>
        <div className="center">
          <a className="a-non" href="/">
            <h1 className="site-name"><font className="red">A</font>saka.party!</h1>
          </a>
          <img
              src={hovered ? kiroro2 : kiroro1}
              alt="kiroro"
              style={{position:'relative',width: '3rem',bottom:'-0.5rem'}}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            />
            <img
              src={hovered2 ? kotoha2 : kotoha1}
              alt="kotoha"
              style={{position:'relative',width: '3rem',bottom:'-0.5rem'}}
              onMouseEnter={() => setHovered2(true)}
              onMouseLeave={() => setHovered2(false)}
            />
        </div>
      </div>
      <div>
        {/* ハンバーガーメニュー */}
        <div className="hamburger-menu link-color" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <GiHamburgerMenu/>
        </div>

        {/* ナビゲーションリンク */}
        <ul className={`nav-links ${isMenuOpen ? 'open honey-drip-box border' : ''}`}>
          <li className='honey-drip-text'><Link to="/">Home</Link></li>
          <li className='honey-drip-text'><Link to="/link">皆様と一緒!</Link></li>
          </ul>
      </div>
    </nav>
    
  );
}

export default Navbar;
