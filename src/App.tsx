import React from "react";
import GoogleSlide from "./components/GoogleSlide";
import Apps from "./components/PomoTimer";
import '../src/css/slider.css'

const App: React.FC = () => {
  return (
    <div className="App">
      {/* <GoogleSlide/> */}
      <Apps/>
    </div>
  );
}

export default App;


