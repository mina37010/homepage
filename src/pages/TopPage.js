import React from 'react';
import { LuPartyPopper } from "react-icons/lu";
import { PiMountainsFill } from "react-icons/pi";
import { GiCompactDisc } from "react-icons/gi";
import { useState, useEffect, useCallback  } from 'react';
import { SlArrowLeft,SlArrowRight } from "react-icons/sl";

import WhatsNew from '../components/WhatsNew'; 
import RippleImageSwitch from '../components/RippleImageSwitch';

import kiroro1 from '../assets/images/kiroro1.png';
import kiroro2 from '../assets/images/kiroro2.png';

const TopPage = () => {
    const images = [
      {src:'https://pbs.twimg.com/profile_images/1601292387250499584/09YdhLVp_400x400.jpg',text:'いなにわうどん',link:"https://いなにわうどん.みんな"},
      {src:'https://pbs.twimg.com/profile_images/1722595990803447808/KzZAqAZR_400x400.png',text:'ちゅるり',link:"https://itsu.dev"},
      {src:'https://pbs.twimg.com/profile_images/1876704743046967296/WRa_prYp_400x400.png',text:'ぱうろ',link:"https://210o.net"},
      {src:'https://pbs.twimg.com/profile_images/1670775795898544128/GT-UPbqy_400x400.jpg',text:'定積',link:"https://maroyaka.party"},
    ];
  
    const [currentIndex, setCurrentIndex] = useState(0);

  // 依存関係を安定化するために useCallback でラップする
  const goToNextImage = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const goToPrevImage = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    const interval = setInterval(goToNextImage, 5000);
    return () => clearInterval(interval); // クリーンアップ
  }, [goToNextImage]);

  
  const [hovered, setHovered] = useState(false);
  
  return (
    <div>
      <div className='yet relative'>
        <h1>スマホ版ページは調整中！</h1>
      </div>
      <div className='home'>
        <div className='homeA center'>
          <h1>多分テキスト</h1>
          <div>
            <img
              src={hovered ? kiroro2 : kiroro1}
              alt="kiroro"
              style={{ position: 'absolute', width: '10%' }}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            />
          </div>
    </div>
        <div className='homeB '>
          <h1 style={{position: 'relative',borderBottom: '3px solid #AEAEAE',paddingLeft: '20px'}}>What's New !!</h1>
          <WhatsNew />
        </div>
        <div className='homeC '>
        <h1
          style={{
            position: 'absolute',
            zIndex: '10',
            color: 'white',
            textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
            paddingLeft: '20px'}}
        >AI画像たち</h1>
          <RippleImageSwitch />
        </div>
        <div className='homeE center'>
          <div>
          <h1>多分、風</h1>
          </div>
        </div>
        <div className='homeD center'>
        <div className="linkContainer">
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
              <a className='a-non a-hover' href='/DVD'>
                <div className='zBarBox'>
                <GiCompactDisc />
                </div>
              </a>
              <a className='a-non a-hover' href='/shinratsu'>
                <div className='zBarBox'>
                <PiMountainsFill />
                </div>
              </a>
              <a className='a-non a-hover' href='/party'>
                <div className='zBarBox'>
                  <LuPartyPopper />
                </div>
              </a>
          </div>
        </div>
      </div> 
      <style>{`
      
      .yet {
        display : none;
      }

      .siteText{
        transition: opacity 0.3s ease-in-out;
      }
      .imageWrapper:hover .siteText{
        opacity:0;
      }

      @media (max-width: 768px) {


      }
      `}</style>
    </div>
  );
};

export default TopPage;
