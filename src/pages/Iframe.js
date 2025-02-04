import React from 'react';
import { useLocation } from 'react-router-dom';

const Iframe = () => {
  const site = {
    "/210on": "https://210o.net"
  };
  const notAllowedSite = {
    "/nimoca": "https://nimoca.vercel.app",
    "/maroyaka": "https://maroyaka.party",
    "/inaniwa": "https://いなにわうどん.みんな"
  }
  const location = useLocation();

  return (
    <div className="Iframe">
      <h1>なんですか、これは？</h1>
      <h2>{location.pathname.replace('/', '')}</h2>

      {/* iframe */}
      <iframe
        id="inlineFrame"
        title={location.pathname}
        width="95%"
        height="75%"
        src={site[location.pathname]}
        style={{ border: 'none', marginBottom: '20px' }}
        sandbox="allow-top-navigation"
      ></iframe>

      {/* ボタンとしてサイトリンクを表示 */}
      <div className="button-container">
        {Object.entries(site).map(([path]) => (
          <a href={path} target="_blank" rel="noopener noreferrer" key={path}>
            <button className="site-button">
              {path.replace('/', '')}
            </button>
          </a>
        ))}
        {Object.entries(notAllowedSite).map(([path, url]) => (
          <a href={url} target="_blank" rel="noopener noreferrer" key={path}>
            <button className="site-button">
              {path.replace('/', '')}
            </button>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Iframe;
