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
          </ul>
        </div>

        <div className="social-links">
          <ul>
            <div className='twitter'>
              <div className='snsId'>Twitter: @akira__okumura</div>
              <li><a className='a-non a-hover' href="https://twitter.com/akira__okumura" target="_blank" rel="noopener noreferrer"><FaTwitter /></a></li>
            </div>
            <div className='instagram'>
              <div className='snsId'>Instagram: @sun__vector</div>
              <li><a className='a-non a-hover ' href="https://instagram.com/sun__vector" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></li>
            </div>
            <div className='github'>
              <div className='snsId'>GitHub: mina37010</div>
              <li><a className='a-non a-hover' href="https://github.com/mina37010" target="_blank" rel="noopener noreferrer"><FaGithub /></a></li>
            </div>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default LinkList;
