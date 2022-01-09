import {
  LengthControlContainer,
  ButtonsContainer
} from "../styles/LengthControlStyled";
import Button from "./Button";

interface LengtControllerProps {
  id: string;
  label: string;
  decrementId: string;
  incrementId: string;
}

const LengtController = ({
  id,
  label,
  decrementId,
  incrementId
}: LengtControllerProps) => {
  return (
    <LengthControlContainer id={id}>
      <div>{label}</div>
      <ButtonsContainer>
        <Button id={decrementId}>⇓</Button>
        <Button id={incrementId}>⇑</Button>
      </ButtonsContainer>
    </LengthControlContainer>
  );
};

export default LengtController;
