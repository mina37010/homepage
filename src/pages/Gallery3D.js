import React, { useEffect, useState, useRef } from 'react';
import '../styles/gallery.css';

const R2_BASE_URL = 'https://3d.asaka.party';

const Gallery3D = () => {
  const [mediaList, setMediaList] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const galleryRef = useRef(null);

  useEffect(() => {
    fetch('/data/3d.json')
      .then(res => res.json())
      .then(setMediaList)
      .catch(err => console.error('JSON読み込みエラー:', err));
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const images = document.querySelectorAll('.gallery-image');
    images.forEach(img => observer.observe(img));

    return () => observer.disconnect();
  }, [mediaList]);

  const isVideo = (filename) => filename.toLowerCase().endsWith('.mp4');

  return (
    <div className='gallery-container with-nav'>
      <div className='gallery-text'>
        <h1><span className='red'>A</span>saka's 3D Gallery!!</h1>
      </div>
      <div className='gallery-text'>
        <h3>大学から始めた初心者です、ちまちま作ってたりします！</h3>
      </div>
      <div className='gallery-text pale-color'>
        <h4>Blender Unity VRChat</h4>
      </div>

      <div className="gallery" ref={galleryRef}>
        {mediaList.map((item, index) => {
          const mediaUrl = `${R2_BASE_URL}/${item.filename}`;
          return isVideo(item.filename) ? (
            <video
              key={index}
              src={mediaUrl}
              className="gallery-image"
              onClick={() => setSelectedItem(item)}
              muted
              loop
              playsInline
            />
          ) : (
            <img
              key={index}
              src={mediaUrl}
              alt={item.title || `img-${index}`}
              className="gallery-image"
              onClick={() => setSelectedItem(item)}
            />
          );
        })}
      </div>

      {selectedItem && (
        <div className="modal" onClick={() => setSelectedItem(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {isVideo(selectedItem.filename) ? (
              <video
                src={`${R2_BASE_URL}/${selectedItem.filename}`}
                className="modal-image"
                controls
                autoPlay
              />
            ) : (
              <img
                src={`${R2_BASE_URL}/${selectedItem.filename}`}
                alt={selectedItem.title}
                className="modal-image"
              />
            )}
            <h2>{selectedItem.title}</h2>
            <p>{selectedItem.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery3D;
