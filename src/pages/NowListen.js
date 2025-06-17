import React, { useEffect, useState } from 'react';
import '../styles/NowListen.css'; // ← CSSを読み込む

export default function NowListen() {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    fetch('/nowlisten')
      .then((res) => res.json())
      .then((data) => setTracks(data))
      .catch((err) => console.error('Fetch failed:', err));
  }, []);

  return (
    <div className="nowlisten-container">
      <h1>🎧 Recently Played</h1>
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
