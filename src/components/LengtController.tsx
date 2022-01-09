import { LengtControlContainer } from "../styles/LengtControlStyled";

interface LengtControllerProps {
  id: string;
  label: string;
}

const LengtController = ({ id, label }: LengtControllerProps) => {
  return (
    <LengtControlContainer id={id}>
      <div>{label}</div>
    </LengtControlContainer>
  );
};

export default LengtController;
