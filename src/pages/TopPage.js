import React from 'react';
import { LuPartyPopper } from "react-icons/lu";
import { PiMountainsFill } from "react-icons/pi";
import { GiCompactDisc } from "react-icons/gi";
import { useState, useEffect, useCallback  } from 'react';
import { SlArrowLeft,SlArrowRight } from "react-icons/sl";

import WhatsNew from '../components/WhatsNew'; 
import RippleImageSwitch from '../components/RippleImageSwitch';

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

      <div className='yet'>
      <div className='home'>
        <div className='homeA center'>

          <h1>多分テキスト</h1>
        </div>
        <div className='homeB  honey-drip-box border'>
          <div className='honey-drip-text'>
            <h1 >What's New !!</h1>
            <WhatsNew />
          </div>
        </div>
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
            {/* ナビゲーションボタン */}
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
      </div>

      <style>{`
      .yet{
        display:block
      }
      .siteText{
        transition: opacity 0.3s ease-in-out;
      }
      .imageWrapper:hover .siteText{
        opacity:0;
      }

      `}</style>
    </div>

  );
};

export default TopPage;
