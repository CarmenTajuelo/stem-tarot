import React from 'react';
import './CardList.css';

const CardList = () => {
  // Temporary mock data for initial layout
  const mockCards = Array.from({ length: 12 }, (_, index) => ({
    id: index + 1,
  }));

  return (
    <div className="card-grid">
      {mockCards.map((card) => (
        <div 
          key={card.id}
          className="card-back"
          aria-label={`Tarot card ${card.id}`}
        >
          <div className="card-back-design"></div>
        </div>
      ))}
    </div>
  );
};

export default CardList;
};

export default CardList;
