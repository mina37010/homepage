import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';

// Contextの作成
const PartyContext = createContext();

export const PartyProvider = ({ children }) => {
  const [partyItems, setPartyItems] = useState([]);
  const location = useLocation();  // 現在のページのパスを取得

  // 特定のページでイベントを有効にするリストをメモ化
  const eventEnabledPaths = useMemo(() => ['/', '/party'], []);  // メモ化

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

    setTimeout(() => {
      setPartyItems((prev) => prev.filter((item) => item.id !== id));
    }, 3000);
  };

  useEffect(() => {
    const handleClick = (e) => {
      if (!e.defaultPrevented && eventEnabledPaths.includes(location.pathname)) {
        addParty();
      }
    };
  
    document.body.addEventListener('click', handleClick);
    return () => {
      document.body.removeEventListener('click', handleClick);
    };
  }, [location.pathname, eventEnabledPaths]);  // 安全に依存配列に追加

  return (
    <PartyContext.Provider value={{ partyItems }}>
      {children}
    </PartyContext.Provider>
  );
};

export const useParty = () => useContext(PartyContext);
