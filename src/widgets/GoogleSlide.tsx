import "../css/googleSlide.css";
import React from "react";
import Card from "../components/card";
import ReactGoogleSlides from "react-google-slides";

const GoogleSlide: React.FC = () => {
  const handleSlideClick = () => {
    window.open("https://docs.google.com/presentation/u/0/?ec=wgc-slides-globalnav-goto", "_blank");
  };


  return (
    <Card title="Google Slide" onClick={handleSlideClick}>
      <ReactGoogleSlides
        width={300}
        height={200}
        slidesLink="https://docs.google.com/presentation/d/1F9UsXXpLmlR0MfCzzMHmlPsv73-WH3Bh"
        slideDuration={5}
        showControls
        loop
      />
      
  </Card>
  );
}

export default GoogleSlide;


