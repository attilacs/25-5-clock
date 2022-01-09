import ButtonStyled from "../styles/ButtonStyled";

interface ButtonProps {
  id: string;
  children: string;
}

const Button = ({ children, id }: ButtonProps) => (
  <ButtonStyled id={id}>{children}</ButtonStyled>
);

export default Button;
