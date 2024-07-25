import "../css/googleSlide.css";
import React from "react";
import ReactGoogleSlides from "react-google-slides";

const GoogleSlide: React.FC = () => {
  return (
    <div className="gooleSlide">
      <ReactGoogleSlides
        width={450}
        height={300}
        slidesLink="https://docs.google.com/presentation/d/1F9UsXXpLmlR0MfCzzMHmlPsv73-WH3Bh"
        slideDuration={5}
        showControls
        loop
      />
      
    </div>
  );
}

export default GoogleSlide;


