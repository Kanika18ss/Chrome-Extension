import "../css/googleSlide.css";
import React from "react";

const Chatbot: React.FC = () => {
  const handlebotClick = () => {
    window.open("https://chatgpt.com/", "_blank");
  };

  return (
    <div className="googleForm " onClick={handlebotClick}>
      <div className="imageContainer">
        <img
          src="https://cdn.thewire.in/wp-content/uploads/2023/02/01093738/ChatGPT-1200x600.jpg" // Replace with the actual path to your image
          alt="Chatbot"
          width={450}
          height={300}
        />
      </div>
      <div className="clickableText" onClick={handlebotClick}>
        Chatbot
      </div>
    </div>
  );
};

export default Chatbot;
