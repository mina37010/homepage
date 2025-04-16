import React, { useRef, useEffect, useState } from 'react';

const getRandomColor = () =>
  `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;

const DvdLogo = () => {
  const logoRef = useRef(null);
  const containerRef = useRef(null);

  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [direction, setDirection] = useState({ dx: 2, dy: 2 });
  const [color, setColor] = useState(getRandomColor());

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
      let hitWall = false;

      if (newX <= 0 || newX + logoRect.width >= containerRect.width) {
        newDx = -newDx;
        hitWall = true;
      }
      if (newY <= 0 || newY + logoRect.height >= containerRect.height) {
        newDy = -newDy;
        hitWall = true;
      }

      setPosition({ x: newX, y: newY });
      setDirection({ dx: newDx, dy: newDy });

      if (hitWall) {
        setColor(getRandomColor());
      }

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
      <div
        ref={logoRef}
        style={{
          position: 'absolute',
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: '120px',
          height: 'auto',
        }}
      >
        <svg viewBox="0 0 512 256" width="120" xmlns="http://www.w3.org/2000/svg">
          <g fill={color}>
            <path d="M50,150 L100,150 Q130,150 130,120 Q130,90 100,90 L50,90 Z 
                     M105,90 L130,90 L180,150 L150,150 Z 
                     M180,150 L230,150 Q260,150 260,120 Q260,90 230,90 L180,90 Z" />
            <ellipse cx="260" cy="220" rx="180" ry="40" fill={color} />
            <ellipse cx="260" cy="220" rx="40" ry="10" fill="black" />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default DvdLogo;
