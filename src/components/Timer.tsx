import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PlayButton from '../js/play';
import PauseButton from '../js/pause';
import SettingsButton from '../js/settingsButton';
import React, { useContext, useState, useEffect, useRef } from 'react';
import SettingsContext from '../js/settingsContext';

const red = '#f54e4e';
const green = '#4aec8c';

function Timer() {
  const settingsInfo = useContext(SettingsContext);

  const { workMinutes, breakMinutes, setShowSettings } = settingsInfo;

  const [isPaused, setIsPaused] = useState(true);
  const [mode, setMode] = useState<'work' | 'break'>('work'); // work/break
  const [secondsLeft, setSecondsLeft] = useState(0);

  const secondsLeftRef = useRef(secondsLeft);
  const isPausedRef = useRef(isPaused);
  const modeRef = useRef(mode);

  function tick() {
    secondsLeftRef.current--;
    setSecondsLeft(secondsLeftRef.current);
  }

  useEffect(() => {
    function switchMode() {
      const nextMode = modeRef.current === 'work' ? 'break' : 'work';
      const nextSeconds = (nextMode === 'work' ? workMinutes : breakMinutes) * 60;

      setMode(nextMode);
      modeRef.current = nextMode;

      setSecondsLeft(nextSeconds);
      secondsLeftRef.current = nextSeconds;
    }

    secondsLeftRef.current = workMinutes * 60;
    setSecondsLeft(secondsLeftRef.current);

    const interval = setInterval(() => {
      if (isPausedRef.current) {
        return;
      }
      if (secondsLeftRef.current === 0) {
        return switchMode();
      }

      tick();
    }, 1000);

    return () => clearInterval(interval);
  }, [workMinutes, breakMinutes]);

  const totalSeconds = mode === 'work' ? workMinutes * 60 : breakMinutes * 60;
  const percentage = Math.round(secondsLeft / totalSeconds * 100);

  const minutes = Math.floor(secondsLeft / 60);
  let seconds: string | number = secondsLeft % 60;
  if (seconds < 10) seconds = '0' + seconds;

  return (
    <div>
      <CircularProgressbar
        value={percentage}
        text={`${minutes}:${seconds}`}
        styles={buildStyles({
          textColor: '#fff',
          pathColor: mode === 'work' ? red : green,
        })}
      />
      <div style={{ marginTop: '20px' }}>
        {isPaused
          ? <PlayButton onClick={() => { setIsPaused(false); isPausedRef.current = false; }} />
          : <PauseButton onClick={() => { setIsPaused(true); isPausedRef.current = true; }} />}
      </div>
      <div style={{ marginTop: '20px' }}>
        <SettingsButton onClick={() => setShowSettings(true)} />
      </div>
    </div>
  );
}

export default Timer;
