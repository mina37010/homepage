import React, { useState } from 'react';
import shinratsuPic from '../assets/images/shinratsu.webp';
import maroyakaPic from '../assets/images/maroyaka.webp';
import sanmiPic from '../assets/images/sanmi.webp';
import nigamiPic from '../assets/images/nigami.webp';
import { MdDoorBack } from "react-icons/md";

const Shinratsu = () => {
  const [clickedImage, setClickedImage] = useState('');
  const [isFullView, setIsFullView] = useState(false); // トグル用
  const [is210on, setIs210on] = useState(false);

  const handle210onClick = () => {
    setIs210on(!is210on);  // ボタンが押されたら210onをTrueにする
  };

  // クリック時に画像とブラーの切り替えを行う
  const handleImageClick = (image) => {
    setIsFullView(!isFullView); // 表示状態をトグル
    setClickedImage(image); // クリックされた画像を記録
  };

  return (
    <div style={{backgroundColor: '#000'}}>
        <a href='/' className='a-non'><button
        style={{
          position: 'absolute',
          top: '10px',
          left: '10px',
          padding: '10px 15px',
          backgroundColor: 'rgba(0, 0, 0, 0.3)', // 半透明な白
          border: 'none',
          borderRadius: '5px',
          color: '#555',
          cursor: 'pointer',
          fontSize: '20px',
          transition: 'opacity 0.3s ease',
          zIndex:20
        }}
        onMouseEnter={(e) => (e.target.style.opacity = '0.8')}
        onMouseLeave={(e) => (e.target.style.opacity = '1')}
      >
        <MdDoorBack />
      </button></a>
      <button 
            onClick={() => {
                handle210onClick();
                setIsFullView(false);
              }}
              
            className={`toggle-button ${is210on ? 'isclicked' : ''}`}
            onMouseEnter={(e) => (e.target.style.opacity = '0.8')}
            onMouseLeave={(e) => (e.target.style.opacity = '1')}
        >
        210on
      </button>
      {/* メイン画像 */}
      <div className={`${is210on ? 'NoImage' : 'OnImage'}`}>
        <div className={`shinText ${clickedImage === 'shinratsu' && isFullView ? 'visibleText' : ''}`}>
            <h1 className='h1Text'>辛辣波乱</h1>
        </div>
        <div className={`maroText ${clickedImage === 'maroyaka' && isFullView ? 'visibleText' : ''}`}>
            <h1 className='h1Text'>まろやか平和</h1>
        </div>
        <div className='shinratsuPage'>
            <img 
                className={`shinratsu ${clickedImage === 'shinratsu' && isFullView ? 'animate' : ''}`} 
                src={shinratsuPic} 
                alt="shinratsu" 
                onClick={() => handleImageClick('shinratsu')}
            />
            <img 
                className={`maroyaka ${clickedImage === 'maroyaka' && isFullView ? 'animate' : ''}`} 
                src={maroyakaPic} 
                alt="maroyaka" 
                onClick={() => handleImageClick('maroyaka')}
            />
            {/* 状態に応じたブラー画像 */}
            <img className={`blurredShinratsuHalf ${clickedImage === 'shinratsu' && isFullView ? 'blurredFull' :clickedImage === 'shinratsu' ? 'fullFront' : 'fullBack'}`} src={shinratsuPic} alt="blurred half shinratsu" />
            <img className={`blurredMaroyakaHalf ${clickedImage === 'maroyaka' && isFullView ? 'blurredFull' : clickedImage === 'maroyaka'  ? 'fullFront': 'fullBack'}`} src={maroyakaPic} alt="blurred half maroyaka" />
        </div>
      </div>
      <div className={`absolute ${is210on ? 'OnImage' : 'NoImage'}`}>
        <div className={`shinText ${clickedImage === 'nigami' && isFullView ? 'visibleText' : ''}`}>
            <h1 className='h1Text'>シャープな苦味</h1>
        </div>
        <div className={`maroText ${clickedImage === 'sanmi' && isFullView ? 'visibleText' : ''}`}>
            <h1 className='h1Text'>まろやか酸味</h1>
        </div>
        <div className='shinratsuPage'>
            <img 
                className={`shinratsu ${clickedImage === 'nigami' && isFullView ? 'animate' : ''}`} 
                src={nigamiPic} 
                alt="nigami" 
                onClick={() => handleImageClick('nigami')}
            />
            <img 
                className={`maroyaka ${clickedImage === 'sanmi' && isFullView ? 'animate' : ''}`} 
                src={sanmiPic} 
                alt="sanmi" 
                onClick={() => handleImageClick('sanmi')}
            />
            {/* 状態に応じたブラー画像 */}
            <img className={`blurredShinratsuHalf ${clickedImage === 'nigami' && isFullView ? 'blurredFull' :clickedImage === 'nigami' ? 'fullFront' : 'fullBack'}`} src={nigamiPic} alt="blurred half nigami" />
            <img className={`blurredMaroyakaHalf ${clickedImage === 'sanmi' && isFullView ? 'blurredFull' : clickedImage === 'sanmi'  ? 'fullFront': 'fullBack'}`} src={sanmiPic} alt="blurred half sanimi" />
        </div>
      </div>

      <style>{`

        .absolute{
            position: absolute;
            top: 0;
            left:0;
        }

        .shinratsuPage {
          display: flex;
          width: 100vw;
          height: 100vh;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          position: relative;
          background-color: #000;
        }

        .shinratsu, .maroyaka {
          position: absolute;
          object-fit: cover;
          transition: clip-path 1s ease, transform 0.3s ease;
          cursor: pointer;
        }

        .shinratsu {
          z-index: ${(clickedImage === 'shinratsu' || clickedImage === 'nigami') ? 3 : 2};
          clip-path: inset(0 50% 0 0);
        }

        .maroyaka {
          z-index: ${(clickedImage === 'maroyaka' || clickedImage === 'sanmi') ? 3 : 2};
          clip-path: inset(0 0 0 50%);
        }

        /* アニメーションで全体表示 */
        .shinratsu.animate {
          clip-path: inset(0 0 0 0);
        }

        .maroyaka.animate {
          clip-path: inset(0 0 0 0);
        }

        .shinratsu:hover, .maroyaka:hover {
          transform: scale(1.01);
        }

        /* 両方が半分表示のときのブラー画像（左右） */
        .blurredShinratsuHalf, .blurredMaroyakaHalf {
          position: absolute;
          object-fit: cover;
          width: 100vw;
          height: 100vh;
          filter: blur(15px);
          z-index: 1;
          transition: clip-path 1s ease;
        }

        .blurredShinratsuHalf {
          left: 0;
          clip-path: inset(0 50% 0 0);
        }

        .blurredMaroyakaHalf {
          right: 0;
          clip-path: inset(0 0 0 50% );
        }

        /* クリックされた画像に応じた全体のブラー画像 */
        .blurredFull{
          clip-path: inset(0 0 0 0 );
        }

        .fullBack{
            z-index:0;
        }
        .fullFront{
            z-index:1;
        }

        .h1Text{
            font-size:7vw;
            text-shadow: 1px 1px 2px black;
        }
        .shinText{
            position: absolute;
            z-index:10;
            color :#ffffff;
            opacity:0;
            transition: opacity 1s ease;
            transition-delay: 1s;
            transition-property: opacity;
        }

        .maroText{
            position: absolute;
            z-index:10;
            color :#ffffff;
            opacity:0;
            transition: opacity 1s ease;
            transition-delay: 1s;
            transition-property: opacity;
        }

        .visibleText{
            transition-delay: 1s;
            transition-property: opacity;
            opacity:1;
        }

          .toggle-button {
            padding: 10px 15px;
            font-size: 20px;
            background-color: rgba(0, 0, 0, 0.3);
            color: #555;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: opacity 0.3s ease;
            position: absolute;
            bottom: 10px;
            right: 10px;
            z-index: 20;
            opacity : 1;
          }

          .isclicked{
            color: white;
          }

          .NoImage{
            opacity:0;
            transition: opacity 1s ease;
            
          }

          .OnImage{
            opacity:1;
            transition: opacity 1s ease;
          }


        @media (min-aspect-ratio: 1/1) {
          .shinratsu, .maroyaka {
            width: 100vh;
            height: 100vh;
          }

          .blurredShinratsuHalf, .blurredMaroyakaHalf {
            height: 100vh;
          }

          .shinText{
            left:-5vw;
            top:10vh;
            writing-mode: vertical-rl;
            justify-content: left;
          }

            .maroText{
                right:-5vw;
                top:10vh;
                writing-mode: vertical-rl;
                justify-content: left;
            }
        }

        @media (max-aspect-ratio: 1/1) {
          .shinratsu, .maroyaka {
            width: 100vw;
            height: 100vw;
          }

          .blurredShinratsuHalf, .blurredMaroyakaHalf {
            height: 100vh;
          }

          .h1Text{
            font-size:5vh;
            white-space: nowrap;
            text-shadow: 1px 1px 2px black;
        }

          .shinText{
            horizontal-tb;
            top:30vw;
            left:50vw;
            transform: translate(-50%,0);
        }

        .maroText{
            horizontal-tb;
            top:30vw;
            left:50vw;
            transform: translate(-50%,0);
        }

        }
      `}</style>
    </div>
  );
};

export default Shinratsu;
