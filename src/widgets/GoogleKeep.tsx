import React from "react";

const GoogleKeep: React.FC = () => {
  const handleKeepClick = () => {
    window.open("https://keep.google.com/u/0/", "_blank");
  };

  return (
    <div className="googleKeep">
      <div className="imageContainer">
        <img
          src="https://addons.mozilla.org/user-media/previews/full/252/252841.png?modified=1622132846" 
          alt="Google Keep Preview"
          width={450}
          height={300}
        />
      </div>
      <div className="clickableText" onClick={handleKeepClick}>
        Google Keep
      </div>
    </div>
  );
};

export default GoogleKeep;