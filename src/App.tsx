import React from "react";
import GoogleSlide from "./widgets/GoogleSlide";
import Timer from "./widgets/Timer";
import '../src/css/slider.css'
import GoogleSpreadSheet from "./widgets/GoogleSheet";
import GoogleMeet from "./widgets/GoogleMeet";
import GoogleForm from "./widgets/GoogleForm";
import Music from "./widgets/music";
import Chatbot from "./widgets/Chatbot";
import GoogleCalendar from "./widgets/GoogleCalendar";
import GoogleKeep from "./widgets/GoogleKeep";
import Sidebar from "./components/sidebar";



const App: React.FC = () => {
  return (
    <div>
      <Sidebar/>
    <div className="App">
      
      <GoogleSlide/>
      <GoogleSpreadSheet/>
      <GoogleMeet/>
      <GoogleForm/>
      <GoogleCalendar/>
      <GoogleKeep/>
      <Music/>
      <Chatbot/>
     
      <div className="main-container center">
        <div className="circle-container center">
          <Timer/>
        </div>        
      </div>
  
    </div>
    </div>
  );
}

export default App;


