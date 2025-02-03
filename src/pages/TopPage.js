import React from 'react';
import { motion } from 'framer-motion';
import { useParty } from '../PartyContext';  // グローバルな状態をインポート

const TopPage = () => {
  const { partyItems } = useParty();  // グローバルな "party!" の状態を取得

  return (
    <div className="relative flex items-center justify-center h-screen bg-black overflow-hidden">
      {/* 光の放射状ライン */}
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          className="absolute w-96 h-1 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"
          style={{
            transform: `rotate(${i * 36}deg)`,
            animation: `glowAnimation 3s infinite`,
            pointerEvents: "none",  // クリックをブロックしない
          }}
        ></div>
      ))}

      {/* アニメーションする文字 */}
      <motion.h1
        className="text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-pink-500 neon-glow"
        style={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
        }}
      >
        浅香.party!!!!!!!!
        <button
          onClick={(e) => {
            e.stopPropagation();  // ボタンのクリックが背景に伝播しない
            window.location.href = 'https://github.com/mina37010/homepage';
          }}
          className="absolute bg-pink-500 hover:bg-pink-700 text-white font-bold py-4 px-8 rounded-full shadow-lg transition"
        >
          Partyに参加！
        </button>
        </motion.h1>

      {/* グローバルな "party!" アニメーション */}
      {partyItems.map((item) => {
        const fontSizeInVw = parseFloat(item.fontSize);
        const textWidthOffset = fontSizeInVw * 3;  // テキストの長さの概算

        return (
          <motion.div
            key={item.id}
            className="absolute text-yellow-400 font-bold"
            initial={{
              x: item.reverseDirection ? "-100%" : `${100 - textWidthOffset}vw`,
              opacity: 1,
            }}
            animate={{
              x: item.reverseDirection ? `${100 - textWidthOffset}vw` : "-100%",
              opacity: 1,
            }}
            transition={{ duration: 3, ease: "linear" }}
            style={{
              top: item.y,
              fontSize: item.fontSize,
              zIndex: item.zIndex,
              whiteSpace: "nowrap",
              position: "absolute",
            }}
          >
            party!
          </motion.div>
        );
      })}

      <style>{`
        body, html {
          margin: 0;
          padding: 0;
          overflow: hidden;
          width: 100vw;
          height: 100vh;
        }

        @keyframes glowAnimation {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
        }

        /* カラフルに変化するテキストシャドウ */
        @keyframes neonGlowColorCycle {
          0% {
            text-shadow: 0 0 10px #ff0000, 0 0 20px #ff7300, 0 0 30px #ff9900;
          }
          25% {
            text-shadow: 0 0 10px #ff00ff, 0 0 20px #7300ff, 0 0 30px #9900ff;
          }
          50% {
            text-shadow: 0 0 10px #00ffff, 0 0 20px #00ff73, 0 0 30px #00ff99;
          }
          75% {
            text-shadow: 0 0 10px #ff00ff, 0 0 20px #ff7300, 0 0 30px #ff0000;
          }
          100% {
            text-shadow: 0 0 10px #ff0000, 0 0 20px #ff7300, 0 0 30px #ff9900;
          }
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 6vw;
          }
        }

        .neon-glow {
          animation: neonGlowColorCycle 5s infinite alternate;
        }

        button {
          display: block;
          text-align: center;
          vertical-align: middle;
          text-decoration: none;
          width: 25vw; /* 画面の幅に基づいたボタンの幅 */
          margin: auto;
          padding: 1.5vw 0; /* ボタン上下のパディング */
          font-size: 1.5vw; /* 相対的なフォントサイズ */
          font-weight: bold;
          background-image: linear-gradient(to right, #27acd9 0%, #b4e12b 100%);
          border-radius: 50vw; /* ボタンを丸くするために幅に対する割合で設定 */
          color: #fff;
          border: 0.5vw solid #fff; /* ボタンの境界線を相対的に調整 */
          box-shadow: 0 0.5vw 1vw rgba(0, 0, 0, 0.2);
          -webkit-box-shadow: 0 0.5vw 1vw rgba(0, 0, 0, 0.2);
          transition: 0.5s;
        }

        a {
          color: inherit;
          text-decoration: none;
          border: none;
          padding: 0;
        }

        button:hover {
          color: #fff;
          background-image: linear-gradient(to left, #27acd9 0%, #b4e12b 100%);
        }
      `}</style>
    </div>
  );
};

export default TopPage;
