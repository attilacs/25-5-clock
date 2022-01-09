import {
  LengtControlContainer,
  ButtonsContainer
} from "../styles/LengtControlStyled";
import Button from "./Button";

interface LengtControllerProps {
  id: string;
  label: string;
  decrementId: string;
}

const LengtController = ({ id, label, decrementId }: LengtControllerProps) => {
  return (
    <LengtControlContainer id={id}>
      <div>{label}</div>
      <ButtonsContainer>
        <Button id={decrementId}>⇓</Button>
      </ButtonsContainer>
    </LengtControlContainer>
  );
};

export default LengtController;
