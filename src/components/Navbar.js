import React, { useState, useEffect } from 'react';
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
  const [clickCount, setClickCount] = useState(0);
  const [isReversed, setIsReversed] = useState(false);

  useEffect(() => {
    const viewElement = document.querySelector('.pages');
    if (viewElement) {
      if (isReversed) {
        viewElement.classList.add('reverse');
      } else {
        viewElement.classList.remove('reverse');
      }
    }
  }, [isReversed]);

  const handleKiroroClick = () => {
    const newCount = clickCount + 1;
    if (newCount >= 5) {
      setClickCount(0);
      setIsReversed(prev => !prev); // toggle reverse class
    } else {
      setClickCount(newCount);
    }
  };

  return (
    <nav className="navbar">
      <div>
        <div className="center">
          <a className="a-non" href="/">
            <h1 className="site-name neon-hover">
              <font className="red">A</font>saka.party!
            </h1>
          </a>

          <div style={{ position: 'relative' }}>
            <img
              src={hovered ? kiroro2 : kiroro1}
              alt="kiroro"
              style={{ position: 'relative', width: '3rem', bottom: '-0.5rem', cursor: 'pointer' }}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              onClick={handleKiroroClick}
            />
            {/* ダメージ表示 */}
            <div style={{
              position: 'absolute',
              bottom: '-1.5rem',
              right: '-20%',
              transform: 'translateX(-50%)',
              fontSize: '0.8rem',
              color: '#e63946',
              fontWeight: 'bold'
            }}>
              {clickCount > 0 && `${clickCount} Hit!`}
            </div>
          </div>

          <img
            src={hovered2 ? kotoha2 : kotoha1}
            alt="kotoha"
            style={{ position: 'relative', width: '3rem', bottom: '-0.5rem' }}
            onMouseEnter={() => setHovered2(true)}
            onMouseLeave={() => setHovered2(false)}
          />
        </div>
      </div>

      <div>
        <div className="hamburger-menu link-color" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <GiHamburgerMenu />
        </div>

        <ul className={`nav-links ${isMenuOpen ? 'open honey-drip-box border' : ''}`}>
          {[
            { to: "/", text: "Home" },
            { to: "/link", text: "皆様と一緒!" },
            { to: "/Gallery3D", text: "3D Gallery" },
            { to: "/asakalisten", text: "最近聞いた曲" },
          ].map(({ to, text }) => (
            <li className='honey-drip-text pop-text' key={to}>
              <Link to={to}>
                {text.split("").map((char, i) => (
                  <span key={i} style={{ animationDelay: `${i * 0.1}s` }}>{char}</span>
                ))}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
