import React from 'react';
import GoogleSlide from "./widgets/GoogleSlide";
import Timer from "./widgets/Timer";
import GoogleSpreadSheet from "./widgets/GoogleSheet";
import GoogleMeet from "./widgets/GoogleMeet";
import GoogleForm from "./widgets/GoogleForm";
import Music from "./widgets/music";
import Chatbot from "./widgets/Chatbot";
import GoogleCalendar from "./widgets/GoogleCalendar";
import GoogleKeep from "./widgets/GoogleKeep";
import Sidebar from "./components/sidebar";

import '../src/css/slider.css';
import '../src/css/app.css';
import IssueTracker from './widgets/IssueTracker';
import HealthTracker from './widgets/HealthTracker';
import Checklist from './widgets/Growth';


const App: React.FC = () => {
  return (
    <div className="Apps">
      <Sidebar/>
      <div className="main-content">
        <div className="card-container">
          <GoogleSlide/>
          <GoogleSpreadSheet/>
          <GoogleMeet/>
          <IssueTracker/>
          <Checklist/>
          <GoogleForm/>
          <GoogleCalendar/>
          <GoogleKeep/>
          <Music/>
          <HealthTracker/>
          <Chatbot/>
          
        </div>
      </div>
      
    </div>
  );
}

export default App;
