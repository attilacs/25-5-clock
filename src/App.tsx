import { useState } from "react";
import Heading from "./components/Heading";
import SettingsContainer from "./components/SettingsContainer";
import Timer from "./components/Timer";
import AppStyled from "./styles/AppStyled";

const App = () => {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [isRunning, setIsRunnig] = useState(false);

  const timerControl = () => {
    setIsRunnig(!isRunning);
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
    </>
  );
};

export default App;
