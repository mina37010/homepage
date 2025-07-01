import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaGithub , FaInstagram } from 'react-icons/fa';  // 必要なアイコンをインポート
import asaka_baner from '../assets/images/asaka_baner.png';

function LinkList() {
  return (
    <footer>
      {/* リンク集 */}
      <div className="link-section">
        <div className="page-links">
          <ul>
          <li>
              <button className="scroll-to-top link-color" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                ↑
              </button>
            </li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Gallery3D">3DGallery</Link></li>
            <li><Link to="/asakalisten">最近聞いた曲</Link></li>
          </ul>
        </div>

        <div className="social-links">
          <ul>
            <div className='twitter'>
              <div className='snsId link-color-hover'>Twitter: @akira__okumura</div>
              <li><a href="https://twitter.com/akira__okumura" target="_blank" rel="noopener noreferrer"><FaTwitter /></a></li>
            </div>
            <div className='instagram'>
              <div className='snsId link-color-hover'>Instagram: @sun__vector</div>
              <li><a href="https://instagram.com/sun__vector" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></li>
            </div>
            <div className='github'>
              <div className='snsId link-color-hover'>GitHub: mina37010</div>
              <li><a href="https://github.com/mina37010" target="_blank" rel="noopener noreferrer"><FaGithub /></a></li>
            </div>
          </ul>
        </div>
      </div>
      <div class="baner-links">
        <img
              src= {asaka_baner}
              alt="asaka_baner"
              style={{ height:"100px" , border:"1px solid #c29269" }}
        />
        </div>
    </footer>
  );
}

export default LinkList;
