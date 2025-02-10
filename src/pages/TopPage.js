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
        <div className='homeD center'>
        <div className="linkContainer">
        {images.map((image, index) => (
            <div
              key={index}
              className={`imageWrapper ${index === currentIndex ? 'active' : ''}`}
            >
              <img className="linkImage" src={image.src} alt={image.text} />
              <a href={image.link}><div className="hoverOverlay" >
                <div className="overlayText">
                <h1>{image.text}</h1>
                <p>{image.link.replace("https://","")}</p>
                </div>
              </div></a>
            </div>
          ))}
          {/* ナビゲーションボタン */}
          <button className="navButton prevButton" onClick={goToPrevImage}>
          <SlArrowLeft />
          </button>
          <button className="navButton nextButton" onClick={goToNextImage}>
          <SlArrowRight />
          </button>
        </div>
        </div>

        <div className='homeE center'>
          <div>
            <h1>多分、風。</h1>
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
      <style>{`
      .yet {
        display : none;
      }

      @media (max-width: 768px) {
        .yet{
          display: flex;
        }

        .home{
          display:none;
        }
      }
      `}</style>
    </div>
  );
};

export default TopPage;
