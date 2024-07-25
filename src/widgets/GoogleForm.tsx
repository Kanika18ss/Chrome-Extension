import "../css/googleSlide.css";
import React from "react";

const GoogleForm: React.FC = () => {
  const handleFormClick = () => {
    window.open("https://docs.google.com/forms/u/0/?tgif=d&ec=asw-forms-hero-goto", "_blank");
  };

  return (
    <div className="googleForm">
      <div className="imageContainer">
        <img
          src="https://d2e0fzu2c9cj3i.cloudfront.net/wp-content/uploads/2020/04/image-1024x504.png" // Replace with the actual path to your image
          alt="Google Form Preview"
          width={450}
          height={300}
        />
      </div>
      <div className="clickableText" onClick={handleFormClick}>
        Google Form
      </div>
    </div>
  );
};

export default GoogleForm;
