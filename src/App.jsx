import React from 'react';
import './App.css';
import profile from './assets/user2.webp';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const App = () => {
  return (
    <div className="app-container">
      <div className="profile-card">
        {/* Use LazyLoadImage with blur effect */}
        <LazyLoadImage
          className="profile-image"
          src={profile}
          alt="Profile"
          effect="blur"
        />

        <h1>Hi! I am Parampreet Singh</h1>
        <p>ML Enthusiast | Frontend Developer | Open to Opportunities</p>

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
