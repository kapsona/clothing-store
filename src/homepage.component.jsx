import React from "react";
import "./homepage.style.scss";
const HomePage = () => {
  return (
    <div className="homepage">
      <div className="directory-menu">
        <div className="menu-item">
          <div className="content">
            <h1 className="title">HATS</h1>
            <span className="subtititle">Shop Now</span>
          </div>
        </div>

        <div className="menu-item">
          <div className="content">
            <h1 className="title">JACKETS</h1>
            <span className="subtititle">Shop Now</span>
          </div>
        </div>

        <div className="menu-item">
          <div className="content">
            <h1 className="title">SNEAKERS</h1>
            <span className="subtititle">Shop Now</span>
          </div>
        </div>

        <div className="menu-item">
          <div className="content">
            <h1 className="title">WOMENs</h1>
            <span className="subtititle">Shop Now</span>
          </div>
        </div>

        <div className="menu-item">
          <div className="content">
            <h1 className="title">MENS</h1>
            <span className="subtititle">Shop Now</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
