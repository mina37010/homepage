import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaGithub , FaInstagram } from 'react-icons/fa';  // 必要なアイコンをインポート

function LinkList() {
  return (
    <footer className="footer">
      {/* リンク集 */}
      <div className="link-section">
        <div className="page-links">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/party">about</Link></li>
          </ul>
        </div>

        <div className="social-links">
          <ul>
            <li><a className='a-non a-hover' href="https://twitter.com/akira__okumura" target="_blank" rel="noopener noreferrer"><FaTwitter /></a></li>
            <li><a className='a-non a-hover' href="https://instagram.com/sun__vector" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></li>
            <li><a className='a-non a-hover' href="https://github.com/mina37010" target="_blank" rel="noopener noreferrer"><FaGithub /></a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default LinkList;
