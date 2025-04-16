import React, { useRef, useState } from 'react';

const Window = ({ id, position }) => {
  return (
    <div
      className="window"
      style={{
        position: 'absolute',
        left: `${position.x}px`,
        top: `${position.y}px`,
        transition: 'left 0.8s ease-in-out, top 0.8s ease-in-out',
      }}
    >
      Window {id}
    </div>
  );
};

const MacStyleHome = () => {
  const containerRef = useRef(null);

  const windowWidth = 150;
  const windowHeight = 100;
  const visibleMargin = 10;

  const initialPositions = [
    { id: 1, x: 300, y: 300 },
    { id: 2, x: 500, y: 400 },
    { id: 3, x: 700, y: 200 },
  ];

  const [windowPositions, setWindowPositions] = useState(initialPositions);
  const [movedOutward, setMovedOutward] = useState(false);

  const handleBackgroundClick = () => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    if (!movedOutward) {
      const movedPositions = windowPositions.map((win) => {
        const dx = win.x - centerX;
        const dy = win.y - centerY;

        const length = Math.sqrt(dx * dx + dy * dy) || 1;
        const unitX = dx / length;
        const unitY = dy / length;

        // 画面の中心から各方向に飛ばせる最大距離（ウィンドウサイズを考慮）
        const maxRight = (rect.width - visibleMargin - windowWidth / 2) - centerX;
        const maxLeft = centerX - (visibleMargin + windowWidth / 2);
        const maxBottom = (rect.height - visibleMargin - windowHeight / 2) - centerY;
        const maxTop = centerY - (visibleMargin + windowHeight / 2);
        // 各方向への制限距離
        const tX = unitX > 0 ? maxRight / unitX : maxLeft / -unitX;
        const tY = unitY > 0 ? maxBottom / unitY : maxTop / -unitY;
        console.log(tX,tY)
        // 限界を超えないように小さい方を採用（直線と境界の交点）
        const maxT = Math.min(tX, tY); 

        const targetX = centerX + unitX * maxT;
        const targetY = centerY + unitY * maxT;

        return {
          ...win,
          x: targetX,
          y: targetY,
        };
      });

      setWindowPositions(movedPositions);
    } else {
      setWindowPositions(initialPositions);
    }

    setMovedOutward(!movedOutward);
  };

  return (
    <div
      ref={containerRef}
      className="desktop"
      onClick={handleBackgroundClick}
      style={{
        width: '100vw',
        height: '100vh',
        backgroundColor: '#1e1e1e',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
      }}
    >
      {windowPositions.map((win) => (
        <Window key={win.id} id={win.id} position={{ x: win.x, y: win.y }} />
      ))}
    </div>
  );
};

export default MacStyleHome;
