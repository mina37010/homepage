import React, { useRef, useEffect, useState } from 'react';

const DvdLogo = () => {
  const logoRef = useRef(null);
  const containerRef = useRef(null);

  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [direction, setDirection] = useState({ dx: 2, dy: 2 });

  useEffect(() => {
    const moveLogo = () => {
      const logo = logoRef.current;
      const container = containerRef.current;

      if (!logo || !container) return;

      const logoRect = logo.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();

      let newX = position.x + direction.dx;
      let newY = position.y + direction.dy;
      let newDx = direction.dx;
      let newDy = direction.dy;

      if (newX <= 0 || newX + logoRect.width >= containerRect.width) {
        newDx = -newDx;
      }
      if (newY <= 0 || newY + logoRect.height >= containerRect.height) {
        newDy = -newDy;
      }

      setPosition({ x: newX, y: newY });
      setDirection({ dx: newDx, dy: newDy });

      requestAnimationFrame(moveLogo);
    };

    const animationId = requestAnimationFrame(moveLogo);
    return () => cancelAnimationFrame(animationId);
  }, [position, direction]);

  return (
    <div
      ref={containerRef}
      style={{
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        backgroundColor: 'black',
        position: 'relative',
      }}
    >
      <img
        ref={logoRef}
        src="https://upload.wikimedia.org/wikipedia/en/thumb/0/0b/DVD_logo.svg/2560px-DVD_logo.svg.png"
        alt="DVD Logo"
        style={{
          position: 'absolute',
          width: '120px',
          height: 'auto',
          left: `${position.x}px`,
          top: `${position.y}px`,
          transition: 'transform 0.1s',
        }}
      />
    </div>
  );
};

export default DvdLogo;
