import {
  Minus,
  Pause,
  Play,
  Plus,
  Reset
} from "@styled-icons/boxicons-regular";
import { useEffect, useRef, useState } from "react";
import Heading from "./components/Heading";
import AppStyled from "./styles/AppStyled";
import ButtonsContainer from "./styles/ButtonContainer";
import ButtonStyled from "./styles/ButtonStyled";
import { LengthControlContainer } from "./styles/LengthControlStyled";
import SettingsContainerStyled from "./styles/SettingsContainerStyled";
import {
  TimeLeftStyled,
  TimerLabelStyled,
  TimerStyled
} from "./styles/TimerStyled";

const App = () => {
  const audio = useRef<HTMLAudioElement>(null);

  const defaultBreakLength = 5;
  const defaultSessionLength = 25;

  const [breakLength, setBreakLength] = useState(defaultBreakLength);
  const [sessionLength, setSessionLength] = useState(defaultSessionLength);
  const [isRunning, setIsRunnig] = useState(false);
  const [timeLeft, setTimeLeft] = useState(defaultSessionLength * 60);
  const [mode, setMode] = useState("session");

  const lengthControlIconSize = 24;
  const timerControlIconSize = 48;

  // https://overreacted.io/making-setinterval-declarative-with-react-hooks/
  const useInterval = (callback: Function, delay: number | null) => {
    const savedCallback = useRef(callback);

    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
      const tick = () => {
        savedCallback.current();
      };
      if (delay !== null) {
        const id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  };

  useInterval(
    () => {
      if (isRunning && timeLeft > 0) {
        setTimeLeft(timeLeft - 1);
      }
      if (timeLeft === 0) {
        switchMode();
        playAudio();
      }
    },
    isRunning ? 1000 : null
  );

  const timerControl = () => {
    setIsRunnig(!isRunning);
  };

  const resetTimer = () => {
    setIsRunnig(false);
    setBreakLength(defaultBreakLength);
    setSessionLength(defaultSessionLength);
    setTimeLeft(defaultSessionLength * 60);
    setMode("session");
    stopAudio();
  };

  // TODO: fix event type
  const incrementLength = (event: any) => {
    if (isRunning) {
      return;
    }
    const maxLength = 60;
    if (event.target.value === "session") {
      if (sessionLength < maxLength) {
        const updatedLength = sessionLength + 1;
        setTimeLeft(mode === "session" ? updatedLength * 60 : timeLeft);
        setSessionLength(updatedLength);
      }
    } else if (event.target.value === "break") {
      if (breakLength < maxLength) {
        const updatedLength = breakLength + 1;
        setTimeLeft(mode === "break" ? updatedLength * 60 : timeLeft);
        setBreakLength(updatedLength);
      }
    }
  };

  // TODO: fix event type
  const decrementLength = (event: any) => {
    if (isRunning) {
      return;
    }
    const minLength = 1;
    if (event.target.value === "session") {
      if (sessionLength > minLength) {
        const updatedLength = sessionLength - 1;
        setTimeLeft(mode === "session" ? updatedLength * 60 : timeLeft);
        setSessionLength(updatedLength);
      }
    } else if (event.target.value === "break") {
      if (breakLength > minLength) {
        const updatedLength = breakLength - 1;
        setTimeLeft(mode === "break" ? updatedLength * 60 : timeLeft);
        setBreakLength(updatedLength);
      }
    }
  };

  const displayClock = () => {
    const min = Math.floor(timeLeft / 60)
      .toString()
      .padStart(2, "0");
    const sec = (timeLeft % 60).toString().padStart(2, "0");
    return `${min}:${sec}`;
  };

  const playAudio = () => {
    audio.current?.play();
  };

  const stopAudio = () => {
    if (audio.current) {
      audio.current.pause();
      audio.current.currentTime = 0;
    }
  };

  const switchMode = () => {
    setTimeLeft(mode === "session" ? breakLength * 60 : sessionLength * 60);
    setMode(mode === "session" ? "break" : "session");
  };

  useEffect(() => {
    setTimeLeft(timeLeft);
  }, [timeLeft]);

  return (
    <>
      <AppStyled />
      <Heading />
      <SettingsContainerStyled>
        <LengthControlContainer id="break-label">
          <div>Break Length</div>
          <ButtonsContainer>
            <ButtonStyled
              id="break-decrement"
              onClick={decrementLength}
              value="break"
            >
              <Minus size={lengthControlIconSize} />
            </ButtonStyled>
            <div id="break-length">{breakLength}</div>
            <ButtonStyled
              id="break-increment"
              onClick={incrementLength}
              value="break"
            >
              <Plus size={lengthControlIconSize} />
            </ButtonStyled>
          </ButtonsContainer>
        </LengthControlContainer>
        <LengthControlContainer id="session-label">
          <div>Session Length</div>
          <ButtonsContainer>
            <ButtonStyled
              id="session-decrement"
              onClick={decrementLength}
              value="session"
            >
              <Minus size={lengthControlIconSize} />
            </ButtonStyled>
            <div id="session-length">{sessionLength}</div>
            <ButtonStyled
              id="session-increment"
              onClick={incrementLength}
              value="session"
            >
              <Plus size={lengthControlIconSize} />
            </ButtonStyled>
          </ButtonsContainer>
        </LengthControlContainer>
      </SettingsContainerStyled>
      <TimerStyled>
        <TimerLabelStyled id="timer-label">
          {mode === "session" ? "Session" : "Break"}
        </TimerLabelStyled>
        <TimeLeftStyled id="time-left">{displayClock()}</TimeLeftStyled>
      </TimerStyled>
      <ButtonsContainer>
        <ButtonStyled id="start_stop">
          {isRunning ? (
            <Pause onClick={timerControl} size={timerControlIconSize} />
          ) : (
            <Play onClick={timerControl} size={timerControlIconSize} />
          )}
        </ButtonStyled>
        <ButtonStyled id="reset">
          <Reset onClick={resetTimer} size={timerControlIconSize} />
        </ButtonStyled>
      </ButtonsContainer>
      <audio
        id="beep"
        ref={audio}
        src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
      ></audio>
    </>
  );
};

export default App;
