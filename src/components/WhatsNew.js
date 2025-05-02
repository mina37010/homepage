import React, { useEffect, useState } from 'react';
import '../styles/WhatsNew.css'

const isNew = (dateString) => {
  const updateDate = new Date(dateString);
  const today = new Date();
  const diffDays = (today - updateDate) / (1000 * 60 * 60 * 24);
  return diffDays <= 3; // 3日以内なら NEW 表示
};

const WhatsNew = () => {
  const [updates, setUpdates] = useState([]);

  useEffect(() => {
    fetch('./data/updates.json')
      .then((res) => res.json())
      .then((data) => setUpdates(data))
      .catch((err) => console.error('更新履歴の取得に失敗:', err));
  }, []);

  return (
    <div className="whats-new-container">
      <div className="whats-new-list">
        {updates.map((item, index) => (
          <div key={index} className="whats-new-item">
            <div className="pale-color">
              {item.date}
              {isNew(item.date) && <span className="new-badge">NEW</span>}
            </div>
            <div className="base-color">{item.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatsNew;
