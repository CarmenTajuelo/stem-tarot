import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllCards } from '../../services/tarotService';
import './CardList.css';

const CardList = () => {
  // State for cards and loading status
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Fetch cards when component mounts
  useEffect(() => {
    const fetchCards = async () => {
      try {
        setLoading(true);
        const data = await getAllCards();
        setCards(data);
        setError(null);
      } catch (error) {
        setError('Failed to load tarot cards');
        console.error('Error loading cards:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCards();
  }, []);

  // Handle card click navigation
  const handleCardClick = (cardId) => {
    navigate(`/card/${cardId}`);
  };

  // Show loading state
  if (loading) {
    return <div className="loading">Loading cards...</div>;
  }

  // Show error state
  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="card-grid">
      {cards.map((card) => (
        <div
          key={card.id}
          className="card-back"
          onClick={() => handleCardClick(card.id)}
          aria-label={`Tarot card ${card.name || 'Unknown'}`}
        >
          <div className="card-back-design">
            <div className="card-back-pattern"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardList;
