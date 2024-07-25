import React from "react";
import GoogleSlide from "./components/GoogleSlide";
import Timer from "./components/Timer";
import '../src/css/slider.css'
import GoogleSpreadSheet from "./components/GoogleSheet";
import GoogleMeet from "./components/GoogleMeet";


const App: React.FC = () => {
  return (
    <div className="App">
      <GoogleSlide/>
      <GoogleSpreadSheet/>
      <GoogleMeet/>
      <div className="main-container center">
        <div className="circle-container center">
          <Timer/>
        </div>        
      </div>
  
    </div>
  );
}

export default App;


