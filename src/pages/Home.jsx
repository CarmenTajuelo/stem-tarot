import React from 'react';
import CardList from '../components/CardList/CardList';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <h1>Tarot Cards</h1>
      <CardList />
    </div>
  );
};

export default Home;
