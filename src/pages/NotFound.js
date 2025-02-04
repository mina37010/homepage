import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function NotFound() {
  const [partyItems, setPartyItems] = useState([]);

  // "party!" を追加する関数
  const addParty = () => {
    const randomY = Math.floor(Math.random() * 80);
    const randomFontSize = Math.random() * 5 + 2;
    const reverseDirection = Math.random() < 0.05;
    const id = Math.random().toString(36).substring(2, 9);

    const newPartyItem = {
      id,
      y: `${randomY}%`,
      fontSize: `${randomFontSize}vw`,
      zIndex: 0,
      reverseDirection,
    };

    setPartyItems((prev) => [...prev, newPartyItem]);

    // 3秒後に削除
    setTimeout(() => {
      setPartyItems((prev) => prev.filter((item) => item.id !== id));
    }, 3000);
  };

  // ページ全体のクリックイベントで "party!" を追加
  useEffect(() => {
    const handleClick = () => addParty();
    document.body.addEventListener('click', handleClick);

    return () => {
      document.body.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div>
    <div className="not-found-container center">
      <h1 style={{ fontSize: '4rem', color: 'gray',zIndex: 1 }}>404 - Page Not Found</h1>
    </div>
      {/* 流れる "party!" アニメーション */}
      {partyItems.map((item) => {
        const fontSizeInVw = parseFloat(item.fontSize);
        const textWidthOffset = fontSizeInVw * 3;

        return (
            <motion.div
            key={item.id}
            className="absolute text-yellow-400 font-bold"
            initial={{
              x: item.reverseDirection ? '-100%' : `${100 - textWidthOffset}vw`,
              opacity: 1,
            }}
            animate={{
              x: item.reverseDirection ? `${100 - textWidthOffset}vw` : '-100%',
              opacity: 1,
            }}
            transition={{ duration: 3, ease: 'linear' }}
            style={{
              top: item.y,
              fontSize: item.fontSize,
              zIndex: item.zIndex,
              whiteSpace: 'nowrap',
              position: 'absolute',
            }}
          >
            party!
          </motion.div>
        );
      })}

    <style>{`
    nav {
      display: none;
    }
    `}</style>
    </div>
 
  );
}

export default NotFound;
