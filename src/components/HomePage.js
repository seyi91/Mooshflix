import "./HomePage.css";
import React from "react";
import strangerThingsLogo from "../images/stranger-things-logo.png";
import NetflixNLogo from "../images/netflix-n-logo.png";

const PopularList = () => {
  let popularList = [];

  for (let i = 0; i < 10; i++) {
    let content = <div className="content-card">Content {i + 1}</div>;
    popularList[i] = content;
  }
  return popularList;
};

const HomePage = () => {
  return (
    <>
      <div className="home-page-hero-bg">
        <div className="home-page-header">
          <span className="header-item">FLIX</span>
          <span className="header-item">TV Shows</span>
          <span className="header-item">Movies</span>
          <span className="header-item">New & Popular</span>
          <span className="header-item">My List</span>
          <span className="header-item">Browse by languages</span>
        </div>
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
            When a young boy vanishes, a small town uncovers a mystery involving
            secret experiments, terrifying supernatural forces and one strange
            little girl.
          </p>
          <p>Winona Ryder, David Harbour, Matthew Modine</p>
          <p>TV Shows, TV SciFi & Fantasy, Teen TV Shows</p>
          <div className="btn-container">
            <button className="fc-btn primary-btn">Play</button>
            <button className="fc-btn secondary-btn">More Info</button>
          </div>
        </div>
      </div>

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
