import React from 'react';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const { id } = useParams();
  
  return (
    <div>
      <h2>Card Details</h2>
      <p>Card ID: {id}</p>
    </div>
  );
};

export default Detail;
