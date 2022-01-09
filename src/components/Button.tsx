import ButtonStyled from "../styles/ButtonStyled";

interface ButtonProps {
  children: string;
}

const Button = ({ children }: ButtonProps) => (
  <ButtonStyled>{children}</ButtonStyled>
);

export default Button;
