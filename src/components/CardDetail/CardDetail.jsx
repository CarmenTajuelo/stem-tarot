import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getCardById } from '../../services/tarotService';
import './CardDetail.css';

const CardDetail = () => {
  // States for card data, loading and error
  const [card, setCard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Get card ID from URL parameters
  const { id } = useParams();
  const navigate = useNavigate();

  // Fetch card data when component mounts or ID changes
  useEffect(() => {
    const fetchCard = async () => {
      try {
        setLoading(true);
        const data = await getCardById(id);
        setCard(data);
        setError(null);
      } catch (error) {
        setError('Failed to load card details');
        console.error('Error loading card:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCard();
  }, [id]);

  // Handle back navigation
  const handleBack = () => {
    navigate('/');
  };

  // Show loading state
  if (loading) {
    return <div className="loading">Loading card details...</div>;
  }

  // Show error state
  if (error) {
    return (
      <div className="error-container">
        <div className="error">{error}</div>
        <button onClick={handleBack} className="back-button">
          Back to Cards
        </button>
      </div>
    );
  }

  // Show card not found state
  if (!card) {
    return (
      <div className="error-container">
        <div className="error">Card not found</div>
        <button onClick={handleBack} className="back-button">
          Back to Cards
        </button>
      </div>
    );
  }

  return (
    <div className="card-detail">
      <button onClick={handleBack} className="back-button">
        ← Back to Cards
      </button>
      
      <div className="card-content">
        <h2 className="card-title">{card.name || 'Card Details'}</h2>
        
        <div className="card-info">
          {/* Display all available data from the card object */}
          <pre className="debug-info">
            {JSON.stringify(card, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
