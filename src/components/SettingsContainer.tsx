import SettingsContainerStyled from "../styles/SettingsContainerStyled";
import LengtController from "./LengtController";

const SettingsContainer = () => {
  return (
    <SettingsContainerStyled>
      <LengtController
        id="break-label"
        decrementId="break-decrement"
        label="Break Length"
      />
      <LengtController
        id="session-label"
        decrementId="session-decrement"
        label="Session Length"
      />
    </SettingsContainerStyled>
  );
};

export default SettingsContainer;
