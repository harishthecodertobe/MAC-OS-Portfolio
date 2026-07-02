import React from 'react'
import MacWindow from './MacWindow'
import './spotify.scss'
     
const Spotify = ({ windowName, setWindowsState }) => {
  return (
    <MacWindow windowName={windowName} setWindowsState={setWindowsState}>
      <div className="spotify-window">
        <iframe
          data-testid="embed-iframe"
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/playlist/6K0KCW3yOoIUK8ZEFwDWHo?utm_source=generator&si=96a1e7d3a81e4da0"
          width="100%"
          height="352"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          allowFullScreen
          loading="lazy"
          title="Spotify Album"
        ></iframe>
      </div>
    </MacWindow>
  );
};


export default Spotify;