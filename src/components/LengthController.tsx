import { Minus, Plus } from "@styled-icons/boxicons-regular";
import ButtonsContainer from "../styles/ButtonContainer";
import ButtonStyled from "../styles/ButtonStyled";
import { LengthControlContainer } from "../styles/LengthControlStyled";

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
        <ButtonStyled id={decrementId}>
          <Minus size={buttonSize} />
        </ButtonStyled>
        <div id={lengthId}>{value}</div>
        <ButtonStyled id={incrementId}>
          <Plus size={buttonSize} />
        </ButtonStyled>
      </ButtonsContainer>
    </LengthControlContainer>
  );
};

export default LengthController;
