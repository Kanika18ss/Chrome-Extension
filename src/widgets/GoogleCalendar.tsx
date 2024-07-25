import React from "react";

const GoogleCalendar: React.FC = () => {
  const handleCalendarClick = () => {
    window.open("https://calendar.google.com/calendar/u/0/r/day", "_blank");
  };

  return (
    <div className="googleCalendar">
      <div className="imageContainer">
        <img
          src="https://www.dianamarinova.com/wp-content/uploads/2013/09/Google-Calendar-week-view.png" 
          alt="Google Calendar Preview"
          width={450}
          height={300}
        />
      </div>
      <div className="clickableText" onClick={handleCalendarClick}>
        Google Calendar
      </div>
    </div>
  );
};

export default GoogleCalendar;
