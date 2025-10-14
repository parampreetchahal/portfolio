import React from 'react';
import './App.css';
import profile from './assets/user2.png';
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <div className="app-container">
      <div className="profile-card">
        <img className="profile-image" src={profile} alt="Profile" />
        <h1>Hi! I am Parampreet Singh</h1>
        <p>Frontend Developer | React Enthusiast | Open to Opportunities</p>
        <Link to="/portfolio">
          <button className="portfolio-button" type="button">
            View Portfolio
          </button>
        </Link>
      </div>
    </div>
  );
};

export default App;
