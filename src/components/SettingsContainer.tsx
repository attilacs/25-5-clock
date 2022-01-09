import SettingsContainerStyled from "../styles/SettingsContainerStyled";
import LengtController from "./LengtController";

const SettingsContainer = () => {
  return (
    <SettingsContainerStyled>
      <LengtController id="break-label" label="Break Length" />
    </SettingsContainerStyled>
  );
};

export default SettingsContainer;
