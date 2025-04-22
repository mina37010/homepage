import React, { useState, useRef } from 'react';
import '../styles/RippleImageSwitch.css';

import shinratsuPic from '../assets/images/shinratsu.webp';
import maroyakaPic from '../assets/images/maroyaka.webp';
import sanmiPic from '../assets/images/sanmi.webp';
import nigamiPic from '../assets/images/nigami.webp';

const images = [shinratsuPic, maroyakaPic, sanmiPic, nigamiPic];

const RippleImageSwitch = () => {
  const [index, setIndex] = useState(0);
  const [rippleStyle, setRippleStyle] = useState({});
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef(null);

  const clickDisabledRef = useRef(false); // ← クリック制御用のref

  const handleClick = (e) => {
    if (clickDisabledRef.current) return; // ← クリック無効ならスキップ

    clickDisabledRef.current = true; // ← クリック無効化
    setTimeout(() => {
      clickDisabledRef.current = false; // ← 0.5秒後に有効化
    }, 1000);

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setRippleStyle({
      '--x': `${x}px`,
      '--y': `${y}px`,
    });

    setIsAnimating(true);

    setTimeout(() => {
      setIndex((prev) => (prev + 1) % images.length);
      setIsAnimating(false);
    }, 1000); // アニメーション完了後
  };

  const nextIndex = (index + 1) % images.length;

  return (
    <div className="ripple-image-container" ref={containerRef} onClick={handleClick}>
      <img src={images[index]} alt="current" className="base-image" />
      {isAnimating && (
        <img
          src={images[nextIndex]}
          alt="next"
          className="ripple-transition"
          style={rippleStyle}
        />
      )}
    </div>
  );
};

export default RippleImageSwitch;
