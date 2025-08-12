import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getCardById } from '../../services/tarotService';
import './CardDetail.css';

const CardDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [card, setCard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCard = async () => {
      try {
        setLoading(true);
        const data = await getCardById(id);
        setCard(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCard();
  }, [id]);

  const handleBack = () => {
    navigate('/');
  };

  if (loading) {
    return (
      <div className="card-detail">
        <button onClick={handleBack} className="back-button">
          ← Back to Cards
        </button>
        <div className="loading">Loading card details...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="card-detail">
        <button onClick={handleBack} className="back-button">
          ← Back to Cards
        </button>
        <div className="error-container">
          <div className="error">Error loading card details: {error}</div>
          <div className="debug-info">Card ID: {id}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="card-detail">
      <button onClick={handleBack} className="back-button">
        ← Back to Cards
      </button>
      
      <div className="card-content">
        <h2 className="card-title">{card.name}</h2>
        
        <div className="card-main">
          <div className="card-image-container">
            {card.image ? (
              <img src={card.image} alt={card.name} className="card-image" />
            ) : (
              <div className="card-placeholder">No image available</div>
            )}
          </div>
          
          <div className="card-info">
            <div className="info-section">
              <h3>Type</h3>
              <p>{card.type || 'Unknown'}</p>
            </div>
            
            <div className="info-section">
              <h3>Description</h3>
              <p>{card.description || 'No description available'}</p>
            </div>

            {card.meaning_up && (
              <div className="info-section">
                <h3>Upright Meaning</h3>
                <p>{card.meaning_up}</p>
              </div>
            )}

            {card.meaning_rev && (
              <div className="info-section">
                <h3>Reversed Meaning</h3>
                <p>{card.meaning_rev}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
