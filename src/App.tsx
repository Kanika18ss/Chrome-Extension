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
import Card from "./components/Card"; // Import the Card component
import '../src/css/slider.css';
import '../src/css/app.css';

const App: React.FC = () => {
  return (
    <div className="Apps">
      <Sidebar/>
      <div className="main-content">
        <div className="card-container">
          <Card><GoogleSlide/></Card>
          <Card><GoogleSpreadSheet/></Card>
          <GoogleMeet/>
          <GoogleForm/>
          <GoogleCalendar/>
          <GoogleKeep/>
          <Music/>
          <Chatbot/>
        </div>
      </div>
    </div>
  );
}

export default App;
