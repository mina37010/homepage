import React, { useEffect, useRef, useState } from 'react';
import '../styles/NowListen.css';

export default function NowListen() {
  const [tracks, setTracks] = useState([]);
  const containerRef = useRef(null);

  const fallbackTracks = [
    {
      title: 'Loading...',
      artist: 'Unknown Artist',
      image: '/placeholder.jpg',
      url: '#'
    },
    {
      title: 'Loading...',
      artist: 'Unknown Artist',
      image: '/placeholder.jpg',
      url: '#'
    }
  ];

  useEffect(() => {
    fetch('/nowlisten')
      .then((res) => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then((data) => {
        const tripled = [...data];
        setTracks(tripled);
      })
      .catch((err) => {
        console.error('Fetch error:', err);
        const tripled = [...fallbackTracks];
        setTracks(tripled);
      });
  }, []);

  return (
    <div className="nowlisten-container">
      <h1>🎧 <font className="red">A</font>saka's Recently Played</h1>
      <div className="track-scroll-container" ref={containerRef}>
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
