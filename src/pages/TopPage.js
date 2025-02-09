import React from 'react';
import { LuPartyPopper } from "react-icons/lu";
import { PiMountainsFill } from "react-icons/pi";
import { useState, useEffect } from 'react';
const TopPage = () => {
    const images = [
      {src:'https://pbs.twimg.com/profile_images/1601292387250499584/09YdhLVp_400x400.jpg',text:'いなにわうどん',link:"https://いなにわうどん.みんな"},
      {src:'https://pbs.twimg.com/profile_images/1722595990803447808/KzZAqAZR_400x400.png',text:'ちゅるり',link:"https://itsu.dev"},
      {src:'https://pbs.twimg.com/profile_images/1876704743046967296/WRa_prYp_400x400.png',text:'ぱうろ',link:"https://210o.net"},
    ];
  
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 6000); // 6秒ごとに切り替え
  
      return () => clearInterval(interval); // クリーンアップ
    }, [images.length]);
  
  return (
    <div>
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
        <div className='homeD center'>
        <div className="linkContainer">
        {images.map((image, index) => (
            <div
              key={index}
              className={`imageWrapper ${index === currentIndex ? 'active' : ''}`}
            >
              <img className="linkImage"  src={image.src} alt={`Image ${index + 1}`} />
              <a href={image.link}><div className="hoverOverlay" >
                <div className="overlayText">
                <h1>{image.text}</h1>
                <p>{image.link.replace("https://","")}</p>
                </div>
              </div></a>
            </div>
          ))}
        </div>
        </div>

        <div className='homeE center'>
          <div>
            <h1>多分、風</h1>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/8lx0vLTH_yg?si=-OcWECpUX2OmoAEx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
    </div>
  );
};

export default TopPage;
