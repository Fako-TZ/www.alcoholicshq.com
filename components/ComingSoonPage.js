import React from 'react';
import './test.css'; // Import your external CSS file

function ComingSoonPage() {
  return (
    <div>
      <h1 className="section-title">Thanks to these people for making alcoholcs what it is</h1>
      <div className="coming-soon-container">
        {/* Section for thanking contributors */}
        <div className="contributors-section">
          <ul className="contributors-list">
            <li>
              <div className="contributor-info">
                <img src="https://public-files.gumroad.com/xunluzal9jijg469j9mfaxxahugz" alt="Aztrax PFP" className="profile-picture" />
                <div className="contributor-details">
                  <h3>Aztrax</h3>
                  <p className="role">Asset Creator</p>
                  <a href="https://aztrax.gumroad.com/" className="assets-button" target="_blank" rel="noopener noreferrer">View Store</a>
                </div>
              </div>
            </li>
            {/* Add margin to create spacing between contributors */}
            <li style={{ marginBottom: '20px' }}>
              <div className="contributor-info">
              </div>
            </li>
            <li style={{ marginBottom: '20px' }}>
              <div className="contributor-info">
              </div>
            </li>
            <li style={{ marginBottom: '20px' }}>
              <div className="contributor-info">
              </div>
            </li>
            <li>
              <div className="contributor-info">
                <img src="https://cdn.discordapp.com/attachments/1209042842467704843/1241515811818967100/VRChat_2024-05-11_22-15-26.334_2560x1440.png?ex=664e6fb3&is=664d1e33&hm=a57ae160e2cdaaf6f6319948d3a22c1eebf179642b4165cc3d5acb38ccfb3fc7&" alt="Raven PFP" className="profile-picture" />
                <div className="contributor-details">
                  <h3>Raven</h3>
                  <p className="role">Tester</p>
                  <a href="https://www.twitch.tv/ravenytl" className="assets-button" target="_blank" rel="noopener noreferrer">Twitch</a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ComingSoonPage;
