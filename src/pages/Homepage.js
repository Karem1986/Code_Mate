import React from "react";
import video from "../../src/video.mp4";
export default function Homepage() {
  return (
    <div className="homepage">
      <h1>Welcome to Code Mate</h1>

      <video
        src={video}
        alt="code-mate"
        autoPlay="true"
        className="video-homepage"
      ></video>
    </div>
  );
}
