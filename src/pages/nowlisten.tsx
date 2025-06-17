import React from 'react'; 
import { useEffect, useState } from 'react';

type Track = {
  title: string;
  artist: string;
  image: string;
  url: string;
};

export default function NowListen() {
  const [tracks, setTracks] = useState<Track[]>([]);

  useEffect(() => {
    fetch('/nowlisten') // Cloudflare Function にリクエスト
      .then((res) => res.json())
      .then((data) => setTracks(data));
  }, []);

  return (
    <main className="p-4">
      <h1 className="text-xl font-bold mb-4">Recently Played</h1>
      <ul className="grid gap-4">
        {tracks.map((track, i) => (
          <li key={i} className="flex items-center space-x-4">
            <img src={track.image} alt={track.title} className="w-16 h-16 rounded" />
            <div>
              <a href={track.url} className="text-lg font-medium hover:underline" target="_blank" rel="noreferrer">
                {track.title}
              </a>
              <p className="text-sm text-gray-500">{track.artist}</p>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
