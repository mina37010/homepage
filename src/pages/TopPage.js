import React from 'react';
import { LuPartyPopper } from "react-icons/lu";
import { PiMountainsFill } from "react-icons/pi";
import { GiCompactDisc } from "react-icons/gi";
import { useState, useEffect, useCallback  } from 'react';
import { SlArrowLeft,SlArrowRight } from "react-icons/sl";

import WhatsNew from '../components/WhatsNew'; 
import RippleImageSwitch from '../components/RippleImageSwitch';

import leaf from '../assets/images/leaf.webp';
import asaka2 from '../assets/images/asaka2.jpeg';
import Twitter_card from '../assets/images/Twitter_card.png';
const TopPage = () => {
  const images = [
    {src:'https://pbs.twimg.com/profile_images/1601292387250499584/09YdhLVp_400x400.jpg',text:'いなにわうどん',link:"https://いなにわうどん.みんな"},
    {src:'https://pbs.twimg.com/profile_images/1722595990803447808/KzZAqAZR_400x400.png',text:'ちゅるり',link:"https://itsu.dev"},
    {src:'https://pbs.twimg.com/profile_images/1876704743046967296/WRa_prYp_400x400.png',text:'ぱうろ',link:"https://210o.net"},
    {src:'https://pbs.twimg.com/profile_images/1670775795898544128/GT-UPbqy_400x400.jpg',text:'定積',link:"https://maroyaka.party"},
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextImage = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const goToPrevImage = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    const interval = setInterval(goToNextImage, 5000);
    return () => clearInterval(interval);
  }, [goToNextImage]);


  const text = "Asaka.party!";
  const [chars, setChars] = useState([]);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // 文字分解
    const splitChars = text.split('').map((char, index) => ({
      char,
      isFirst: index === 0,
      i: index,
    }));
    setChars(splitChars);
  }, []);

  useEffect(() => {
    const navigationEntries = performance.getEntriesByType("navigation");
    const isReload = navigationEntries.length > 0 && navigationEntries[0].type === "reload";
    const hasShownAnimation = sessionStorage.getItem('hasShownAnimation');
  
    // 初回 or リロードのときだけアニメーション実行
    if (isReload || !hasShownAnimation) {
      setIsAnimating(true);
      sessionStorage.setItem('hasShownAnimation', 'true');
      document.body.style.overflow = 'hidden';
  
      const timer = setTimeout(() => {
        setIsAnimating(false);
        document.body.style.overflow = '';
      }, 5000);
  
      return () => clearTimeout(timer);
    } else {
      // 他ページから戻ってきたときは表示しない
      setIsAnimating(false);
      document.body.style.overflow = '';
    }
  }, []);

  
  
  
  return (
    <div className='with-nav'>
      {/* 背景スライド */}
      {isAnimating && (
      <div className={`animation-overlay ${isAnimating ? 'active' : 'hidden'}`}>
        <div className="bg-slide" />
        <div className="blur-overlay" />


        <h1>
          {chars.map(({ char, isFirst, i }) => (
            <span
              key={i}
              className={`char ${isFirst ? 'last' : ''} `}
              style={{ '--i': isFirst ? chars.length : i }} // 最初の文字だけ delay を一番後ろに
            >
              {char}
            </span>
          ))}
        </h1>
      </div>
      )}

      <div className='homeA'>
        <div className='homeA-sep1'>
          <h3 className='pale-color'>What is this site?</h3>
          <h1 className='base-color'>This is <font className="red">A</font>saka's portfolio!</h1>
        </div>
        <div className='homeA-sep2'>
          <img src={leaf} alt='leaf' className='leaf' />
        </div>
      </div>
      <div className='homeB'>
        <div className='homeB-container'>
          <div className='homeB-container-title borderB'>
            <h1>About</h1>
          </div>
          <div className='homeB-container-content'>
            <div className='homeB-container-sep1'>
              <img src={asaka2} alt='asaka2' className='asaka'/>
              <h2>浅香ひなた</h2>
            </div>
            <div className='homeB-container-sep2'>
              <h2><font className="red">趣</font>味</h2>
                <h3>三味線・和太鼓・ゲーム・コードこねこね・ラーメン・睡眠</h3>
              <h2><font className="red">好</font>きなゲーム</h2>
                <h3>キングダム ハーツII ファイナル ミックス+</h3>
                <h3>Shadow Coriddor</h3>
              <h2><font className="red">好</font>きなアーティスト</h2>
                <h3>平沢進</h3>
                <h3>SOUL'd OUT</h3>
                <h3>BABY METAL</h3>
                <h3>サカナクション</h3>
              <h2><font className="red">好</font>きな場所</h2>
                <h3>東京都 東大和市</h3>
              <h2><font className="red">ち</font>ょっとやってたこと</h2>
                <h3>3Dモデリング <font className="pale-color">blender</font></h3>
                <h3>VR</h3>
            </div>
            <h3 className='scroll-it pale-color'>Scroll it! →</h3>
          </div>
        </div>
      </div>

        
        <div className='homeC'>
          <div className='jam-drip-box border'>
            <div className='jam-drip-text whats-new'>
              <h1>What's New !!</h1>
              <WhatsNew />
            </div>
          </div>
        </div>
        
        <div className='yet'>
          <div className='homeC center'>
          <h1
            style={{
              position: 'absolute',
              zIndex: '10',
              color: 'white',
              textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
              top:'10px'            
            }}
          >AI画像たち</h1>
            <RippleImageSwitch />
          </div>
        
        <div className='homeE center'>
          <div>
          <h1>多分、風</h1>
          </div>
        </div>
        </div>
        <div className='homeD center'>
        <div className="linkContainer"  style={{borderRadius: '1rem',marginBottom:'20px'}}>
        {images.map((image, index) => (
            <div
              key={index}
              className={`imageWrapper ${index === currentIndex ? 'active' : ''}`}
            >
            <a href={image.link}>
              <h1 className='siteText center' style={{position:"absolute",zIndex:3,color:"#000",top:"-50%",textShadow:"1px 1px 5px white"}}>皆様のサイト</h1>
              <img className="linkImage" src={image.src} alt={image.text} />
              <div className="hoverOverlay" >
                <div className="overlayText">
                <h1>{image.text}</h1>
                <p>{image.link.replace("https://","")}</p>
                </div>
              </div></a>
            <button className="navButton prevButton" onClick={goToPrevImage}>
            <SlArrowLeft />
            </button>
            <button className="navButton nextButton" onClick={goToNextImage}>
            <SlArrowRight />
            </button>
            </div>
          ))}
        </div>
        </div>
        
        <div className='homeParty'>
          <div className='homePartybar'>
              <a className='bottun border' href='/DVD'>
                <GiCompactDisc />
              </a>
              <a className='bottun border' href='/shinratsu'>
                <PiMountainsFill />
              </a>
              <a className='bottun border' href='/party'>
                  <LuPartyPopper />
              </a>
          </div>
        </div>
    </div>

  );
};

export default TopPage;
