import "./HomePage.css";
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import MooshflixLogo from "../images/mooshflix-logo.png";
import strangerThingsLogo from "../images/stranger-things-logo.png";
import NetflixNLogo from "../images/netflix-n-logo.png";
import PopularList from "../components/PopularList";

const HomePage = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>
      <header className="home-page-header">
        <Link to="/"><img className="logo" src={MooshflixLogo} alt="" /></Link>
        <span className="header-item">Home</span>
        <span className="header-item">TV Shows</span>
        <span className="header-item">Movies</span>
        <span className="header-item">New & Popular</span>
        <span className="header-item">My List</span>
        <span className="header-item">Browse by languages</span>
      </header>
      {!isPlaying ? (
        <>
        <div className="home-page-hero-bg">
            <div className="hero-card-featured-content">
              <div className="n-series">
                <img
                  className="netflix-n-logo"
                  src={NetflixNLogo}
                  alt="Netflix N Logo"
                />
                <span className="series-font">SERIES</span>
              </div>
              <img
                className="st-logo"
                src={strangerThingsLogo}
                alt="Stranger Things Logo"
              />
              <div className="fc-rank">#1 in TV Shows Today</div>
              <p className="fc-desc">
                When a young boy vanishes, a small town uncovers a mystery
                involving secret experiments, terrifying supernatural forces and
                one strange little girl.
              </p>
              <p>Winona Ryder, David Harbour, Matthew Modine</p>
              <p>TV Shows, TV SciFi & Fantasy, Teen TV Shows</p>
              <div className="btn-container">
                <button 
                  className="fc-btn primary-btn"
                  onClick={() => setIsPlaying(true)}
                >
                  Play
                </button>
                <button className="fc-btn secondary-btn">More Info</button>
              </div>
            </div>
          </div>
          </>
        ) : (
          <div className="preview-player">
            <iframe
              width="100%"
              height="550"
              src="https://www.youtube.com/embed/CKtq-bZgS8I?si=O13a_jM6wHZHH4F0?autoplay=1"
              title="YouTube video player"
              frameBorder="0"
              allow="autoplay"
              referrerPolicy="strict-origin-when-cross-origin"
              autohide="true"
              allowFullScreen
            ></iframe>
            <button 
              className="fc-btn dismiss-btn"
              onClick={() => setIsPlaying(false)}
            >
              Close
            </button>
          </div>
        )}

      <div className="popular-list">
        <div className="pl-title">Popular On Netflix</div>
        <div className="pl-content">
          <PopularList />
        </div>
      </div>
    </>
  );
};

export default HomePage;
