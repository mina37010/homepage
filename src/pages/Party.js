import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useParty } from '../PartyContext';  // グローバルな状態をインポート

const Party = () => {
  const [partyItems, setPartyItems] = useState([]);
  const { partyItems: globalPartyItems } = useParty(); // グローバルな "party!" の状態を取得
  const [isCooldown, setIsCooldown] = useState(false);

  // "party!" を大量に追加する関数（弾幕用）
  const startPartyBarrage = () => {
    if (isCooldown) return;  // クールダウン中は何もしない

    setIsCooldown(true);  // クールダウンを開始

    for (let i = 0; i < 100; i++) {
      const randomX = Math.random() * 100;  // ランダムな横位置 (0% - 100%)
      const randomY = Math.random() * 100;  // ランダムな縦位置 (0% - 100%)
      const randomFontSize = Math.random() * 3 + 1;  // ランダムなフォントサイズ (1vw - 4vw)
      const randomColor = `hsl(${Math.random() * 360}, 100%, 70%)`;  // ランダムな色

      const newPartyItem = {
        id: Math.random().toString(36).substring(2, 9),
        x: `${randomX}%`,
        y: `${randomY}%`,
        fontSize: `${randomFontSize}vw`,
        color: randomColor,
      };

      setPartyItems((prev) => [...prev, newPartyItem]);  
    }

    // クールダウンを3秒に設定
    setTimeout(() => {
      setIsCooldown(false);
    }, 3000);

    // 弾幕を5秒後にすべて削除
    setTimeout(() => {
      setPartyItems([]);
    }, 3000);
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
            e.stopPropagation();
            startPartyBarrage();  // 弾幕を開始
          }}
          disabled={isCooldown}  // クールダウン中はボタンを無効化
          className={`absolute ${
            isCooldown ? 'bg-gray-400' : 'bg-pink-500 hover:bg-pink-700'
          } text-white font-bold py-4 px-8 rounded-full shadow-lg transition`}
        >
          Partyに参加！
        </button>
      </motion.h1>

      {/* カラフルな "party!" アニメーション */}
      {partyItems.map((item) => (
        <motion.div
            key={item.id}
            className="absolute font-bold"
            initial={{ opacity: 0, scale: 0.8 }}  // 初期状態：少し小さく、透明
            animate={{
            opacity: [1, 1, 0.5, 0],  // 徐々に現れ、一定時間維持してからフェードアウト
            scale: [1, 1.3, 1, 0],  // スケールも維持後に縮小
            }}
            transition={{
            duration: 4,  // 全体のアニメーション時間
            times: [0, 0.2, 0.8, 1],  // アニメーションの進行タイミング
            ease: 'easeInOut',
            }}
            style={{
            top: item.y,
            left: item.x,
            fontSize: item.fontSize,
            color: item.color,  // カラフルな色を適用
            zIndex: 50,
            whiteSpace: 'nowrap',
            position: 'absolute',
            }}
        >
            party!
        </motion.div>
        ))}

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

        button:hover {
          color: #fff;
        }
      `}</style>
    </div>
  );
};

export default Party;
