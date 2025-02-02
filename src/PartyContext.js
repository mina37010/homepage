import React, { createContext, useState, useContext, useEffect } from 'react';

// Contextの作成
const PartyContext = createContext();

// Providerコンポーネント
export const PartyProvider = ({ children }) => {
  const [partyItems, setPartyItems] = useState([]);

  // "party!" を追加する関数
  const addParty = () => {
    const randomY = Math.floor(Math.random() * 80); // ランダムな高さ
    const randomFontSize = Math.random() * 5 + 2;
    const randomZIndex = Math.floor(Math.random() * 10) + 5;
    const reverseDirection = Math.random() < 0.5;
    const id = Math.random().toString(36).substring(2, 9);

    const newPartyItem = {
      id,
      y: `${randomY}%`,
      fontSize: `${randomFontSize}vw`,
      zIndex: randomZIndex,
      reverseDirection,
    };

    setPartyItems((prev) => [...prev, newPartyItem]);

    // 3秒後に削除
    setTimeout(() => {
      setPartyItems((prev) => prev.filter((item) => item.id !== id));
    }, 3000);
  };

  // クリックイベントをページ全体で監視
  useEffect(() => {
    const handleClick = () => addParty();

    document.body.addEventListener('click', handleClick);

    return () => {
      document.body.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <PartyContext.Provider value={{ partyItems }}>
      {children}
    </PartyContext.Provider>
  );
};

// Contextを利用するためのカスタムフック
export const useParty = () => useContext(PartyContext);
