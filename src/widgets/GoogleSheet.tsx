import "../css/googleSlide.css";
import React from "react";

import ReactGoogleSpreadsheetPreview from "./SheetPreview";

const GoogleSlideAndSpreadsheet: React.FC = () => {
  const handleSpreadsheetClick = () => {
    window.open(
      "https://docs.google.com/spreadsheets/u/0/",
      "_blank"
    );
  };

  return (
      
      <div className="googleSpreadsheet " onClick={handleSpreadsheetClick}>
        <ReactGoogleSpreadsheetPreview
          width={300}
          height={200}
          spreadsheetLink="https://docs.google.com/spreadsheets/d/e/2PACX-1vRFLA9oqWXH-y6LY1AdUheazpZMlndM1AbHQqTOVch5eFvTQrqdXGDllE8D0Unl1hSIba1MFD3ThQYR/pubhtml?gid=0&single=true"
          spreadsheetId="2PACX-1vRFLA9oqWXH-y6LY1AdUheazpZMlndM1AbHQqTOVch5eFvTQrqdXGDllE8D0Unl1hSIba1MFD3ThQYR"
        />
      </div>
    
  );
};

export default GoogleSlideAndSpreadsheet;
