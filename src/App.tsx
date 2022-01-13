import {
  Minus,
  Pause,
  Play,
  Plus,
  Reset
} from "@styled-icons/boxicons-regular";
import { useRef, useState } from "react";
import Heading from "./components/Heading";
import { decrementLength, incrementLength } from "./components/service";
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

  const timerControl = () => {
    setIsRunnig(!isRunning);
  };

  const resetTimer = () => {
    setIsRunnig(false);
    setBreakLength(defaultBreakLength);
    setSessionLength(defaultSessionLength);
    setTimeLeft(defaultSessionLength * 60);
  };

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
