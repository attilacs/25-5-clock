import { Pause, Play, Reset } from "@styled-icons/boxicons-regular";
import { useState } from "react";
import Button from "./components/Button";
import Heading from "./components/Heading";
import SettingsContainer from "./components/SettingsContainer";
import Timer from "./components/Timer";
import AppStyled from "./styles/AppStyled";
import ButtonsContainer from "./styles/ButtonContainer";

const App = () => {
  const defaultBreakLength = 5;
  const defaultSessionLength = 25;

  const [breakLength, setBreakLength] = useState(defaultBreakLength);
  const [sessionLength, setSessionLength] = useState(defaultSessionLength);
  const [isRunning, setIsRunnig] = useState(false);
  const [timeLeft, setTimeLeft] = useState(defaultSessionLength * 60);
  const [isSession, setIsSession] = useState(true);

  const iconSize = 48;

  const timerControl = () => {
    setIsRunnig(!isRunning);
  };

  const resetTimer = () => {
    setIsRunnig(false);
    setBreakLength(defaultBreakLength);
    setSessionLength(defaultSessionLength);
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
      <Timer />
      <ButtonsContainer>
        <Button id="start_stop">
          {isRunning ? (
            <Pause onClick={timerControl} size={iconSize} />
          ) : (
            <Play onClick={timerControl} size={iconSize} />
          )}
        </Button>
        <Button id="reset">
          <Reset onClick={resetTimer} size={iconSize} />
        </Button>
      </ButtonsContainer>
    </>
  );
};

export default App;
