import "../css/googleSlide.css";
import React from "react";

const Music: React.FC = () => {
  const handleFormClick = () => {
    window.open("https://gaana.com/", "_blank");
  };

  return (
    <div className="googleForm clickableText" onClick={handleFormClick}>
      <div className="imageContainer">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Gaana_%28music_streaming_service%29_logo.png/1200px-Gaana_%28music_streaming_service%29_logo.png" 
          alt="Music"
          width={450}
          height={200}
        />
      </div>
      <div className="clickableText" onClick={handleFormClick}>
        Music
      </div>
    </div>
  );
};

export default Music;
