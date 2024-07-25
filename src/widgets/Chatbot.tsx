import React from "react";
import Card from "../components/card";

const Chatbot: React.FC = () => {
  const handleBotClick = () => {
    window.open("https://chatgpt.com/", "_blank");
  };

  return (
    <Card title="Chatbot" onClick={handleBotClick}>
      <div className="imageContainer">
        <img
          src="https://cdn.thewire.in/wp-content/uploads/2023/02/01093738/ChatGPT-1200x600.jpg" // Replace with the actual path to your image
          alt="Chatbot"
          width={300}
          height={200}
        />
      </div>
    </Card>
  );
};

export default Chatbot;
