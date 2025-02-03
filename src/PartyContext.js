import React, { createContext, useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Contextの作成
const PartyContext = createContext();

export const PartyProvider = ({ children }) => {
  const [partyItems, setPartyItems] = useState([]);
  const location = useLocation();  // 現在のページのパスを取得

  // 特定のページでイベントを有効にするリスト
  const eventEnabledPaths = ['/'];  // 必要なパスを追加

  const addParty = () => {
    const randomY = Math.floor(Math.random() * 80);
    const randomFontSize = Math.random() * 5 + 2;
    const randomZIndex = -Math.floor(Math.random() * -10) - 5;
    const reverseDirection = Math.random() < 0.05;
    const id = Math.random().toString(36).substring(2, 9);

    const newPartyItem = {
      id,
      y: `${randomY}%`,
      fontSize: `${randomFontSize}vw`,
      zIndex: randomZIndex,
      reverseDirection,
    };

    setPartyItems((prev) => [...prev, newPartyItem]);

    setTimeout(() => {
      setPartyItems((prev) => prev.filter((item) => item.id !== id));
    }, 3000);
  };

  useEffect(() => {
    const handleClick = (e) => {
      // 特定のページ、または未登録のページの場合にのみ有効化
      if (
        !e.defaultPrevented &&
        (eventEnabledPaths.includes(location.pathname))
      ) {
        addParty();
      }
    };

    document.body.addEventListener('click', handleClick);

    return () => {
      document.body.removeEventListener('click', handleClick);
    };
  }, [location.pathname]);

  return (
    <PartyContext.Provider value={{ partyItems }}>
      {children}
    </PartyContext.Provider>
  );
};

export const useParty = () => useContext(PartyContext);
