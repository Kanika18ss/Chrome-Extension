import React, { useContext } from 'react';
import ReactSlider from 'react-slider';
import SettingsContext from './settingsContext';
import BackButton from './back'; // Ensure this path is correct
import '../css/sliders.css'
// Define the type for settingsInfo based on your SettingsContext
interface SettingsContextType {
  workMinutes: number;
  setWorkMinutes: (value: number) => void;
  breakMinutes: number;
  setBreakMinutes: (value: number) => void;
  setShowSettings: (show: boolean) => void;
}

const Settings: React.FC = () => {
  const settingsInfo = useContext(SettingsContext) as SettingsContextType;

  return (
    <div style={{ textAlign: 'left' }}>
      <label>work: {settingsInfo.workMinutes}:00</label>
      <ReactSlider
        className={'slider'}
        thumbClassName={'thumb'}
        trackClassName={'track'}
        value={settingsInfo.workMinutes}
        onChange={newValue => settingsInfo.setWorkMinutes(newValue)}
        min={1}
        max={120}
      />
      <label>break: {settingsInfo.breakMinutes}:00</label>
      <ReactSlider
        className={'slider green'}
        thumbClassName={'thumb'}
        trackClassName={'track'}
        value={settingsInfo.breakMinutes}
        onChange={newValue => settingsInfo.setBreakMinutes(newValue)}
        min={1}
        max={120}
      />
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <BackButton onClick={() => settingsInfo.setShowSettings(false)} />
      </div>
    </div>
  );
};

export default Settings;
