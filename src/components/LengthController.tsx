import { Minus, Plus } from "@styled-icons/boxicons-regular";
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
  const buttonSize = 24;

  return (
    <LengthControlContainer id={id}>
      <div>{label}</div>
      <ButtonsContainer>
        <Button id={decrementId}>
          <Minus size={buttonSize} />
        </Button>
        <div id={lengthId}>{value}</div>
        <Button id={incrementId}>
          <Plus size={buttonSize} />
        </Button>
      </ButtonsContainer>
    </LengthControlContainer>
  );
};

export default LengthController;
