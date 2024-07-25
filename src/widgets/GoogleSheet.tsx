import "../css/googleSlide.css";
import React from "react";
import ReactGoogleSlides from "react-google-slides";
import ReactGoogleSpreadsheetPreview from "./SheetPreview";

const GoogleSlideAndSpreadsheet: React.FC = () => {
  const handleSpreadsheetClick = () => {
    window.open(
      "https://docs.google.com/spreadsheets/u/0/",
      "_blank"
    );
  };

  return (
    <div className="container">
      
      <div className="googleSpreadsheet">
        <ReactGoogleSpreadsheetPreview
          width={450}
          height={300}
          spreadsheetLink="https://docs.google.com/spreadsheets/d/e/2PACX-1vRFLA9oqWXH-y6LY1AdUheazpZMlndM1AbHQqTOVch5eFvTQrqdXGDllE8D0Unl1hSIba1MFD3ThQYR/pubhtml?gid=0&single=true"
          spreadsheetId="2PACX-1vRFLA9oqWXH-y6LY1AdUheazpZMlndM1AbHQqTOVch5eFvTQrqdXGDllE8D0Unl1hSIba1MFD3ThQYR"
        />
        
        <div className="clickableText" onClick={handleSpreadsheetClick}>
          Google Spreadsheet
        </div>
      </div>
    </div>
  );
};

export default GoogleSlideAndSpreadsheet;
