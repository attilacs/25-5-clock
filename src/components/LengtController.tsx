import {
  LengthControlContainer,
  ButtonsContainer
} from "../styles/LengthControlStyled";
import Button from "./Button";

interface LengtControllerProps {
  id: string;
  label: string;
  decrementId: string;
}

const LengtController = ({ id, label, decrementId }: LengtControllerProps) => {
  return (
    <LengthControlContainer id={id}>
      <div>{label}</div>
      <ButtonsContainer>
        <Button id={decrementId}>⇓</Button>
      </ButtonsContainer>
    </LengthControlContainer>
  );
};

export default LengtController;
