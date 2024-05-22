import React from 'react';

function DiscordPage() {
  return (
    <div className="container">
      <h1>Discord Server</h1>
      <div className="discord-widget">
        <iframe
          title="Discord Widget"
          src="https://discord.com/widget?id=1209042072120721480&theme=dark"
          width="350"
          height="500"
          allowtransparency="true"
          sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
        ></iframe>
      </div>
    </div>
  );
}

export default DiscordPage;
