import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllCards } from '../../services/tarotService';
import './CardList.css';

const CardList = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCards = async () => {
      try {
        setLoading(true);
        const data = await getAllCards();
        setCards(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCards();
  }, []);

  const handleCardClick = (cardId) => {
    navigate(`/card/${cardId}`);
  };

  if (loading) {
    return <div className="loading-container">Loading cards...</div>;
  }

  if (error) {
    return <div className="error-container">Error: {error}</div>;
  }

  return (
    <div className="card-grid">
      {cards.map((card) => (
        <div 
          key={card.id}
          className="card-item"
          onClick={() => handleCardClick(card.id)}
          aria-label={`Tarot card ${card.name}`}
          role="button"
          tabIndex={0}
        >
          {card.image ? (
            <img 
              src={card.image} 
              alt={card.name} 
              className="card-image"
            />
          ) : (
            <div className="card-back">
              <div className="card-back-design"></div>
            </div>
          )}
          <div className="card-name">{card.name}</div>
        </div>
      ))}
    </div>
  );
};

export default CardList;
