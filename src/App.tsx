import { Pause, Play, Reset } from "@styled-icons/boxicons-regular";
import { useState } from "react";
import Heading from "./components/Heading";
import SettingsContainer from "./components/SettingsContainer";
import Timer from "./components/Timer";
import AppStyled from "./styles/AppStyled";
import ButtonsContainer from "./styles/ButtonContainer";
import ButtonStyled from "./styles/ButtonStyled";

const App = () => {
  const defaultBreakLength = 5;
  const defaultSessionLength = 25;

  const [breakLength, setBreakLength] = useState(defaultBreakLength);
  const [sessionLength, setSessionLength] = useState(defaultSessionLength);
  const [isRunning, setIsRunnig] = useState(false);
  const [timeLeft, setTimeLeft] = useState(defaultSessionLength * 60);
  const [isSession, setIsSession] = useState(true);

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
      <SettingsContainer
        breakLength={breakLength}
        setBreakLength={setBreakLength}
        sessionLength={sessionLength}
        setSessionLength={setSessionLength}
      />
      <Timer secondsLeft={timeLeft} />
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
    </>
  );
};

export default App;
