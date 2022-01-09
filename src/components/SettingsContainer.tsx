import SettingsContainerStyled from "../styles/SettingsContainerStyled";
import LengtController from "./LengtController";

interface SettingsContainerProps {
  breakLength: number;
  setBreakLength: React.Dispatch<React.SetStateAction<number>>;
}

const SettingsContainer = ({
  breakLength,
  setBreakLength,
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
        label="Session Length"
      />
    </SettingsContainerStyled>
  );
};

export default SettingsContainer;
