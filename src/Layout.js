import React from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { useParty } from './PartyContext';
import Navbar from './components/Navbar';  // 必要なら調整

function Layout({ children }) {
  const location = useLocation();
  const { partyItems } = useParty();

  // ナビゲーションを表示しないパスのリスト
  const hideNavbarPaths = ['/party'];

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      {/* ナビゲーションバー */}
      {!hideNavbarPaths.includes(location.pathname) && <Navbar />}

      {/* ページのメインコンテンツ */}
      <div className="View">
        {children}
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
      .View {
        position:relative;
        z-index: 10;
      }
        `}
    </style>
    </div>

  );
}

export default Layout;
