import React from 'react';
import { motion } from 'framer-motion';
import { useParty } from './PartyContext';

function Layout({ children }) {
  const { partyItems } = useParty();

  return (
    <div style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh' }}>
      {children}

      {/* 流れる "party!" */}
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
    </div>
  );
}

export default Layout;
