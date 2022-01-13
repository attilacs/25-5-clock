import {
  Minus,
  Pause,
  Play,
  Plus,
  Reset
} from "@styled-icons/boxicons-regular";
import { useEffect, useRef, useState } from "react";
import Heading from "./components/Heading";
import Timer from "./components/Timer";
import AppStyled from "./styles/AppStyled";
import ButtonsContainer from "./styles/ButtonContainer";
import ButtonStyled from "./styles/ButtonStyled";
import { LengthControlContainer } from "./styles/LengthControlStyled";
import SettingsContainerStyled from "./styles/SettingsContainerStyled";

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

  const incrementLength = (
    value: number,
    setter: React.Dispatch<React.SetStateAction<number>>,
    isRunning: boolean,
    timeLeftSetter: React.Dispatch<React.SetStateAction<number>>,
    mode: string,
    selected: string
  ) => {
    const maxLength = 60;
    if (!isRunning && value < maxLength) {
      const updatedValue = value + 1;
      setter(updatedValue);
      if (mode === selected && timeLeftSetter) {
        timeLeftSetter(updatedValue * 60);
      }
    }
  };

  const decrementLength = (
    value: number,
    setter: React.Dispatch<React.SetStateAction<number>>,
    isRunning: boolean,
    timeLeftSetter: React.Dispatch<React.SetStateAction<number>>,
    mode: string,
    selected: string
  ) => {
    const minLength = 1;
    if (!isRunning && minLength < value) {
      const updatedValue = value - 1;
      setter(updatedValue);
      if (mode === selected && timeLeftSetter) {
        timeLeftSetter(updatedValue * 60);
      }
    }
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
              onClick={() =>
                decrementLength(
                  breakLength,
                  setBreakLength,
                  isRunning,
                  setTimeLeft,
                  mode,
                  "break"
                )
              }
            >
              <Minus size={lengthControlIconSize} />
            </ButtonStyled>
            <div id="break-length">{breakLength}</div>
            <ButtonStyled
              id="break-increment"
              onClick={() =>
                incrementLength(
                  breakLength,
                  setBreakLength,
                  isRunning,
                  setTimeLeft,
                  mode,
                  "break"
                )
              }
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
              onClick={() =>
                decrementLength(
                  sessionLength,
                  setSessionLength,
                  isRunning,
                  setTimeLeft,
                  mode,
                  "session"
                )
              }
            >
              <Minus size={lengthControlIconSize} />
            </ButtonStyled>
            <div id="session-length">{sessionLength}</div>
            <ButtonStyled
              id="session-increment"
              onClick={() =>
                incrementLength(
                  sessionLength,
                  setSessionLength,
                  isRunning,
                  setTimeLeft,
                  mode,
                  "session"
                )
              }
            >
              <Plus size={lengthControlIconSize} />
            </ButtonStyled>
          </ButtonsContainer>
        </LengthControlContainer>
      </SettingsContainerStyled>
      <Timer secondsLeft={timeLeft} mode={mode} />
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
