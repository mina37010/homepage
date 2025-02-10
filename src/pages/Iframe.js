import React from 'react';
import { useLocation } from 'react-router-dom';


const Iframe = () => {
  const site = {
    "/210on": "https://210o.net",
    "/inaniwa": "https://いなにわうどん.みんな",
    "/nimoca": "https://nimoca.vercel.app",
    "/maroyaka": "https://maroyaka.party",
    "/churu": "https://itsu.dev"
  };
  const notAllowedSite = {
    
  }

  const username = {
    "/210on":"ぱうろ",
    "/nimoca": "nimoca",
    "/maroyaka": "定積",
    "/inaniwa": "いなにわうどん",
    "/churu": "ちゅるり"
  }
  const location = useLocation();

  const isContact = location.pathname === '/link';

  return (
    <div>
    <div className={`Iframe ${isContact ? 'NoIframe' : ''}`}>
      <h1>なんですか、これは?</h1>
      <h2><a className='a-non a-hover' href={site[location.pathname]}>{location.pathname.replace('/', '')}</a></h2>

      {/* iframe */}
      <iframe     
        id="inlineFrame"
        title={location.pathname}
        width="95%"
        height="75%"
        src={site[location.pathname]}
        style={{ border: 'none', marginBottom: '20px' }}
        sandbox="allow-scripts"
      ></iframe>
    </div>
    <div className={`center ${isContact ? '' : 'NoIframe'}`}>
      <h1>皆様のリンク集！</h1>
    </div>
      {/* ボタンとしてサイトリンクを表示 */}
      <div className="button-container">
        {Object.entries(site).map(([path]) => (
          <a className="a-non" href={path} target="_blank" rel="noopener noreferrer" key={path}>
            <button className="site-button">
              <span>{username[path]}</span>
              <span className="button-username">{site[path].replace('https://','')}</span>
            </button>
          </a>
        ))}
        {Object.entries(notAllowedSite).map(([path, url]) => (
          <a className="a-non" href={url} target="_blank" rel="noopener noreferrer" key={path}>
            <button className="site-button">
              <span>{username[path]}</span>
              <span className="button-username">{notAllowedSite[path].replace('https://','')}</span>
            </button>
          </a>
        ))}
      </div>

      <style>{`
        .NoIframe{
          display:none;
        }
      `}</style>
    </div>
  );
};

export default Iframe;
