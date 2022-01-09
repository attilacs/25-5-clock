import SettingsContainerStyled from "../styles/SettingsContainerStyled";
import LengtController from "./LengtController";

interface SettingsContainerProps {
  breakLength: number;
  setBreakLength: React.Dispatch<React.SetStateAction<number>>;
  sessionLength: number;
  setSessionLength: React.Dispatch<React.SetStateAction<number>>;
}

const SettingsContainer = ({
  breakLength,
  setBreakLength,
  sessionLength,
  setSessionLength
}: SettingsContainerProps) => {
  return (
    <SettingsContainerStyled>
      <LengtController
        id="break-label"
        decrementId="break-decrement"
        incrementId="break-increment"
        lengthId="break-length"
        label="Break Length"
        value={breakLength}
      />
      <LengtController
        id="session-label"
        decrementId="session-decrement"
        incrementId="session-increment"
        lengthId="session-length"
        label="Session Length"
        value={sessionLength}
      />
    </SettingsContainerStyled>
  );
};

export default SettingsContainer;
