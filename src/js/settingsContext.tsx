import React from 'react';

interface SettingsContextType {
  showSettings: boolean;
  setShowSettings: (value: boolean) => void;
  workMinutes: number;
  breakMinutes: number;
  setWorkMinutes: (value: number) => void;
  setBreakMinutes: (value: number) => void;
}

const defaultSettings: SettingsContextType = {
  showSettings: false,
  setShowSettings: () => {},
  workMinutes: 25,
  breakMinutes: 5,
  setWorkMinutes: () => {},
  setBreakMinutes: () => {},
};

const SettingsContext = React.createContext<SettingsContextType>(defaultSettings);

export default SettingsContext;
