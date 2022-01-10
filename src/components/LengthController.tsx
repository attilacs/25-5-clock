import {
  LengthControlContainer,
  ButtonsContainer
} from "../styles/LengthControlStyled";
import Button from "./Button";

interface LengthControllerProps {
  id: string;
  label: string;
  decrementId: string;
  incrementId: string;
  lengthId: string;
  value: number;
}

const LengthController = ({
  id,
  label,
  decrementId,
  incrementId,
  lengthId,
  value
}: LengthControllerProps) => {
  return (
    <LengthControlContainer id={id}>
      <div>{label}</div>
      <ButtonsContainer>
        <Button id={decrementId}>⇓</Button>
        <div id={lengthId}>{value}</div>
        <Button id={incrementId}>⇑</Button>
      </ButtonsContainer>
    </LengthControlContainer>
  );
};

export default LengthController;
