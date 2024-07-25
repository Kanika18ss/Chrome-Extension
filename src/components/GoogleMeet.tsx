// import "../css/googleMeet.css";
import React from "react";

const GoogleMeet: React.FC = () => {
  const handleMeetClick = () => {
    window.open("https://meet.google.com", "_blank");
  };

  return (
    <div className="googleMeet">
      <div className="imageContainer">
        <img
          src="https://cdn.classpoint.io/wp-content/uploads/blogThumbnail_gmet.jpg" // Replace with the actual path to your image
          alt="Google Meet Preview"
          width={450}
          height={300}
        />
      </div>
      <div className="clickableText" onClick={handleMeetClick}>
        Google Meet
      </div>
    </div>
  );
};

export default GoogleMeet;
