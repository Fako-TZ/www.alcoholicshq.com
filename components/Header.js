import React from 'react';
import './Header.css'; // If you have a CSS file for styling

function Header() {
  return (
    <div className="container">
      <div className="header">
        <img src={`${process.env.PUBLIC_URL}/images/New_Alcoholics.png`} alt="ALCOHOLICS Community Header" />
        <h1>Welcome to ALCOHOLICS</h1>
        <p>We are a VRChat / Discord Community</p>
      </div>
    </div>
  );
}

export default Header;
