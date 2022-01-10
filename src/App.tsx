import { Pause, Play } from "@styled-icons/boxicons-regular";
import { useState } from "react";
import Button from "./components/Button";
import Heading from "./components/Heading";
import SettingsContainer from "./components/SettingsContainer";
import Timer from "./components/Timer";
import AppStyled from "./styles/AppStyled";
import ButtonsContainer from "./styles/ButtonContainer";

const App = () => {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [isRunning, setIsRunnig] = useState(false);

  const iconSize = 48;

  const timerControl = () => {
    setIsRunnig(!isRunning);
  };

  const resetTimer = () => {
    setIsRunnig(false);
    setBreakLength(5);
    setSessionLength(25);
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
      </ButtonsContainer>
    </>
  );
};

export default App;
