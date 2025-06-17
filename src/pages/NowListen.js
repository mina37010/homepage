import React, { useEffect, useRef, useState } from 'react';
import '../styles/NowListen.css'; // ← CSSを読み込む

export default function NowListen() {
    const [tracks, setTracks] = useState([]);
    const containerRef = useRef(null);
  
    useEffect(() => {
      fetch('/nowlisten')
        .then((res) => res.json())
        .then((data) => {
          setTracks([...data, ...data]); // ループ表示用に2回繰り返す
          setTimeout(() => {
            if (containerRef.current) {
              // 真ん中から始める
              const middle = containerRef.current.scrollWidth / 2;
              containerRef.current.scrollLeft = middle;
            }
          }, 100);
        });
    }, []);
  
    // スクロールイベント監視
    useEffect(() => {
      const el = containerRef.current;
      if (!el) return;
  
      const onScroll = () => {
        const scrollLeft = el.scrollLeft;
        const totalWidth = el.scrollWidth;
        const visibleWidth = el.clientWidth;
  
        // 前後端に来たら真ん中にジャンプ
        if (scrollLeft < 1) {
          el.scrollLeft = totalWidth / 2;
        } else if (scrollLeft + visibleWidth >= totalWidth - 1) {
          el.scrollLeft = totalWidth / 2 - visibleWidth;
        }
      };
  
      el.addEventListener('scroll', onScroll);
      return () => el.removeEventListener('scroll', onScroll);
    }, []);

  return (
    <div className="nowlisten-container">
      <h1>🎧 <font className="red">A</font>saka's Recently Played</h1>
      <div className="track-scroll-container">
        {tracks.map((track, i) => (
          <div className="track-card" key={i}>
            <img src={track.image} alt={track.title} />
            <a href={track.url} target="_blank" rel="noopener noreferrer">
              {track.title}
            </a>
            <p>{track.artist}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
