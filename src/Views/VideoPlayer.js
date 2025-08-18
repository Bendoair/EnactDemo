import Button from '@enact/sandstone/Button';
import React, { useRef } from 'react';
import './VideoPlayer.css'; // Create this CSS file


const VideoPlayer = () => {
  const videoRef = useRef(null);

  // Custom control functions
  const playVideo = () => videoRef.current?.play();
  const pauseVideo = () => videoRef.current?.pause();
  const toggleMute = () => (videoRef.current.muted = !videoRef.current.muted);

  return (
    <div className="video-player-container">
      {/* Video Element */}
      <video
        ref={videoRef}
        className='video-element'
        controls={false} // Hide default controls
      >
        <source src="https://static.videezy.com/system/resources/previews/000/004/210/original/4.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Custom Buttons */}
      <div className='video-controls'>
        <Button onClick={playVideo}>▶️ Play</Button>
        <Button onClick={pauseVideo}>⏸ Pause</Button>
        <Button onClick={toggleMute}>🔇 Toggle Mute</Button>
      </div>
    </div>
  );
};

export default VideoPlayer;