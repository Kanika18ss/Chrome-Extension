import "../css/googleSlide.css";
import React from "react";
import Card from "../components/card"; // Adjust the import path as needed

const Music: React.FC = () => {
  const handleFormClick = () => {
    window.open("https://gaana.com/", "_blank");
  };

  return (
    <Card title="Music" onClick={handleFormClick}>
      <div className="imageContainer">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Gaana_%28music_streaming_service%29_logo.png/1200px-Gaana_%28music_streaming_service%29_logo.png" 
          alt="Music"
          width={300}
          height={200}
        />
      </div>
    </Card>
  );
};

export default Music;
