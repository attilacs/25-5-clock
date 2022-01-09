import { useState } from "react";
import Heading from "./components/Heading";
import SettingsContainer from "./components/SettingsContainer";
import AppStyled from "./styles/AppStyled";

const App = () => {
  const [breakLength, setBreakLength] = useState(5);
  return (
    <>
      <AppStyled />
      <Heading />
      <SettingsContainer
        breakLength={breakLength}
        setBreakLength={setBreakLength}
      />
    </>
  );
};

export default App;
