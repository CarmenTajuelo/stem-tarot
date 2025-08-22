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
    return <div className="loading">Cargando los detalles de las cartas...</div>;
  }

  // Show error state
  if (error) {
    return (
      <div className="error-container">
        <div className="error">{error}</div>
        <button onClick={handleBack} className="back-button">
          Volver a las cartas
        </button>
      </div>
    );
  }

  // Show card not found state
  if (!card) {
    return (
      <div className="error-container">
        <div className="error">Carta no encontrada</div>
        <button onClick={handleBack} className="back-button">
          Volver a las cartas
        </button>
      </div>
    );
  }

  return (
    <div className="card-detail">
      <button onClick={handleBack} className="back-button">
        ← Volver a las cartas
      </button>
      
      <div className="card-content">
        <div className="arcane-section">
          <div className="arcane-image-container">
            <img 
              src={card.arcaneImage.imageSrc} 
              alt={card.arcaneName}
              className="arcane-image"
            />
            <div className="image-attribution">
              Imagen de {card.arcaneImage.author}
              {card.arcaneImage.license && ` - ${card.arcaneImage.license}`}
            </div>
          </div>
          
          <div className="arcane-info">
            <div className="arcane-header">
              <span className="arcane-number">{card.arcaneNumber}</span>
              <h2 className="arcane-name">{card.arcaneName}</h2>
            </div>
            <p className="arcane-description">{card.arcaneDescription}</p>
          </div>
        </div>

        <div className="goddess-section">
          <div className="goddess-image-container">
            <img 
              src={card.goddessImage.imageSrc} 
              alt={card.goddessName}
              className="goddess-image"
            />
            <div className="image-attribution">
              {card.goddessImage.author}
              {card.goddessImage.licenseUrl && (
                <a 
                  href={card.goddessImage.licenseUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  - License
                </a>
              )}
            </div>
          </div>
          
          <div className="goddess-info">
            <h3 className="goddess-name">{card.goddessName}</h3>
            <p className="goddess-description">{card.goddessDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
