import React from 'react';
import { LuPartyPopper } from "react-icons/lu";
import { PiMountainsFill } from "react-icons/pi";
import { useState, useEffect, useCallback  } from 'react';
import { SlArrowLeft,SlArrowRight } from "react-icons/sl";
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
  
  return (
    <div>
      <div className='yet relative'>
        <h1>スマホ版ページは調整中！</h1>
      </div>
      <div className='home'>
        <div className='homeA center'>
          <h1>多分テキスト</h1>
        </div>
        <div className='homeB center'>
          <h1>多分Blog</h1>
        </div>
        <div className='homeC center'>
          <h1>多分画像</h1>
        </div>
        <div className='homeE center'>
          <div>
            <h1>多分、風。</h1>
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
