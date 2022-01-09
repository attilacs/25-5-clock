import SettingsContainerStyled from "../styles/SettingsContainerStyled";
import LengtController from "./LengtController";

const SettingsContainer = () => {
  return (
    <SettingsContainerStyled>
      <LengtController
        id="break-label"
        decrementId="break-decrement"
        incrementId="break-increment"
        label="Break Length"
      />
      <LengtController
        id="session-label"
        decrementId="session-decrement"
        incrementId="session-increment"
        label="Session Length"
      />
    </SettingsContainerStyled>
  );
};

export default SettingsContainer;
