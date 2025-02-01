import React, { useState } from "react";
import { motion } from "framer-motion";

const TopPage = () => {
  const [partyItems, setPartyItems] = useState([]);

  // "party!" を追加する関数
  const addParty = () => {
    const randomY = Math.floor(Math.random() * 80); // 0%〜80%のランダム高さ
    const randomFontSize = Math.floor(Math.random() * 30) + 20; // 20px〜50pxのランダムなフォントサイズ
    const randomZIndex = Math.floor(Math.random() * 10) + 5; // z-index を 5〜15 の間でランダムに設定
    const id = Math.random().toString(36).substring(2, 9); // 一意なIDを生成
    const newPartyItem = {
      id,
      y: `${randomY}%`,
      fontSize: `${randomFontSize}px`,
      zIndex: randomZIndex,
    };
  
    // 生成したデータを表示
    console.log("Generated party item:", newPartyItem);

  // stateに追加
  setPartyItems((prev) => [...prev, newPartyItem]);

  // 5秒後にコメントを削除
  setTimeout(() => {
    setPartyItems((prev) => prev.filter((item) => item.id !== id));
  }, 5000);
};

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
            zIndex: 0,
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
          zIndex: 0,
          textAlign: "center",
        }}
      >
        <a href="https://210o.net/">浅香.party!!!!!!!!</a>
        <button
          onClick={addParty}
          className="absolute bg-pink-500 hover:bg-pink-700 text-white font-bold py-4 px-8 rounded-full shadow-lg transition"
        >
          Party!
        </button>
      </motion.h1>

      {/* 流れる "party" テキスト */}
      {partyItems.map((item) => (
        <motion.div
          key={item.id}
          className="absolute text-yellow-400 font-bold"
          initial={{ x: "100vw", opacity: 1 }}
          animate={{ x: "-10vw", opacity: 1 }}
          transition={{ duration: 5 }}
          style={{
            top: item.y,
            fontSize: item.fontSize,
            zIndex: item.zIndex,
            whiteSpace: "nowrap",
            position:"absolute"
          }}
        >
          party!
        </motion.div>
      ))}

      <style>{`
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

        .neon-glow {
          animation: neonGlowColorCycle 5s infinite alternate;
        }

        a {
          color: inherit;
          text-decoration: none;
          border: none;
          padding: 0;
        }

        button {
          display: block;
          text-align: center;
          vertical-align: middle;
          text-decoration: none;
          width: 120px;
          margin: auto;
          padding: 1rem 0rem;
          font-weight: bold;
          background-image: linear-gradient(to right, #27acd9 0%, #b4e12b 100%);
          border-radius: 100vh;
          color: #fff;
          border: 2px solid #fff;
          box-shadow: 0 2px 5px rgba(0, 0, 0, .2);
          -webkit-box-shadow: 0 2px 5px rgba(0, 0, 0, .2);
          transition: 0.5s;
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
